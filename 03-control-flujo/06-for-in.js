//for-in sirve para objetos --> sirve para ver las propiedades y sus valores del objeto

let user = {
    id: 1,
    name: 'Perro',
    age: 25,
}

for(let prop in user){
    console.log(prop, user[prop])
}

