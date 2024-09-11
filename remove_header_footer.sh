#!/bin/bash

# Define the directory containing HTML files
HTML_DIR="/c/Users/Aarons/Documents/GitHub/shiny_doodle"

# Define the header and footer markers
HEADER_START='<!-- Header -->'
HEADER_END='</header>'
FOOTER_START='<!-- Footer -->'
FOOTER_END='</footer>'

# Loop through all HTML files in the directory
find "$HTML_DIR" -type f -name "*.html" | while read -r file; do
    echo "Processing $file..."

    # Backup original file
    cp "$file" "$file.bak"

    # Remove header
    sed -i "/$HEADER_START/,/$HEADER_END/d" "$file"
    
    # Remove footer
    sed -i "/$FOOTER_START/,/$FOOTER_END/d" "$file"
    
    echo "Updated $file"
done

echo "Header and footer removal complete."
