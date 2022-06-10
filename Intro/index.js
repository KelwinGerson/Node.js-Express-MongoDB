const fs = require('fs');

// read file
// specify mode which return → 'utf-8' = text
const pathTxt = 'C:/Users/Kelwi/OneDrive/2022/Estudos/Udemy/Node.js,Express,MongoDB,etc/complete-node-bootcamp/1-node-farm/starter/txt/'

// Read txt
const textIn = fs.readFileSync(`${pathTxt}input.txt`, 'utf-8');

//print txt
console.log(textIn);

//Today in String
var todayMili = Date(Date.now());
todayStr = todayMili.toString()

/* Write together last const
→ `aspas` is the best way from interate variable together. Like this: ${}, invoque other const
→ '\n' next line
*/
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${todayStr}`;

// Write a new thing. The second argument is a data which integrate a file.
fs.writeFileSync(`${pathTxt}output.txt`, textOut);
console.log('File written');