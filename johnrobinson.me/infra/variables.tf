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
  description = "Base domain for Route53"
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

variable "github_actions_oidc_provider_arn" {
  description = "ARN of the GitHub Actions OIDC provider"
  type        = string
}
