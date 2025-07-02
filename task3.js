const fs = require('fs')

const file = fs.readFileSync('input.txt','utf-8');

const words = file.split(/\s+/);

let count = 0;
for (const word of words) {
    if (word === "Node") {
        count++;
    }
}
fs.writeFileSync('output.txt', `${count} times`)
const output = fs.readFileSync('output.txt','utf-8')
console.log(output)
