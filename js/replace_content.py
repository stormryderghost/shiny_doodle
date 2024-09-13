import os
import re

# Define the directory containing HTML files
directory = r'C:\Users\Aarons\Documents\GitHub\shiny_doodle'

# Define the pattern to match from <!DOCTYPE html> to </header>
pattern = re.compile(r'<!DOCTYPE html>.*?(</header>)', re.DOTALL)

# Define the new content to replace
new_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Shiny Doodle offers DIY herbal remedies, tips, and holistic wellness guides for natural living.">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph Pinterest -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Shiny Doodle - DIY Herbal Remedies">
    <meta property="og:description" content="Explore natural remedies and holistic health tips.">
    <meta property="og:image" content="https://stormryderghost.github.io/shiny_doodle/images/featured-image.jpg">
    <meta property="og:url" content="https://stormryderghost.github.io/shiny_doodle/">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://stormryderghost.github.io/shiny_doodle/about.html">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Google Analytics (replace YOUR_TRACKING_ID) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR_TRACKING_ID');
    </script>

    <!-- Additional Scripts -->
    <script src="/js/link-checker.js" defer></script>
    <script src="/js/another-script.js" defer></script>

    <!-- Favicon and Icons -->
    <link rel="icon" href="/images/favicon.ico" sizes="16x16" type="image/x-icon">
    <link rel="apple-touch-icon" href="/images/apple-icon.png" sizes="180x180">

    <!-- Structured Data (Schema.org for SEO) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Shiny Doodle",
      "url": "https://stormryderghost.github.io/shiny_doodle/",
      "logo": "https://stormryderghost.github.io/shiny_doodle/images/logo.png",
      "sameAs": [
        "https://www.pinterest.com/shiny_doodle/"
      ]
    }
    </script>

    <!-- Stylesheet (for non-homepage) -->
    <link rel="stylesheet" href="/shiny_doodle/css/blog.css" id="blogStylesheet">
    
    <!-- Page Title -->
    <title>Shiny Doodle | DIY Herbal Remedies</title>

    <!-- Conditional CSS for Non-Homepage -->
    <script>
        if (window.location.pathname === "/index.html") {
            document.getElementById("blogStylesheet").remove();
        }
    </script> 
</head>
<body>
    <!-- Header Navigation -->
    <header>
        <nav>
            <div class="nav-left">
                <a href="/shiny_doodle/index.html">Home</a>
                <a href="/shiny_doodle/herbal-remedies/blog.html">Blog</a>
                <a href="/shiny_doodle/about.html">About</a>
                <a href="/shiny_doodle/contact.html">Contact</a>
                <a href="/shiny_doodle/categories.html">Categories</a>
            </div>
            <div class="nav-right">
                <a href="/shiny_doodle/privacy-policy.html">Privacy Policy</a>
                <a href="/shiny_doodle/terms-of-service.html">Terms of Service</a>
                <form action="/search" method="get" class="search-form">
                    <input type="text" name="query" placeholder="Search..." aria-label="Search">
                    <button type="submit" aria-label="Submit search"><i class="fas fa-search"></i></button>
                </form>
            </div>
        </nav>
    </header>
"""

# Process each HTML file in the directory
for filename in os.listdir(directory):
    if filename.endswith('.html'):
        file_path = os.path.join(directory, filename)
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Replace the content from <!DOCTYPE html> to </header>
        new_file_content = pattern.sub(new_content, content)

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_file_content)

print("Replacement complete.")
