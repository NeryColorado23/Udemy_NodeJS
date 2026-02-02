//paquete de terceros 'fs' file system
const fs = require('fs');
const data = fs.readFileSync('Readme.md','utf-8');

//cambiar nombre de react a angular
const newData = data.replace(/React/ig, 'Angular');

//mostrar contenido de readme en terminal
//console.log(data);

//creo un nuevo archivo con el contenido modificado readme-angular.md
fs.writeFileSync('Readme-Angular.md', newData);