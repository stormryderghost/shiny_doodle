import os

# Path to your HTML files
base_dir = "herbal-remedies"  # Adjust this to match your structure

def update_paths(directory):
    for subdir, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(subdir, file)
                with open(file_path, 'r') as f:
                    content = f.read()
                
                # Example: Update paths (Customize this based on your needs)
                new_content = content.replace('/shiny_doodle/', '')

                with open(file_path, 'w') as f:
                    f.write(new_content)

update_paths(base_dir)
