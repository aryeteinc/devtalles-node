const fs = require('node:fs');

const data = fs.readFileSync('README.md', 'utf-8');
const wordCount = data.split(' ');
console.log(wordCount.length);

//console.log(wordCount.filter(elem => elem.toLowerCase() === 'react').length);
console.log(data.match(/react/gi ?? []).length);


