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

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

# -----------------------------------------------------------------------------
# Data Source - Get Route 53 Hosted Zone
# -----------------------------------------------------------------------------

data "aws_route53_zone" "main" {
  name         = var.base_domain
  private_zone = false
}

# -----------------------------------------------------------------------------
# IAM Module
# -----------------------------------------------------------------------------

module "iam" {
  source = "../modules/iam"

  project_name = var.project_name
  environment  = var.environment
}

# -----------------------------------------------------------------------------
# SSL Module (ACM Certificate)
# -----------------------------------------------------------------------------

module "ssl" {
  source = "../modules/ssl"

  domain_name    = var.domain_name
  project_name   = var.project_name
  environment    = var.environment
  hosted_zone_id = data.aws_route53_zone.main.zone_id
}

# -----------------------------------------------------------------------------
# Storage Module (S3) - Created first without bucket policy
# -----------------------------------------------------------------------------

module "storage" {
  source = "../modules/storage"

  bucket_name  = replace(var.domain_name, ".", "-")
  project_name = var.project_name
  environment  = var.environment
}

# -----------------------------------------------------------------------------
# CDN Module (CloudFront)
# -----------------------------------------------------------------------------

module "cdn" {
  source = "../modules/cdn"

  domain_name                    = var.domain_name
  project_name                   = var.project_name
  environment                    = var.environment
  s3_bucket_id                   = module.storage.bucket_id
  s3_bucket_regional_domain_name = module.storage.bucket_regional_domain_name
  acm_certificate_arn            = module.ssl.certificate_arn

  depends_on = [module.ssl, module.storage]
}

# -----------------------------------------------------------------------------
# S3 Bucket Policy Module (created after CloudFront)
# -----------------------------------------------------------------------------

module "s3_cloudfront_policy" {
  source = "../modules/policy-s3-cloudfront"

  bucket_id                   = module.storage.bucket_id
  bucket_arn                  = module.storage.bucket_arn
  cloudfront_distribution_arn = module.cdn.distribution_arn
}

# -----------------------------------------------------------------------------
# DNS Module (Route 53 Records)
# -----------------------------------------------------------------------------

module "dns" {
  source = "../modules/dns"

  base_domain               = var.base_domain
  domain_name               = var.domain_name
  cloudfront_domain_name    = module.cdn.distribution_domain_name
  cloudfront_hosted_zone_id = module.cdn.distribution_hosted_zone_id

  depends_on = [module.cdn]
}
