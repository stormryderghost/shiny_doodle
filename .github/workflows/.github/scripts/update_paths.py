import os

# Path to your HTML files
base_dir = "herbal-remedies"  # Adjust this to match your root directory where HTML files are located

def update_paths(directory):
    for subdir, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(subdir, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Update paths based on your structure
                # Example: Remove /shiny_doodle from all paths
                new_content = content.replace('/shiny_doodle/', '/')

                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

update_paths(base_dir)
