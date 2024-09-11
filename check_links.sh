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
#!/bin/bash

# Define input and output files
input_file="all_links.txt"
valid_links="valid_links.txt"
invalid_links="invalid_links.txt"

# Initialize output files
> "$valid_links"
> "$invalid_links"

# Check each link
while read -r link; do
    # Skip empty lines
    [ -z "$link" ] && continue

    # Ensure the link starts with http or https
    if [[ "$link" =~ ^http ]]; then
        echo "Checking: $link"  # Debugging line
        status_code=$(curl -o /dev/null -s -w "%{http_code}" "$link")
        echo "Status Code: $status_code"  # Debugging line
        if [ "$status_code" -ge 200 ] && [ "$status_code" -lt 400 ]; then
            echo "$link" >> "$valid_links"
        else
            echo "$link" >> "$invalid_links"
        fi
    else
        echo "Non-HTTP link or malformed URL: $link"  # Debugging line
        echo "$link" >> "$invalid_links"
    fi
done < "$input_file"

echo "Validation complete. Valid links in $valid_links, invalid links in $invalid_links."
