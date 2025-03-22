#!/bin/bash
# Exit on error
set -e 

DIST_DIR="dist/cv-2/browser/"  
TEMP_DIR="../temp-deploy"
BRANCH_TO_DEPLOY="master"

echo "installing node modules..."
npm i

echo "Building Angular project..."
ng build

echo "Creating temporary folder..."
rm -rf $TEMP_DIR && mkdir $TEMP_DIR && cp -r $DIST_DIR* $TEMP_DIR

echo "Switching to $BRANCH_TO_DEPLOY branch..."
git stash --include-untracked
git checkout $BRANCH_TO_DEPLOY

echo "Deleting all files except .gitignore..."
git ls-files | grep -v '.gitignore' | xargs git rm -rf

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
git stash pop

echo "Deployment successful! 🚀"

