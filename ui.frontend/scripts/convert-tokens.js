const fs = require('fs');
const tokens = require('../../tokens.json');


let scssContent = '';

for (const [key, value] of Object.entries(tokens)) {
    scssContent += `$${key}: ${value};\n`;
}

try{
    fs.writeFileSync('tokens.scss', scssContent);
    console.log(scssContent);
}catch(e){
    console.log(e);
}

