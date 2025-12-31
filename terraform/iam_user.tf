# -----------------------------------------------------------------------------
# IAM User
# -----------------------------------------------------------------------------

resource "aws_iam_user" "john_dev" {
  name = "john.robinson"
  path = "/developers/"

  tags = {
    Name        = "John Robinson - Developer"
    Purpose     = "Personal development account"
    CreatedBy   = "Terraform"
    Environment = "all"
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
}

# -----------------------------------------------------------------------------
# Permissions - Full Administrator Access
# -----------------------------------------------------------------------------

resource "aws_iam_user_policy_attachment" "admin_access" {
  user       = aws_iam_user.john_dev.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
