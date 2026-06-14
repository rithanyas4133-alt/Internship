const fs = require('fs');
const path = require('path');

// Source SVG file path
const srcFile = path.join(__dirname, 'india.svg');
const destFile = path.join(__dirname, '..', 'src', 'components', 'IndiaMapData.ts');

try {
  let content = fs.readFileSync(srcFile, 'utf8');
  
  // Find <svg ...> to </svg>
  const svgStartIndex = content.indexOf('<svg');
  if (svgStartIndex === -1) {
    throw new Error('SVG start tag not found');
  }
  const svgContent = content.substring(svgStartIndex);
  
  // Regex to match paths: <path id="..." aria-label="..." d="..." />
  // Note: paths can span multiple lines
  const cleanSvg = svgContent.replace(/\s+/g, ' ');
  const regex = /<path[^>]*id="([^"]+)"[^>]*aria-label="([^"]+)"[^>]*d="([^"]+)"[^>]*>/g;
  
  const states = [];
  let match;
  
  while ((match = regex.exec(cleanSvg)) !== null) {
    states.push({
      id: match[1],
      name: match[2],
      d: match[3]
    });
  }
  
  console.log(`Found ${states.length} states/union territories.`);
  
  if (states.length === 0) {
    // Try simpler regex
    const simpleRegex = /id="([^"]+)"[^>]*aria-label="([^"]+)"[^>]*d="([^"]+)"/g;
    while ((match = simpleRegex.exec(cleanSvg)) !== null) {
      states.push({
        id: match[1],
        name: match[2],
        d: match[3]
      });
    }
    console.log(`Fallback parsed: ${states.length} states.`);
  }

  // Create TypeScript file content
  const tsContent = `// Automatically generated India State Path Data for Interactive Map
export interface StatePath {
  id: string;
  name: string;
  d: string;
}

export const indiaStatesData: StatePath[] = ${JSON.stringify(states, null, 2)};
`;

  // Ensure output folder exists
  const destDir = path.dirname(destFile);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.writeFileSync(destFile, tsContent, 'utf8');
  console.log(`Successfully wrote ${states.length} states to ${destFile}`);
} catch (error) {
  console.error('Error parsing SVG:', error);
}
