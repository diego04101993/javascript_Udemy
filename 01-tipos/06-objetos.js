// Objeto
let personaje = {
    nombre: 'Tanjiro',
    anime: 'Demon Slayer',
    edad: 16,
}
 
//en esta impresion veras el obejto completo
console.log(personaje)

//Acceder a alguna propiedad o llave del objeto
console.log(personaje.nombre)
console.log(personaje['anime'])

//Cambiar una propiedad del objeto
personaje.edad = 13
console.log(personaje)

//eliminar una propiedad del objeto
delete personaje.anime
console.log(personaje)

