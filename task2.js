const fs = require('fs')

var names = fs.readFileSync('names.txt','utf-8').split('\n').reverse();
fs.writeFileSync('reverse.txt',names.join('\n'));
var reversedData = fs.readFileSync('reverse.txt','utf-8');
console.log(reversedData)


