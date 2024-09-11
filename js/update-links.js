const fs = require('fs');
const path = require('path');

// Define your base URL here
const baseURL = 'https://stormryderghost.github.io/';

// Define the directories and files to process
const directories = [
    'herbal-remedies/community-resources',
    'herbal-remedies/general-herbal-information',
    'herbal-remedies/herbal-recipes-diy-projects',
    'herbal-remedies/herbal-remedies-for-specific-conditions',
    'herbal-remedies/herbal-wisdom-folklore',
    'herbal-remedies/blog.html',
    'css',
    'images',
    'js',
    '.gitattributes',
    'about.html',
    'archives.html',
    'categories.html',
    'contact.html',
    'exclusive-herbal-remedies-guide.html',
    'index.html',
    'privacy-policy.html',
    'subscribe.html',
    'terms-of-service.html'
];

const updateFileLinks = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');

    // Replace relative paths with base URL
    let updatedContent = content.replace(/(href|src)="\/([^"]*)"/g, (match, p1, p2) => {
        return `${p1}="${baseURL}${p2}"`;
    });

    fs.writeFileSync(filePath, updatedContent, 'utf8');
};

// Update links in specified directories and files
directories.forEach(dir => {
    if (fs.existsSync(dir)) {
        if (fs.lstatSync(dir).isDirectory()) {
            fs.readdirSync(dir).forEach(file => {
                const filePath = path.join(dir, file);
                if (fs.lstatSync(filePath).isFile() && filePath.endsWith('.html')) {
                    updateFileLinks(filePath);
                }
            });
        } else if (fs.lstatSync(dir).isFile()) {
            updateFileLinks(dir);
        }
    }
});
