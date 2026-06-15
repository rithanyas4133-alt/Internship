const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '..', 'src', 'components', 'IndiaMapData.ts');

try {
  const fileContent = fs.readFileSync(srcFile, 'utf8');

  // Regex to extract state objects:
  // {
  //   "id": "...",
  //   "name": "...",
  //   "d": "..."
  // }
  // Since "d" is a long string, let's match it carefully
  const stateRegex = /\{\s*"id"\s*:\s*"([^"]+)"\s*,\s*"name"\s*:\s*"([^"]+)"\s*,\s*"d"\s*:\s*"([^"]+)"\s*\}/g;
  
  const targets = ['pb', 'dl', 'gj', 'mh', 'ka', 'tn', 'up', 'hr'];
  
  console.log('State Bounding Boxes & Centers:\n');

  let match;
  while ((match = stateRegex.exec(fileContent)) !== null) {
    const id = match[1];
    const name = match[2];
    const d = match[3];

    if (targets.includes(id)) {
      let curX = 0;
      let curY = 0;
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;

      // Split path by tokens (commands and numbers)
      const tokens = d.split(/[\s,]+/);
      
      let i = 0;
      let currentCommand = '';
      
      while (i < tokens.length) {
        let token = tokens[i].trim();
        if (!token) {
          i++;
          continue;
        }

        const isCommand = /^[a-zA-Z]$/.test(token);
        if (isCommand) {
          currentCommand = token;
          i++;
          continue;
        }

        // It must be a coordinate pair if we have numbers
        const xVal = parseFloat(token);
        const yVal = parseFloat(tokens[i + 1]);
        
        if (!isNaN(xVal) && !isNaN(yVal)) {
          if (currentCommand === 'M') {
            curX = xVal;
            curY = yVal;
          } else if (currentCommand === 'm') {
            curX += xVal;
            curY += yVal;
          } else if (currentCommand === 'L') {
            curX = xVal;
            curY = yVal;
          } else if (currentCommand === 'l') {
            curX += xVal;
            curY += yVal;
          } else {
            // Default to relative add if we're not sure, or absolute based on command case
            if (currentCommand === currentCommand.toLowerCase()) {
              curX += xVal;
              curY += yVal;
            } else {
              curX = xVal;
              curY = yVal;
            }
          }

          minX = Math.min(minX, curX);
          maxX = Math.max(maxX, curX);
          minY = Math.min(minY, curY);
          maxY = Math.max(maxY, curY);
          
          i += 2;
        } else {
          i++;
        }
      }

      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;

      console.log(`State: ${name} (${id})`);
      console.log(`  X: [${minX.toFixed(1)}, ${maxX.toFixed(1)}] -> Center: ${centerX.toFixed(1)}`);
      console.log(`  Y: [${minY.toFixed(1)}, ${maxY.toFixed(1)}] -> Center: ${centerY.toFixed(1)}`);
    }
  }

} catch (error) {
  console.error('Error:', error);
}
