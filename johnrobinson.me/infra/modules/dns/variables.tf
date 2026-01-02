# -----------------------------------------------------------------------------
# Module Input Variables
# -----------------------------------------------------------------------------

variable "base_domain" {
  description = "Base domain name (e.g., johnrobinson.me)"
  type        = string
}

variable "domain_name" {
  description = "Full domain name (e.g., dev.johnrobinson.me)"
  type        = string
}

variable "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  type        = string
}

variable "cloudfront_hosted_zone_id" {
  description = "CloudFront distribution hosted zone ID"
  type        = string
}
