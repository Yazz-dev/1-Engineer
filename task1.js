const fs = require('fs');

fs.writeFileSync('name.txt','yasir usman');

var name = fs.readFileSync('name.txt','utf-8');
console.log(name);

fs.appendFileSync('name.txt','\nage: 20');

fs.unlinkSync('name.txt');

fs.mkdirSync('myFolder');
console.log('Folder created!');

fs.writeFileSync('myFolder/hello.txt','files inside folder created');

const allFiles = fs.readdirSync('myFolder');
console.log(allFiles);