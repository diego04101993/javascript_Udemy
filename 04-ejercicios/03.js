function getbyIdx(arr, idx){
    if(idx < 0 || arr.length <= idx){
        return 'Elemento no existe'
    }

    return arr[idx]
}
console.log(getbyIdx([1,2,3,4,5], 1))