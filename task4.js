const fs = require('fs');
const readline = require('readline');

const date = new Date().toISOString().split('T')[0];
const file = `${date}.txt`;

const Ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Ques.question('Note: ', (note) => {
  fs.appendFileSync(file, note + '\n');
  rl.close();
});
