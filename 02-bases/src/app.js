//importar 02 destructuring.js
//require('./js-foundation/02-destructuring');

//usar archivo desde 01template.js
//const {emailTemplate} = require('./js-foundation/01-template');

//console.log(emailTemplate);


//importar 03-callbacks.js 
//const {getUserById} = require('./js-foundation/03-callbacks');

//uso de archivo 4 arrow
//const {getUserById} = require('./js-foundation/04-arrow');

//importar 05-factory.js
require('./js-foundation/05-factory');


/*
//enviar id a la funcion usando callback, porque en el otro no imprimo nada
const id = 2;
getUserById(id, (error, user) =>{
    if(error){
        throw new Error('User not found with id', id);
    }
    console.log({user});
});

*/
