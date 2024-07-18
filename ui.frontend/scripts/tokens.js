const fs = require('fs');
const path = require('path');

// The JSON token string
const jsonString = process.env.CLIENT_PAYLOAD.tokens;
console.log('----',process.env.CLIENT_PAYLOAD.tokens);

// Parse the JSON string
let tokens;
try {
  tokens = JSON.parse(jsonString);
} catch (error) {
  console.error('Failed to parse JSON:', error);
  process.exit(1);
}

// Generate CSS content
let cssContent = ':root {\n';

for (const [collection, properties] of Object.entries(tokens)) {
  for (const [propertyName, propertyValue] of Object.entries(properties)) {
    const cssVariableName = `--${collection.replace(/\s+/g, '-').toLowerCase()}-${propertyName.replace(/\s+/g, '-').toLowerCase()}`;
    cssContent += `  ${cssVariableName}: ${propertyValue.value};\n`;
  }
}

cssContent += '}\n';

// Print the CSS content before creating the file
console.log('Generated CSS content:\n');
console.log(cssContent);

// Define the output path for the CSS file
const outputPath = path.join(__dirname, 'design-tokens.css');

// Write the CSS content to a file
fs.writeFileSync(outputPath, cssContent, 'utf8');

console.log('CSS file created successfully at:', outputPath);
