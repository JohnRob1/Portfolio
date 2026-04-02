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
  domain_name = var.environment == "prod" ? var.base_domain : "${var.environment}.${var.base_domain}"
  bucket_name = var.environment == "prod" ? var.base_domain : "${var.environment}.${var.base_domain}"
}

data "aws_route53_zone" "main" {
  name         = "${var.base_domain}."
  private_zone = false
}

module "storage" {
  source = "github.com/JohnRob1/IaC-Modules//storage"

  bucket_name  = local.bucket_name
  project_name = var.project_name
  environment  = var.environment
}

module "ssl" {
  source = "github.com/JohnRob1/IaC-Modules//ssl"

  domain_name    = local.domain_name
  project_name   = var.project_name
  environment    = var.environment
  hosted_zone_id = data.aws_route53_zone.main.zone_id
}

module "cdn" {
  source = "github.com/JohnRob1/IaC-Modules//cdn"

  domain_name                    = local.domain_name
  project_name                   = var.project_name
  environment                    = var.environment
  s3_bucket_id                   = module.storage.bucket_id
  s3_bucket_regional_domain_name = module.storage.bucket_regional_domain_name
  acm_certificate_arn            = module.ssl.certificate_arn
}

module "policy_s3_cloudfront" {
  source = "github.com/JohnRob1/IaC-Modules//policy-s3-cloudfront"

  bucket_id                   = module.storage.bucket_id
  bucket_arn                  = module.storage.bucket_arn
  cloudfront_distribution_arn = module.cdn.distribution_arn
}

module "dns" {
  source = "github.com/JohnRob1/IaC-Modules//dns"

  base_domain               = var.base_domain
  domain_name               = local.domain_name
  cloudfront_domain_name    = module.cdn.distribution_domain_name
  cloudfront_hosted_zone_id = module.cdn.distribution_hosted_zone_id
}

locals {
  assets_domain_name = "assets.${var.base_domain}"
  assets_bucket_name = "assets.${var.base_domain}"
}

module "assets_storage" {
  source = "github.com/JohnRob1/IaC-Modules//storage"

  bucket_name  = local.assets_bucket_name
  project_name = var.project_name
  environment  = var.environment
}

module "assets_ssl" {
  source = "github.com/JohnRob1/IaC-Modules//ssl"

  domain_name    = local.assets_domain_name
  project_name   = var.project_name
  environment    = var.environment
  hosted_zone_id = data.aws_route53_zone.main.zone_id
}

module "assets_cdn" {
  source = "github.com/JohnRob1/IaC-Modules//cdn"

  domain_name                    = local.assets_domain_name
  project_name                   = var.project_name
  environment                    = var.environment
  s3_bucket_id                   = module.assets_storage.bucket_id
  s3_bucket_regional_domain_name = module.assets_storage.bucket_regional_domain_name
  acm_certificate_arn            = module.assets_ssl.certificate_arn
}

module "assets_policy_s3_cloudfront" {
  source = "github.com/JohnRob1/IaC-Modules//policy-s3-cloudfront"

  bucket_id                   = module.assets_storage.bucket_id
  bucket_arn                  = module.assets_storage.bucket_arn
  cloudfront_distribution_arn = module.assets_cdn.distribution_arn
}

module "assets_dns" {
  source = "github.com/JohnRob1/IaC-Modules//dns"

  base_domain               = var.base_domain
  domain_name               = local.assets_domain_name
  cloudfront_domain_name    = module.assets_cdn.distribution_domain_name
  cloudfront_hosted_zone_id = module.assets_cdn.distribution_hosted_zone_id
}
