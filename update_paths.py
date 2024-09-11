import os

# Define the directories and file extensions you want to update
directories = [
    "herbal-remedies/community-resources",
    "herbal-remedies/general-herbal-information",
    "herbal-remedies/herbal-recipes-diy-projects",
    "herbal-remedies/herbal-remedies-for-specific-conditions",
    "herbal-remedies/herbal-wisdom-folklore",
    "herbal-remedies",
    "categories",
    "css",
    "images",
    "js"
]

def update_paths():
    # Iterate through directories
    for directory in directories:
        for root, _, files in os.walk(directory):
            for file in files:
                # Process HTML files
                if file.endswith(".html"):
                    file_path = os.path.join(root, file)
                    with open(file_path, "r") as f:
                        content = f.read()

                    # Replace old paths with new paths
                    new_content = content.replace("old-path", "new-path")

                    # Write the updated content back to the file
                    with open(file_path, "w") as f:
                        f.write(new_content)

if __name__ == "__main__":
    update_paths()
