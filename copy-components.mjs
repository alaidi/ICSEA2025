import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Copy components
const componentsDir = join(__dirname, 'src/components');
const distComponentsDir = join(__dirname, 'dist/src/components');

// Ensure the components directory exists in dist
fs.ensureDirSync(distComponentsDir);

// Copy all component folders
fs.readdirSync(componentsDir).forEach(component => {
    const srcPath = join(componentsDir, component);
    const destPath = join(distComponentsDir, component);
    
    if (fs.statSync(srcPath).isDirectory()) {
        fs.copySync(srcPath, destPath, {
            filter: (src) => {
                // Only copy HTML files
                return src.endsWith('.html') || fs.statSync(src).isDirectory();
            }
        });
    }
});

// Try to copy manifest if it exists
const manifestPath = join(__dirname, 'public/site.webmanifest');
if (fs.existsSync(manifestPath)) {
    fs.copySync(manifestPath, join(__dirname, 'dist/site.webmanifest'));
}

console.log('Components copied successfully! ✨'); 