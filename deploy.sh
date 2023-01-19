#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP dist/ crod@christherod.com:/var/www/christherod.com/
echo "Deployment complete"