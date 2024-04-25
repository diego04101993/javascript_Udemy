let pares = [
    [1, {name: 'Nicolas'}],
    [2, {name: 'Diego'}],
    [3, {name: 'Hector'}],
]

function dosPares(arr){
    let collection = []
    for(idx in arr){
        let elemento = arr[idx]
        collection[idx] = elemento[1]
        collection[idx].id = elemento[0]
    }
    return collection
}
console.log(dosPares(pares))