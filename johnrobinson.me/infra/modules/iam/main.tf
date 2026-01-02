# -----------------------------------------------------------------------------
# Data Sources
# -----------------------------------------------------------------------------

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

# -----------------------------------------------------------------------------
# IAM User
# -----------------------------------------------------------------------------

resource "aws_iam_user" "john_dev" {
  name = var.user_name
  path = var.user_path

  tags = {
    Name        = var.user_display_name
    Purpose     = "Personal development account"
    CreatedBy   = "Terraform"
    Environment = var.environment
    Project     = var.project_name
  }
}

# -----------------------------------------------------------------------------
# Console Access - Password Login
# -----------------------------------------------------------------------------

resource "aws_iam_user_login_profile" "john_dev" {
  user = aws_iam_user.john_dev.name

  password_reset_required = true

  lifecycle {
    ignore_changes = [
      password_length,
      password_reset_required,
      pgp_key
    ]
  }
}

# -----------------------------------------------------------------------------
# Programmatic Access - AWS CLI, Terraform, SDKs
# -----------------------------------------------------------------------------

resource "aws_iam_access_key" "john_dev" {
  user = aws_iam_user.john_dev.name

  lifecycle {
    create_before_destroy = true
    ignore_changes        = all
  }
}

# -----------------------------------------------------------------------------
# Permissions - Full Administrator Access
# -----------------------------------------------------------------------------

resource "aws_iam_user_policy_attachment" "admin_access" {
  user       = aws_iam_user.john_dev.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
