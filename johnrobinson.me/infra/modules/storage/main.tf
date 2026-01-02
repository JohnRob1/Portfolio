# -----------------------------------------------------------------------------
# S3 Bucket for Static Website Hosting
# -----------------------------------------------------------------------------

resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name

  tags = {
    Name        = var.bucket_name
    Environment = var.environment
    Project     = var.project_name
    Purpose     = "Static website hosting"
  }
}

# -----------------------------------------------------------------------------
# Block Public Access - CloudFront will use OAC
# -----------------------------------------------------------------------------

resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# -----------------------------------------------------------------------------
# Bucket Versioning
# -----------------------------------------------------------------------------

resource "aws_s3_bucket_versioning" "website" {
  bucket = aws_s3_bucket.website.id

  versioning_configuration {
    status = "Enabled"
  }
}

# -----------------------------------------------------------------------------
# Server-Side Encryption
# -----------------------------------------------------------------------------

resource "aws_s3_bucket_server_side_encryption_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

