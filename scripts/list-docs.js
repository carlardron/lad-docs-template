#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFiles(dir, indent = '', results = []) {
  if (!fs.existsSync(dir)) {
    return results;
  }
  
  const files = fs.readdirSync(dir).sort();
  
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .git, scripts, templates
      if (file === 'node_modules' || file === '.git' || file === 'scripts' || file === 'templates' || file === '.tmp') {
        continue;
      }
      results.push({ indent, name: `📁 ${file}/`, path: filepath, isDir: true });
      listFiles(filepath, indent + '  ', results);
    } else if (file.endsWith('.md') || file.endsWith('.json')) {
      const size = stat.size;
      const icon = file.endsWith('.md') ? '📝' : '📋';
      results.push({ indent, name: `${icon} ${file}`, path: filepath, size, isDir: false });
    }
  }
  
  return results;
}

const args = process.argv.slice(2);
const category = args[0] || '.';

console.log(`📚 Documents in ${category}\n`);

const rootDir = path.join(process.cwd(), category);
const results = listFiles(rootDir);

if (results.length === 0) {
  console.log('No documents found.');
} else {
  results.forEach(result => {
    if (result.isDir) {
      console.log(`${result.indent}${result.name}`);
    } else {
      const sizeKB = (result.size / 1024).toFixed(1);
      console.log(`${result.indent}${result.name} (${sizeKB} KB)`);
    }
  });
  
  const docCount = results.filter(r => !r.isDir).length;
  const dirCount = results.filter(r => r.isDir).length;
  console.log(`\n📊 Total: ${docCount} documents in ${dirCount} directories`);
}
