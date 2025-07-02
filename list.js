const fs = require('fs')


const fileNames = fs.readdirSync('folder');
const output = 'project_list.txt';

fs.writeFileSync(output,fileNames.join('\n'));
const fileInput = fs.readFileSync('')


console.log(fileInput)