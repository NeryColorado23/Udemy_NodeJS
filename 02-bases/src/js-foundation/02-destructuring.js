
//console.log(process.env);

//destructuring
const {SHELL, HOMEBREW_PREFIX} = process.env; 
//console.table({ SHELL, HOMEBREW_PREFIX});

const characters = ['Goku', 'Vegeta','Nery' , 'Trunks'];
const [ , , ,Goku ] = characters;