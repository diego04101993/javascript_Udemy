let array = [
    {
        id: 1,
        name: 'Nicolas',
    },
    {
        id: 2,
        name: 'Felipe',

    },
    {
        id: 3,
        name: 'Chanchito',
    }
]

function dosPares(arr){
    let pares = []
    for(idx in arr){
        pares[idx] = [arr[idx].id,arr[idx]]
    }
    return pares
}
console.log(dosPares(array))