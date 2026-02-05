const users = [
    { id: 1, name: 'John Due'},
    { id: 2, name: 'John Due' },
];

//funcion que busca una persona
const  getUserById = (id, callback) => {
  const user = users.find( (user) =>{
        return user.id === id;
    });
    //console.log({user});
    if(!user){
        return callback(`user with id ${id} not found`);
    }
    return callback(null, user);
}
//pedir usuario 
//getUserById(1);

//exportar
module.exports = {
    getUserById,
};
