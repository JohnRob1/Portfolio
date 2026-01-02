# -----------------------------------------------------------------------------
# Module Input Variables
# -----------------------------------------------------------------------------

variable "domain_name" {
  description = "Domain name for the certificate"
  type        = string
}

variable "project_name" {
  description = "Name of the project"
  type        = string
}

variable "environment" {
  description = "Environment name (dev, prod, etc.)"
  type        = string
}

variable "hosted_zone_id" {
  description = "Route 53 hosted zone ID for DNS validation"
  type        = string
}
