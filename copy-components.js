const fs = require('fs-extra');
const path = require('path');

// Copy components
const componentsDir = path.join(__dirname, 'src/components');
const distComponentsDir = path.join(__dirname, 'dist/components');

// Ensure the components directory exists in dist
fs.ensureDirSync(distComponentsDir);

// Copy all component folders
fs.readdirSync(componentsDir).forEach(component => {
    const srcPath = path.join(componentsDir, component);
    const destPath = path.join(distComponentsDir, component);
    
    if (fs.statSync(srcPath).isDirectory()) {
        fs.copySync(srcPath, destPath, {
            filter: (src) => {
                // Only copy HTML files
                return src.endsWith('.html') || fs.statSync(src).isDirectory();
            }
        });
    }
});

// Copy manifest
fs.copySync('public/site.webmanifest', 'dist/site.webmanifest');

console.log('Components and manifest copied successfully! ✨'); 