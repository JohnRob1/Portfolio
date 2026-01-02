# -----------------------------------------------------------------------------
# Module Outputs
# -----------------------------------------------------------------------------

output "hosted_zone_id" {
  description = "ID of the Route 53 hosted zone"
  value       = data.aws_route53_zone.main.zone_id
}

output "hosted_zone_name" {
  description = "Name of the Route 53 hosted zone"
  value       = data.aws_route53_zone.main.name
}

output "record_name" {
  description = "Name of the DNS record"
  value       = aws_route53_record.website.name
}

output "record_fqdn" {
  description = "FQDN of the DNS record"
  value       = aws_route53_record.website.fqdn
}
