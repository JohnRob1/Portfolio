terraform {
  required_version = ">= 1.0.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

locals {
  domain_name        = var.environment == "prod" ? var.base_domain : "${var.environment}.${var.base_domain}"
  assets_domain_name = "assets.${var.base_domain}"
  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    CreatedBy   = "Terraform"
  }
}

data "aws_cloudfront_distribution" "main_site" {
  id = var.main_cloudfront_distribution_id
}

data "aws_cloudfront_distribution" "prod_site" {
  id = var.prod_cloudfront_distribution_id
}

data "aws_cloudfront_distribution" "assets_site" {
  id = var.assets_cloudfront_distribution_id
}

module "github_deploy_role" {
  source  = "terraform-aws-modules/iam/aws//modules/iam-github-oidc-role"
  version = "~> 5.0"

  name = var.github_deploy_role_name

  subjects = [
    "${var.github_repo_owner}/${var.github_repo_name}:ref:refs/heads/${var.github_deploy_branch}"
  ]

  policies = {
    S3FullAccess           = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
    CloudFrontInvalidation = aws_iam_policy.cloudfront_invalidation.arn
  }

  tags = local.common_tags
}

resource "aws_s3_bucket_policy" "main_site" {
  bucket = local.domain_name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowLiveCloudFrontOACReadOnly"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::${local.domain_name}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${var.main_cloudfront_distribution_id}"
          }
        }
      },
      {
        Sid       = "ForceSSLOnlyAccess"
        Effect    = "Deny"
        Principal = "*"
        Action    = "s3:*"
        Resource  = ["arn:aws:s3:::${local.domain_name}", "arn:aws:s3:::${local.domain_name}/*"]
        Condition = { Bool = { "aws:SecureTransport" = "false" } }
      }
    ]
  })
}

resource "aws_s3_bucket_policy" "assets_site" {
  bucket = local.assets_domain_name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "S3GetObjectForCloudFront"
        Effect    = "Allow"
        Principal = { AWS = "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${var.assets_origin_access_identity_id}" }
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::${local.assets_domain_name}/*"
      },
      {
        Sid       = "S3ListBucketForCloudFront"
        Effect    = "Allow"
        Principal = { AWS = "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${var.assets_origin_access_identity_id}" }
        Action    = "s3:ListBucket"
        Resource  = "arn:aws:s3:::${local.assets_domain_name}"
      },
      {
        Sid       = "ForceSSLOnlyAccess"
        Effect    = "Deny"
        Principal = "*"
        Action    = "s3:*"
        Resource  = ["arn:aws:s3:::${local.assets_domain_name}", "arn:aws:s3:::${local.assets_domain_name}/*"]
        Condition = { Bool = { "aws:SecureTransport" = "false" } }
      }
    ]
  })
}

resource "aws_s3_bucket_public_access_block" "main_site" {
  bucket                  = local.domain_name
  block_public_acls       = true
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = false
}

resource "aws_s3_bucket_public_access_block" "assets_site" {
  bucket                  = local.assets_domain_name
  block_public_acls       = true
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = false
}

data "aws_caller_identity" "current" {}

resource "aws_iam_policy" "cloudfront_invalidation" {
  name        = "${var.github_deploy_role_name}-cloudfront-invalidation"
  description = "Allow CloudFront invalidation for GitHub Actions"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action   = "cloudfront:CreateInvalidation"
      Effect   = "Allow"
      Resource = [
        data.aws_cloudfront_distribution.main_site.arn,
        data.aws_cloudfront_distribution.prod_site.arn,
        data.aws_cloudfront_distribution.assets_site.arn,
      ]
    }]
  })
}
