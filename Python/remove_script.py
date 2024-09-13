import os

# Define the script block to remove
script_start = script
    function acceptCookies() {
        document.getElementById('cookieConsent').style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    }

    document.addEventListener('DOMContentLoaded', function() {
        if (localStorage.getItem('cookiesAccepted') !== 'true') {
            document.getElementById('cookieConsent').style.display = 'block';
        }
    });
script

# Function to remove script block from files
def remove_script_from_files(directory)
    for root, dirs, files in os.walk(directory)
        for file in files
            if file.endswith(.html)
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f
                    content = f.read()
                
                new_content = content.replace(script_start, '')
                
                with open(file_path, 'w', encoding='utf-8') as f
                    f.write(new_content)

# Path to your directory
directory = r'CUsersAaronsDocumentsGitHubshiny_doodle'
remove_script_from_files(directory)
