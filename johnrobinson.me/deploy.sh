#!/bin/bash
set -e

ENV="${1:-dev}"

# Try to get values from Terraform outputs if available
if [ -d "infra" ]; then
  echo "Fetching infrastructure values from Terraform..."
  # Use -chdir to run terraform from the infra directory
  TERRAFORM_OUT=$(terraform -chdir=infra output -json)
  
  # Extract values using jq if available, otherwise fallback to hardcoded
  if command -v jq >/dev/null 2>&1; then
    BUCKET=$(echo "$TERRAFORM_OUT" | jq -r '.s3_bucket_name.value')
    CF_DIST_ID=$(echo "$TERRAFORM_OUT" | jq -r '.cloudfront_distribution_id.value')
    ASSETS_BUCKET=$(echo "$TERRAFORM_OUT" | jq -r '.assets_s3_bucket_name.value')
    ASSETS_CF_DIST_ID=$(echo "$TERRAFORM_OUT" | jq -r '.assets_cloudfront_distribution_id.value')
  fi
fi

echo "Deploying to: $BUCKET (CDN: $CF_DIST_ID)"
echo "Assets Bucket: $ASSETS_BUCKET (CDN: $ASSETS_CF_DIST_ID)"

deploy_file() {
  local src=$1
  local dest=$2
  
  if [ -z "$dest" ]; then
    dest=$(basename "$src")
  fi

  echo "Deploying $src to s3://$BUCKET/$dest..."
  aws s3 cp "$src" "s3://$BUCKET/$dest" --cache-control "no-cache"
}

# Deploy shared assets (from parent directory)
echo "Deploying shared assets..."
deploy_file "../base.css"
deploy_file "../layout.css"
deploy_file "../cursor-glow.css"
deploy_file "../portfolio-header.css"
deploy_file "../cursor-glow.js"
deploy_file "../portfolio-header.js"

# Deploy website files
echo "Deploying website files..."
deploy_file "index.html"
deploy_file "sidebar.css"
deploy_file "sections.css"
deploy_file "about.css"
deploy_file "skills.css"
deploy_file "sidebar-and-tiles.css"
deploy_file "about.html"
deploy_file "experiences.html"
deploy_file "creations.html"
deploy_file "content-section.js"
deploy_file "portfolio-tile.js"
deploy_file "portfolio-sidebar.js"
deploy_file "favicon.png"

# Invalidate CloudFront caches
echo "Invalidating CloudFront caches..."
aws cloudfront create-invalidation --distribution-id "$CF_DIST_ID" --paths "/*" --output text --query 'Invalidation.Id'
aws cloudfront create-invalidation --distribution-id "$ASSETS_CF_DIST_ID" --paths "/portfolio-images/*" --output text --query 'Invalidation.Id'

echo "Deploy complete!"
