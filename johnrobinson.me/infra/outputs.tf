output "s3_bucket_name" {
  description = "S3 bucket for deploying files"
  value       = module.main_site_cdn.s3_bucket
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID for cache invalidation"
  value       = module.main_site_cdn.cf_id
}

output "website_url" {
  description = "Website URL"
  value       = "https://${local.domain_name}"
}

output "assets_s3_bucket_name" {
  description = "S3 bucket for assets"
  value       = module.assets_site_cdn.s3_bucket
}

output "assets_cloudfront_distribution_id" {
  description = "CloudFront distribution ID for assets"
  value       = module.assets_site_cdn.cf_id
}

output "assets_url" {
  description = "Assets URL"
  value       = "https://${local.assets_domain_name}"
}

output "github_deploy_role_arn" {
  description = "ARN of the GitHub Actions deployment role"
  value       = module.github_deploy_role.arn
}
