//Ejercicio 1: Escribe un bucle while que imprima los números del 1 al 5.
console.log("-------------Ejercicio 1-------------");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Ejercicio 2: Escribe un bucle for que imprima los elementos de un array de nombres.
console.log("-------------Ejercicio 2-------------");
const nombres = ["Ana", "Juan", "Pedro", "Maria"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//Ejercicio 3: Usa forEach para imprimir los elementos de un array de números multiplicados por 2.
console.log("-------------Ejercicio 3-------------");
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function (numero) {
    console.log(numero * 2);
});

//Ejercicio 4: Usa map para crear un nuevo array con los cuadrados de los números de un array dado.
console.log("-------------Ejercicio 4-------------");
const numerosOriginales = [1, 2, 3, 4, 5];
const cuadrados = numerosOriginales.map(function (numero) {
    return numero * numero;
});
console.log(cuadrados);

//Ejercicio 5: Usa find para encontrar el primer número mayor que 10 en un array de números.
console.log("-------------Ejercicio 5-------------");
const numerosParaBuscar = [5, 8, 12, 15, 7];
const mayorQueDiez = numerosParaBuscar.find(function (numero) {
    return numero > 10;
});
console.log(mayorQueDiez);

//Ejercicio 6: Usa some para verificar si hay algún número par en un array de números.
console.log("-------------Ejercicio 6-------------");
const numerosParaVerificar = [1, 3, 5, 7, 10];
const hayPar = numerosParaVerificar.some(function (numero) {
    return numero % 2 === 0;
});
console.log(hayPar);

//Ejercicio 7: Usa filter para crear un nuevo array con los números impares de un array dado.
console.log("-------------Ejercicio 7-------------");
const numerosParaFiltrar = [1, 2, 3, 4, 5, 6];
const impares = numerosParaFiltrar.filter(function (numero) {
    return numero % 2 !== 0;
});
console.log(impares);

//Ejercicio 8: Combina filter y map para crear un nuevo array con los cuadrados de los números impares de un array dado.
console.log("-------------Ejercicio 8-------------");
const numerosParaCombinar = [1, 2, 3, 4, 5, 6];
const cuadradosImpares = numerosParaCombinar
    .filter(function (numero) {
        return numero % 2 !== 0;
    })
    .map(function (numero) {
        return numero * numero;
    });
console.log(cuadradosImpares);
