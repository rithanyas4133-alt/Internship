const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function getFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFilesRecursively(filePath, fileList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const colorReplacements = [
  // Hex values
  { search: /#C8A276/gi, replace: '#00E5FF' },
  { search: /#D4AF37/gi, replace: '#67E8F9' },
  
  // RGBA values
  { search: /200,\s*162,\s*118/g, replace: '0, 229, 255' },
  { search: /212,\s*175,\s*55/g, replace: '103, 232, 249' },
  { search: /212,\s*160,\s*23/g, replace: '103, 232, 249' },
  { search: /245,\s*158,\s*11/g, replace: '0, 229, 255' }
];

console.log('Starting color theme replacement in:', srcDir);

const files = getFilesRecursively(srcDir);
let totalReplacements = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let hasChanged = false;

  for (const rep of colorReplacements) {
    if (rep.search.test(content)) {
      content = content.replace(rep.search, rep.replace);
      hasChanged = true;
    }
  }

  if (hasChanged) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated color themes in: ${path.relative(srcDir, file)}`);
    totalReplacements++;
  }
}

console.log(`Replacement complete! Updated ${totalReplacements} files.`);
