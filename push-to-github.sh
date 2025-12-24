#!/bin/bash

cd "/Users/charlie/NYC FARE WEBSITE"

# Initialize git if not already initialized
if [ ! -d .git ]; then
    git init
fi

# Add remote (or update if exists)
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/charlie2bored/NYC-Fare-Systems-Website.git

# Stage all files
git add .

# Commit
git commit -m "Add Vercel configuration and build script" || git commit -m "Update: Add Vercel configuration"

# Set main branch and push
git branch -M main
git push -u origin main --force

echo "✅ Successfully pushed to GitHub!"

