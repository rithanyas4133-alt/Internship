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
  // Accents
  { search: /#D4AF37/gi, replace: '#38BDF8' },
  { search: /#FFD700/gi, replace: '#C0C0C0' },
  { search: /#C8A276/gi, replace: '#38BDF8' },
  { search: /#C8A45D/gi, replace: '#C0C0C0' },
  { search: /#D4A85A/gi, replace: '#38BDF8' },
  { search: /#C8A45D/gi, replace: '#C0C0C0' },
  
  // RGBA values
  { search: /212,\s*175,\s*55/g, replace: '56, 189, 248' },
  { search: /255,\s*215,\s*0/g, replace: '192, 192, 192' },
  { search: /212,\s*160,\s*23/g, replace: '192, 192, 192' },
  { search: /200,\s*162,\s*118/g, replace: '56, 189, 248' },
  { search: /245,\s*158,\s*11/g, replace: '56, 189, 248' },
  { search: /212,\s*168,\s*90/g, replace: '56, 189, 248' },
  
  // Backgrounds RGBA
  { search: /26,\s*34,\s*53/g, replace: '22, 32, 51' },       // tertiary-bg (Card Hover)
  { search: /18,\s*24,\s*38/g, replace: '15, 23, 42' },       // secondary-bg (Surface Cards)
  { search: /11,\s*15,\s*25/g, replace: '8, 17, 31' },         // primary-bg (Background)
  
  // Hardcoded Hex Backgrounds (if any)
  { search: /#0B0F19/gi, replace: '#08111F' },
  { search: /#121826/gi, replace: '#0F172A' },
  { search: /#1A2235/gi, replace: '#162033' },
  { search: /#263247/gi, replace: '#334155' }
];

console.log('Starting color conversion to Arctic Blue Silver in:', srcDir);

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
    console.log(`Converted to Arctic Blue Silver: ${path.relative(srcDir, file)}`);
    totalReplacements++;
  }
}

console.log(`Conversion complete! Updated ${totalReplacements} files.`);
