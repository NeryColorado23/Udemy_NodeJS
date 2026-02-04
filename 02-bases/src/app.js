//importar 02 destructuring.js
//require('./js-foundation/02-destructuring');

//usar archivo desde 01template.js
//const {emailTemplate} = require('./js-foundation/01-template');

//console.log(emailTemplate);


//importar 03-callbacks.js 
const {getUserById} = require('./js-foundation/03-callbacks');
//enviar id a la funcion usando callback, porque en el otro no imprimo nada
const id = 2;
getUserById(id, function(error, user){
    if(error){
        throw new Error('User not found with id', id);
    }
    console.log(user);
});
