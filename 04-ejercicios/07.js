function precioCompleto (precio, impuesto){
    return precio + (precio * impuesto)
}
console.log('El precio es de 19.90, pero se le gana un 15% lo cual es:',precioCompleto(19.90, 0.15))