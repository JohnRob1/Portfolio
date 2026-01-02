# Variables for Dev Environment

variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "portfolio"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "base_domain" {
  description = "Base domain name (e.g., johnrobinson.me)"
  type        = string
  default     = "johnrobinson.me"
}

variable "domain_name" {
  description = "Full domain name for this environment"
  type        = string
  default     = "dev.johnrobinson.me"
}
