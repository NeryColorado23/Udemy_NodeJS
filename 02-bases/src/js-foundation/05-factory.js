

//factory function es una funcion que crea una función
const buidlPerson = ({name, birthdate}) =>{
    return{
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }
} 

const obj = {name: 'nery', birthdate: '1985-10-21'};
const john = buidlPerson(obj);

console.log(john);
