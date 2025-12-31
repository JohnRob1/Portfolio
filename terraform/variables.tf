# Variables for IAM User Setup

variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-2"
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
