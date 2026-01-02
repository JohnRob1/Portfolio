# -----------------------------------------------------------------------------
# Module Input Variables
# -----------------------------------------------------------------------------

variable "project_name" {
  description = "Name of the project"
  type        = string
}

variable "environment" {
  description = "Environment name (dev, prod, etc.)"
  type        = string
}

variable "user_name" {
  description = "IAM username"
  type        = string
  default     = "john.robinson"
}

variable "user_path" {
  description = "Path for IAM user"
  type        = string
  default     = "/developers/"
}

variable "user_display_name" {
  description = "Display name for the IAM user"
  type        = string
  default     = "John Robinson - Developer"
}
