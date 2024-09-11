#!/bin/bash

# Base URL for your GitHub Pages site
base_url="https://stormryderghost.github.io/shiny_doodle"

# Define directories and files
html_directory="/c/Users/Aarons/Documents/GitHub/shiny_doodle"
output_file="all_links.txt"

# Extract links and convert relative links to absolute URLs
find "$html_directory" -type f -name '*.html' -exec grep -oP '(?<=href=")[^"]*' {} + | \
    sed "s|^/|$base_url/|" | sort -u > "$output_file"

echo "Links extracted to $output_file"
