import os

# Define the base directory relative to the script location
base_dir = os.path.dirname(__file__)

# Define paths relative to the base directory
directories = [
    'css',
    'images',
    'js',
    'herbal-remedies',
    'herbal-remedies/community-resources',
    'herbal-remedies/general-herbal-information',
    'herbal-remedies/herbal-recipes-diy-projects',
    'herbal-remedies/herbal-remedies-for-specific-conditions',
    'herbal-remedies/herbal-wisdom-folklore',
]

html_files = [
    'about.html',
    'archives.html',
    'categories.html',
    'contact.html',
    'exclusive-herbal-remedies-guide.html',
    'index.html',
    'privacy-policy.html',
    'subscribe.html',
]

# Function to generate paths
def generate_paths():
    # Collect all directory paths
    for directory in directories:
        path = os.path.join(base_dir, directory)
        print(f"Directory: {path}")
    
    # Collect all HTML file paths
    for html_file in html_files:
        path = os.path.join(base_dir, html_file)
        print(f"HTML File: {path}")

# Print paths
generate_paths()
