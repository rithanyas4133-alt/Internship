const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

const replacements = [
  // Hex Colors
  { regex: /#38BDF8/gi, replace: '#00E5FF' }, // Primary Accent
  { regex: /#C0C0C0/gi, replace: '#67E8F9' }, // Secondary Accent
  { regex: /#08111F/gi, replace: '#050A0F' }, // Background
  { regex: /#0F172A/gi, replace: '#0C1622' }, // Surface Card
  { regex: /#162033/gi, replace: '#122033' }, // Card Hover
  { regex: /#334155/gi, replace: '#17304D' }, // Border Color
  { regex: /#CBD5E1/gi, replace: '#D1D5DB' }, // Secondary Text

  // Decimal RGB tuples (with flex spacing)
  { regex: /56,\s*189,\s*248/g, replace: '0, 229, 255' },    // Primary Accent RGB
  { regex: /192,\s*192,\s*192/g, replace: '103, 232, 249' }, // Secondary Accent RGB
  { regex: /8,\s*17,\s*31/g, replace: '5, 10, 15' },         // Background RGB
  { regex: /15,\s*23,\s*42/g, replace: '12, 22, 34' },       // Surface Card RGB
  { regex: /22,\s*32,\s*51/g, replace: '18, 32, 51' },       // Card Hover RGB
  { regex: /51,\s*65,\s*85/g, replace: '23, 48, 77' },       // Border RGB
  { regex: /203,\s*213,\s*225/g, replace: '209, 213, 219' }  // Secondary Text RGB
];

function processDirectory(directory) {
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(fullPath);
      if (['.tsx', '.ts', '.css'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        for (const rep of replacements) {
          if (rep.regex.test(content)) {
            content = content.replace(rep.regex, rep.replace);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated theme in: ${path.relative(srcDir, fullPath)}`);
        }
      }
    }
  }
}

console.log('Starting Option 6 (Electric Cyan) color theme migration...');
processDirectory(srcDir);
console.log('Migration completed successfully!');
