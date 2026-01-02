# -----------------------------------------------------------------------------
# Data Source - Existing Hosted Zone
# -----------------------------------------------------------------------------

data "aws_route53_zone" "main" {
  name         = var.base_domain
  private_zone = false
}

# -----------------------------------------------------------------------------
# A Record - Points to CloudFront Distribution
# -----------------------------------------------------------------------------

resource "aws_route53_record" "website" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = false
  }
}

# -----------------------------------------------------------------------------
# AAAA Record (IPv6) - Points to CloudFront Distribution
# -----------------------------------------------------------------------------

resource "aws_route53_record" "website_ipv6" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.domain_name
  type    = "AAAA"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = false
  }
}
