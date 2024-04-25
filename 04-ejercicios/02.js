function nombreResolucion(ancho,alto){
    if(ancho >= 7680 && alto >= 4320){
        return 'Resolucion 8K '
    }else if(ancho >= 3840 && alto >= 2160 ){
        return 'Resolucion 4K '
    }else if(ancho >= 2560 && alto >= 1440 ){
        return 'Resolucion WQHD ',ancho,alto
    }else if(ancho >= 1920 && alto >= 1080 ){
        return 'Resolucion FHD '
    }else if(ancho >= 1280 && alto >= 720 ){
        return 'Resolucion HD '
    }else{
        return false
    }
}
console.log(nombreResolucion(3845,2180))