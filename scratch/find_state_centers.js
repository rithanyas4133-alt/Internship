const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '..', 'src', 'components', 'IndiaMapData.ts');

try {
  const fileContent = fs.readFileSync(srcFile, 'utf8');
  // Extract the JSON data from the file
  const startIdx = fileContent.indexOf('[');
  const endIdx = fileContent.lastIndexOf(']') + 1;
  const jsonStr = fileContent.substring(startIdx, endIdx);
  const states = JSON.parse(jsonStr);

  const targets = ['pb', 'dl', 'gj', 'mh', 'ka', 'tn', 'up', 'hr'];
  
  console.log('State Bounding Boxes & Centers:\n');

  states.forEach(state => {
    if (targets.includes(state.id)) {
      // Find all coordinate numbers in the path
      // Path d has coordinates. Let's parse all numbers
      const numRegex = /[-+]?[0-9]*\.?[0-9]+/g;
      const numbers = [];
      let match;
      while ((match = numRegex.exec(state.d)) !== null) {
        numbers.push(parseFloat(match[0]));
      }

      // We need to group numbers into X and Y.
      // A path starts with command like 'm X,Y' or 'M X Y'
      // This is a rough estimation of coordinate pairs. Let's look at absolute coordinates
      // Since SVG paths can be complex, let's just find the min/max of all numbers.
      // But wait! Path commands can have X and Y alternating.
      // Let's parse commands to be more accurate or just split into X and Y based on odd/even index
      // for absolute commands. Let's see if the path is mostly absolute or relative.
      // The paths in india.svg start with 'm 537.188,685.44148' (relative move) followed by relative coords.
      // Ah! If it has relative coordinates, we must accumulate them to get absolute coordinates!
      // Let's write a proper path accumulator.
      
      let curX = 0;
      let curY = 0;
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;

      // Split path by tokens (commands and numbers)
      const tokens = state.d.split(/[\s,]+/);
      
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

      console.log(`State: ${state.name} (${state.id})`);
      console.log(`  X: [${minX.toFixed(1)}, ${maxX.toFixed(1)}] -> Center: ${centerX.toFixed(1)}`);
      console.log(`  Y: [${minY.toFixed(1)}, ${maxY.toFixed(1)}] -> Center: ${centerY.toFixed(1)}`);
    }
  });

} catch (error) {
  console.error('Error:', error);
}
