#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function createDirectory(dirPath) {
  const fullPath = path.join(process.cwd(), dirPath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`⚠️  Directory already exists: ${fullPath}`);
    return false;
  }
  
  fs.mkdirSync(fullPath, { recursive: true });
  console.log(`✓ Created directory: ${fullPath}`);
  
  // Create a README in the new directory
  const readmePath = path.join(fullPath, 'README.md');
  const dirName = path.basename(fullPath);
  const readme = `# ${dirName}\n\nDescription of this directory...\n`;
  fs.writeFileSync(readmePath, readme);
  console.log(`✓ Created README: ${readmePath}`);
  
  return true;
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: npm run create-dir <path>');
  console.log('Example: npm run create-dir docs/backend/api');
  process.exit(1);
}

const dirPath = args[0];
createDirectory(dirPath);
