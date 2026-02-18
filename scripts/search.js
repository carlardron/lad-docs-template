#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function searchFiles(dir, query, results = []) {
  if (!fs.existsSync(dir)) {
    return results;
  }
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (file === 'node_modules' || file === '.git' || file === '.tmp') {
        continue;
      }
      searchFiles(filepath, query, results);
    } else if (file.endsWith('.md') || file.endsWith('.json')) {
      const content = fs.readFileSync(filepath, 'utf8');
      const lines = content.split('\n');
      
      // Search in filename
      if (file.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          file: filepath,
          type: 'filename',
          match: file
        });
      }
      
      // Search in content
      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(query.toLowerCase())) {
          results.push({
            file: filepath,
            type: 'content',
            line: index + 1,
            match: line.trim()
          });
        }
      });
    }
  }
  
  return results;
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: npm run search <query>');
  console.log('Example: npm run search "API endpoint"');
  process.exit(1);
}

const query = args.join(' ');
console.log(`🔍 Searching for: "${query}"\n`);

const rootDir = process.cwd();
const results = searchFiles(rootDir, query);

if (results.length === 0) {
  console.log('No matches found.');
} else {
  console.log(`Found ${results.length} matches:\n`);
  
  let currentFile = '';
  results.forEach(result => {
    if (result.file !== currentFile) {
      console.log(`\n📄 ${result.file}`);
      currentFile = result.file;
    }
    
    if (result.type === 'filename') {
      console.log(`   [Filename match]`);
    } else {
      console.log(`   Line ${result.line}: ${result.match}`);
    }
  });
}
