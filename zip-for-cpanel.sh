#!/bin/zsh

# Stop on errors
set -e

echo "Starting build for cPanel deployment..."

# 1. Clean previous artifacts
rm -rf out
rm -f vertex_deploy.zip

# 2. Build (generates static files in out/)
npm run build

# 3. Zip the out/ directory contents (not the folder itself)
cd out
zip -r ../vertex_deploy.zip .
cd ..

echo "Done! 'vertex_deploy.zip' is ready."
echo "Upload it to cPanel File Manager, extract into public_html/, and overwrite existing files."
