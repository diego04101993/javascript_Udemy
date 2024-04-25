const user = {id : 1}

//en estas lineas se agregan propiendas a el objeto user
user.name = 'Nicolas'
user.guardar = function(){
    console.log('Guardando', user.name)
}
user.guardar()

//eliminar propiedades del objeto
delete user.name
delete user.guardar
console.log(user)

//bloquear un objeto, para que no se modifique sus propiedades
const user1 = Object.freeze({id: 1})
user1.name = 'Diego'
console.log(user1)