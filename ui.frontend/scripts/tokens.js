const fs = require('fs');
const path = require('path');

// Access the payload data from environment variables
const clientPayload = process.env.CLIENT_PAYLOAD;

if (!clientPayload) {
  console.error('No client payload found');
  process.exit(1);
}

let payloadObject;
try {
  payloadObject = JSON.parse(clientPayload);
} catch (error) {
  console.error('Failed to parse client payload:', error);
  process.exit(1);
}

// Assuming payloadObject contains your design tokens
const tokens = payloadObject.tokens;

// Generate SCSS content
let scssContent = '';
for (const [key, value] of Object.entries(tokens)) {
  scssContent += `$${key}: ${value};\n`;
}

// Define the output path for the SCSS file
const outputPath = path.join(__dirname, 'design-tokens.scss');

// Write the SCSS content to a file
fs.writeFileSync(outputPath, scssContent, 'utf8');

console.log('SCSS file created successfully at:', outputPath);
