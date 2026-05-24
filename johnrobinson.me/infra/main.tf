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

data "aws_route53_zone" "main" {
  name         = "${var.base_domain}."
  private_zone = false
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

resource "aws_iam_policy" "cloudfront_invalidation" {
  name        = "${var.github_deploy_role_name}-cloudfront-invalidation"
  description = "Allow CloudFront invalidation for GitHub Actions"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action   = "cloudfront:CreateInvalidation"
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

module "main_site_cdn" {
  source  = "cloudposse/cloudfront-s3-cdn/aws"
  version = "0.95.0"

  namespace = var.project_name
  stage     = var.environment
  name      = "site"

  origin_bucket = local.domain_name

  parent_zone_id      = data.aws_route53_zone.main.zone_id
  dns_alias_enabled   = true
  aliases             = [local.domain_name]
  acm_certificate_arn = module.main_site_ssl.acm_certificate_arn

  # CloudPosse module handles S3 bucket and CloudFront distribution
  s3_access_logging_enabled = false
  cloudfront_access_logging_enabled = false
  origin_force_destroy = true

  tags = local.common_tags
  }

# CloudPosse module doesn't automatically create certificates across regions easily 
# if we want them in us-east-1 for CloudFront. Using terraform-aws-modules/acm/aws for SSL.
module "main_site_ssl" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 5.0"

  domain_name = local.domain_name
  zone_id     = data.aws_route53_zone.main.zone_id

  validation_method = "DNS"

  # CloudFront requires certificates in us-east-1
  providers = {
    aws = aws
  }

  tags = local.common_tags
}

module "assets_site_cdn" {
  source  = "cloudposse/cloudfront-s3-cdn/aws"
  version = "0.95.0"

  namespace = var.project_name
  stage     = var.environment
  name      = "assets"

  origin_bucket = local.assets_domain_name

  parent_zone_id      = data.aws_route53_zone.main.zone_id
  dns_alias_enabled   = true
  aliases             = [local.assets_domain_name]
  acm_certificate_arn = module.assets_site_ssl.acm_certificate_arn

  s3_access_logging_enabled = false
  cloudfront_access_logging_enabled = false
  origin_force_destroy = true

  tags = local.common_tags
  }

module "assets_site_ssl" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 5.0"

  domain_name = local.assets_domain_name
  zone_id     = data.aws_route53_zone.main.zone_id

  validation_method = "DNS"

  providers = {
    aws = aws
  }

  tags = local.common_tags
}
