#!/bin/bash
# Exit on error
set -e 

# Define variables
DIST_DIR="dist/cv-2"  # Update with your Angular project name inside dist
TEMP_DIR="../temp-deploy"           # Temporary storage for dist files
BRANCH_TO_DEPLOY="master"

echo "installing node modules..."
npm i

echo "Building Angular project..."
npm run build --prod

echo "Creating temporary folder..."
rm -rf $TEMP_DIR
mkdir $TEMP_DIR

echo "Copying dist files to temporary folder..."
cp -r $DIST_DIR/* $TEMP_DIR

echo "Switching to $BRANCH_TO_DEPLOY branch..."
git checkout $BRANCH_TO_DEPLOY

echo "Deleting old files..."
git rm -rf .

echo "Moving new dist files from temporary folder..."
cp -r $TEMP_DIR/* .

echo "Cleaning up temporary folder..."
rm -rf $TEMP_DIR

echo "Adding changes to $BRANCH_TO_DEPLOY branch..."
git add .
git commit -m "Deploy: $(date)"

echo "Pushing to $BRANCH_TO_DEPLOY branch..."
git push origin $BRANCH_TO_DEPLOY

echo "Switching back to main branch..."
git checkout main

echo "Deployment successful! 🚀"

