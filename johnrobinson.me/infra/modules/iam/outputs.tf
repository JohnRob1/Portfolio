# Outputs for IAM User Credentials
# These contain sensitive information - save immediately after apply

# -----------------------------------------------------------------------------
# IAM User Information
# -----------------------------------------------------------------------------

output "iam_user_name" {
  description = "IAM username for console login"
  value       = aws_iam_user.john_dev.name
}

output "iam_user_arn" {
  description = "ARN of the IAM user"
  value       = aws_iam_user.john_dev.arn
}

# -----------------------------------------------------------------------------
# Credentials
# -----------------------------------------------------------------------------

output "access_key_id" {
  description = "AWS Access Key ID"
  value       = aws_iam_access_key.john_dev.id
  sensitive   = true
}

output "secret_access_key" {
  description = "AWS Secret Access Key"
  value       = aws_iam_access_key.john_dev.secret
  sensitive   = true
}

output "initial_password" {
  description = "Initial password"
  value       = aws_iam_user_login_profile.john_dev.password
  sensitive   = true
}

# -----------------------------------------------------------------------------
# Console Login Information
# -----------------------------------------------------------------------------

output "console_login_url" {
  description = "AWS Console login URL"
  value       = "https://${data.aws_caller_identity.current.account_id}.signin.aws.amazon.com/console"
}

output "aws_account_id" {
  description = "AWS Account ID"
  value       = data.aws_caller_identity.current.account_id
}

output "aws_region" {
  description = "AWS Region"
  value       = data.aws_region.current.name
}
