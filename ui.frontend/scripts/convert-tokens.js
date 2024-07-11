const fs = require('fs');
const tokens = require('../../tokens.json');


let scssContent = '';

for (const [key, value] of Object.entries(tokens)) {
    scssContent += `$${key}: ${value};\n`;
}
fs.writeFileSync('tokens.css', scssContent);
