#!/usr/bin/env node

// Ultra-simple build for Netlify - just copy the essential files
import fs from 'fs';
import path from 'path';

const buildDir = 'dist';

// Create dist directory
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy the HTML file and update paths
const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Job Search Hub - Find Jobs on LinkedIn, Indeed & Naukri</title>
    <meta name="description" content="Generate instant job search links for LinkedIn, Indeed, and Naukri. Enter your job title and location to get direct access to relevant opportunities across multiple platforms." />
    <meta name="keywords" content="job search, LinkedIn jobs, Indeed jobs, Naukri jobs, career opportunities, job finder" />
    
    <!-- Open Graph tags for social media -->
    <meta property="og:title" content="Job Search Hub - Multi-Platform Job Search Tool" />
    <meta property="og:description" content="Search for jobs across LinkedIn, Indeed, and Naukri with one simple form. Find your dream job faster." />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Job Search Hub - Find Jobs Across Platforms" />
    <meta name="twitter:description" content="Generate instant job search links for LinkedIn, Indeed, and Naukri with our free tool." />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body { font-family: 'Inter', sans-serif; }
    </style>
  </head>
  <body class="min-h-screen bg-slate-50">
    <div id="app"></div>
    <script type="module" src="./app.js"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(buildDir, 'index.html'), htmlContent);

// Copy the JavaScript app file
fs.copyFileSync('app.js', path.join(buildDir, 'app.js'));

console.log('Simple build completed for Netlify!');
console.log('✓ Created index.html');
console.log('✓ Copied app.js');
console.log('✓ Ready for deployment');