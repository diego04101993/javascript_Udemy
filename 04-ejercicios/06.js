let array = [2, 5, 7, 15, -5, -100, 55]

function positivos (arr){
    let posi = 0
    for(numero of arr){
        if(numero > 0){
            posi++
        }
    }
    return posi
}
console.log('Cuantos numeros positivos existen en el array',positivos(array))