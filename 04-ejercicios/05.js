let array = [2, 5, 7, 15, -5, -100, 55]

function getMenorMayor(arr){
    const mayor = Math.max(...arr)
    const menor = Math.min(...arr)
    return [menor, mayor]
}
console.log(getMenorMayor(array))

console.log('')

function getMenorMayor2(arr){
    let menor = arr[0]
    let mayor = arr[0]
    for (numero of arr){
        menor = menor < numero ? menor : numero
        mayor = mayor > numero ? mayor : numero
    }
    return [menor, mayor]
}
console.log(getMenorMayor2(array))