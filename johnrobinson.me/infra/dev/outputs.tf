# -----------------------------------------------------------------------------
# Environment Outputs
# -----------------------------------------------------------------------------

# IAM Outputs
output "iam_user_name" {
  description = "IAM username for console login"
  value       = module.iam.iam_user_name
}

output "iam_user_arn" {
  description = "ARN of the IAM user"
  value       = module.iam.iam_user_arn
}

output "access_key_id" {
  description = "AWS Access Key ID"
  value       = module.iam.access_key_id
  sensitive   = true
}

output "secret_access_key" {
  description = "AWS Secret Access Key"
  value       = module.iam.secret_access_key
  sensitive   = true
}

output "initial_password" {
  description = "Initial password for console login"
  value       = module.iam.initial_password
  sensitive   = true
}

output "console_login_url" {
  description = "AWS Console login URL"
  value       = module.iam.console_login_url
}

# Storage Outputs
output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = module.storage.bucket_id
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = module.storage.bucket_arn
}

# CDN Outputs
output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = module.cdn.distribution_id
}

output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution"
  value       = module.cdn.distribution_domain_name
}

# DNS Outputs
output "website_url" {
  description = "URL of the website"
  value       = "https://${var.domain_name}"
}

output "dns_record_fqdn" {
  description = "FQDN of the DNS record"
  value       = module.dns.record_fqdn
}

# SSL Outputs
output "certificate_arn" {
  description = "ARN of the ACM certificate"
  value       = module.ssl.certificate_arn
}
