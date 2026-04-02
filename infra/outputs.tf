output "s3_bucket_name" {
  description = "S3 bucket for deploying files"
  value       = module.storage.bucket_id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID for cache invalidation"
  value       = module.cdn.distribution_id
}

output "website_url" {
  description = "Website URL"
  value       = "https://${local.domain_name}"
}

output "assets_s3_bucket_name" {
  description = "S3 bucket for assets"
  value       = module.assets_storage.bucket_id
}

output "assets_cloudfront_distribution_id" {
  description = "CloudFront distribution ID for assets"
  value       = module.assets_cdn.distribution_id
}

output "assets_url" {
  description = "Assets URL"
  value       = "https://${local.assets_domain_name}"
}
