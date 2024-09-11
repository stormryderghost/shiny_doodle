#!/bin/bash

# Base URL for your site
BASE_URL="https://stormryderghost.github.io/shiny_doodle/"

# List of files to update paths
FILES=(
  "index.html"
  "about.html"
  "contact.html"
  # Add more HTML files as needed
)

# Update paths in each file
for FILE in "${FILES[@]}"; do
  sed -i "s|href=\"/|href=\"$BASE_URL|g" "$FILE"
  sed -i "s|src=\"/|src=\"$BASE_URL|g" "$FILE"
done

# Commit changes if any files were updated
if git status --porcelain | grep .; then
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
  git add .
  git commit -m "Update file paths"
  git push
fi
