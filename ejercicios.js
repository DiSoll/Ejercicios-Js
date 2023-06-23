// EJERCICIO 1
let lista1 = [2, 4, 6, 8];
let lista2 = [3, 5, 7, 9];
let lista3 = [1, 2, 3, 4];
let listaDeListas = [lista1,lista2,lista3]


function summaArray(cualquierLista) {
    let suma = 0;
    for (let i = 0; i < cualquierLista.length; i++) {
        suma = suma + cualquierLista[i];
    }

    return suma;
}




// *OTRA FORMA DE VER RESULTADO 

// let resultadodeSuma = summaArray(numeros)
// console.log(resultadodeSuma);


// console.log(summaArray(lista1));
// console.log(summaArray(lista2));
// console.log(summaArray(lista3));



for (let i = 0; i < listaDeListas.length; i++) {
   console.log(summaArray(listaDeListas[2]));
    
}


