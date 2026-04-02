#!/bin/bash
set -e

ENV="${1:-dev}"

case "$ENV" in
  prod)
    BUCKET="johnrobinson.me"
    CF_DIST_ID="E19N53TXHZ5NP6"
    ASSETS_BUCKET="assets.johnrobinson.me"
    ASSETS_CF_DIST_ID="E22FLIK7R3OZW4"
    ;;
  dev)
    BUCKET="dev.johnrobinson.me"
    CF_DIST_ID="ED0HQ1UV7D657"
    ASSETS_BUCKET="assets.johnrobinson.me"
    ASSETS_CF_DIST_ID="E22FLIK7R3OZW4"
    ;;
  *)
    echo "Usage: ./deploy.sh [dev|prod]"
    exit 1
    ;;
esac

echo "Deploying $ENV to: $BUCKET"
echo "Assets bucket: $ASSETS_BUCKET"

# Deploy website files
echo "Deploying website files..."
aws s3 cp index.html "s3://$BUCKET/index.html" --cache-control "no-cache"
aws s3 cp styles.css "s3://$BUCKET/styles.css" --cache-control "no-cache"
aws s3 cp script.js  "s3://$BUCKET/script.js"  --cache-control "no-cache"
aws s3 cp favicon.png  "s3://$BUCKET/favicon.png"  --cache-control "no-cache"

# Invalidate CloudFront caches
echo "Invalidating CloudFront caches..."
aws cloudfront create-invalidation --distribution-id "$CF_DIST_ID" --paths "/*" --output text --query 'Invalidation.Id'
aws cloudfront create-invalidation --distribution-id "$ASSETS_CF_DIST_ID" --paths "/portfolio-images/*" --output text --query 'Invalidation.Id'

echo "Deploy complete!"
