output "s3_bucket_name" {
  description = "S3 bucket for deploying files"
  value       = local.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID for cache invalidation"
  value       = data.aws_cloudfront_distribution.main_site.id
}

output "website_url" {
  description = "Website URL"
  value       = "https://${local.domain_name}"
}

output "prod_s3_bucket_name" {
  description = "Production S3 bucket for deploying files"
  value       = var.base_domain
}

output "prod_cloudfront_distribution_id" {
  description = "Existing production CloudFront distribution ID"
  value       = data.aws_cloudfront_distribution.prod_site.id
}

output "prod_website_url" {
  description = "Production website URL"
  value       = "https://${var.base_domain}"
}

output "assets_s3_bucket_name" {
  description = "S3 bucket for assets"
  value       = local.assets_domain_name
}

output "assets_cloudfront_distribution_id" {
  description = "CloudFront distribution ID for assets"
  value       = data.aws_cloudfront_distribution.assets_site.id
}

output "assets_url" {
  description = "Assets URL"
  value       = "https://${local.assets_domain_name}"
}

output "github_deploy_role_arn" {
  description = "ARN of the GitHub Actions deployment role"
  value       = module.github_deploy_role.arn
}
