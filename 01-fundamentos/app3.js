//paquete de terceros 'fs' file system
const fs = require('fs');
const content = fs.readFileSync('Readme.md','utf-8');

const wordCount = content.split(' ').length;
console.log('Palabras', wordCount);

//contar palabras que tienen react
const reactWordCount = content.match(/react/gi ?? []).length;
console.log('Palabras React', reactWordCount);