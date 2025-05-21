const fs = require('fs');
const path = require('path');

// Source and destination directories
const sourceDir = path.join(__dirname, 'kits', 'react-router-supabase-turbo');
const destDir = path.join(__dirname, 'docs');

// Create docs directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Function to process .mdoc files
function processFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const sourcePath = path.join(dir, file);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      processFiles(sourcePath);
    } else if (file.endsWith('.mdoc')) {
      // Convert .mdoc to .md
      const relativePath = path.relative(sourceDir, dir);
      const destSubDir = path.join(destDir, relativePath);
      const newFileName = file.replace('.mdoc', '.md');
      const destPath = path.join(destSubDir, newFileName);

      // Create subdirectory in docs if it doesn't exist
      if (!fs.existsSync(destSubDir)) {
        fs.mkdirSync(destSubDir, { recursive: true });
      }

      // Copy and rename the file
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Converted: ${sourcePath} -> ${destPath}`);
    }
  });
}

// Start processing files
try {
  processFiles(sourceDir);
  console.log('Conversion completed successfully!');
} catch (error) {
  console.error('Error during conversion:', error);
}
