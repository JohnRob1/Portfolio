# Terraform and deployment

Terraform references the existing dev, production, and assets CloudFront
distributions. It manages the S3 origin policies and GitHub Actions deploy role;
Cloudflare remains authoritative for public DNS. It does not create replacement
distributions or Route 53 records.

1. Copy `terraform.tfvars.example` to `terraform.tfvars`, fill in the existing
   distribution/OAI IDs for the account, and keep the populated file uncommitted.
2. From the repository root, run:

   ```sh
   terraform -chdir=johnrobinson.me/infra init
   terraform -chdir=johnrobinson.me/infra validate
   terraform -chdir=johnrobinson.me/infra plan
   terraform -chdir=johnrobinson.me/infra apply
   ```

To publish the current site files, use `./johnrobinson.me/deploy.sh dev` or
`./johnrobinson.me/deploy.sh prod`. The production deployment uploads to the
apex-domain bucket and invalidates the existing production distribution; it does
not change the separate `/paytowin*` CloudFront behavior or Cloudflare DNS.
