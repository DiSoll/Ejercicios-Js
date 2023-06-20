// EJERCICIO 1

function summaArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}

const numeros = [1, 2, 3, 4, 5];


// *OTRA FORMA DE VER RESULTADO
// let resultadodeSuma = summaArray(numeros)
// console.log(resultadodeSuma);

console.log(summaArray(numeros));