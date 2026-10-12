variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name"
  type        = string
}

variable "environment" {
  description = "Environment"
  type        = string
}

variable "base_domain" {
  description = "Base domain managed in Cloudflare"
  type        = string
}

variable "github_repo_owner" {
  description = "GitHub repository owner for deployments"
  type        = string
}

variable "github_repo_name" {
  description = "GitHub repository name for deployments"
  type        = string
}

variable "github_deploy_branch" {
  description = "Git branch allowed to assume the deploy role"
  type        = string
  default     = "master"
}

variable "github_deploy_role_name" {
  description = "IAM role name used by the GitHub deployment workflow"
  type        = string
}

variable "main_cloudfront_distribution_id" {
  description = "Existing CloudFront distribution for the dev site"
  type        = string
}

variable "prod_cloudfront_distribution_id" {
  description = "Existing CloudFront distribution for the production site"
  type        = string
}

variable "assets_cloudfront_distribution_id" {
  description = "Existing CloudFront distribution for site assets"
  type        = string
}

variable "assets_origin_access_identity_id" {
  description = "Existing CloudFront OAI used by the assets distribution"
  type        = string
}
