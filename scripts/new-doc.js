#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function getTemplate(type) {
  const templatePath = path.join(__dirname, '..', 'templates', `${type}.md`);
  if (fs.existsSync(templatePath)) {
    return fs.readFileSync(templatePath, 'utf8');
  }
  return `# ${type.charAt(0).toUpperCase() + type.slice(1)}\n\n## Overview\n\n## Details\n\n## Notes\n`;
}

async function main() {
  console.log('📝 Create New Document\n');
  
  const category = await question('Category (docs/procedures/ai-procedures): ');
  const title = await question('Document title: ');
  const type = await question('Template type (note/procedure/ai-sprint) [note]: ') || 'note';
  const subdirs = await question('Subdirectories (e.g., "backend/api") [optional]: ');
  
  // Construct the full path
  let fullPath = path.join(__dirname, '..', category);
  
  if (subdirs) {
    fullPath = path.join(fullPath, subdirs);
  }
  
  // Create directories if they don't exist
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created directory: ${fullPath}`);
  }
  
  // Create the file
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.md';
  const filepath = path.join(fullPath, filename);
  
  if (fs.existsSync(filepath)) {
    const overwrite = await question('File already exists. Overwrite? (y/n): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('Cancelled.');
      rl.close();
      return;
    }
  }
  
  const template = getTemplate(type);
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Replace placeholders in template
  let content = template
    .replace(/# .+/m, `# ${title}`)  // Replace first heading with title
    .replace(/{date}/g, currentDate)  // Replace all {date} with current date
    .replace(/{category}/g, category); // Replace {category} with actual category
  
  fs.writeFileSync(filepath, content);
  console.log(`\n✓ Created document: ${filepath}`);
  
  rl.close();
}

main().catch(error => {
  console.error('Error:', error);
  rl.close();
  process.exit(1);
});
