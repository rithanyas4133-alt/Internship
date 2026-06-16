const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`=== File: ${file} ===`);
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('<section') || line.includes('background:') || line.includes('backgroundColor:')) {
      console.log(`Line ${idx + 1}: ${line.trim()}`);
    }
  });
  console.log('');
});
