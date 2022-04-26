// ********** EJERCICIO 1: PIRAMIDE **********
//  Realizar un script que escriba una pirámide de 1 al 30 de la siguiente forma: 
// 1
// 22
// 333
// 4444
// 55555
// 666666
// .......

// let x=0;
// let mensaje = '';
// while (x < 30){
//     mensaje = '';
//     let contador = 1;
//     x += 1;
//     while (contador <= x){
//         mensaje += x;
//         contador += 1;
//         }
    
//     console.log(mensaje)

// };




// ********** EJERCICIO 2: PIRAMIDE INVERSA **********
// Hacer una piramide como la anterior pero inversa, en base al número que ingrese el usuario.
// Ej. numero = 25
//25252525252525252525252525252525252525252525252525
//242424242424242424242424242424242424242424242424
//2323232323232323232323232323232323232323232323
//......


let mensaje = '';
let numero_final = prompt('Ingrese un número: ');
let x = numero_final;
while (0 != numero_final){
    mensaje = '';
    let contador = numero_final  ;
    
    while (contador != 0){
        mensaje += x;
        contador -= 1;
        };
    x -= 1;
    numero_final -= 1;
    console.log(mensaje);

};



// ********** EJERCICIO 3: PIRAMIDE INVERSA **********
// Hacer una pirámide que numeros contínuos como en el ejemplo:
//1
//12
//123
//1234
//...... hasta el número que ingrese el usuario (máximo 50).


// ********** EJERCICIO 4: PIRAMIDE INVERSA **********
// Hacer un script que escriba los números del 1 al 500. Si es múltiplo de 4 y de 9 lo debe indicar,
// y cada 5 números que haga una línea horizontal.
// Ejemplo:
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5 ------------------------
// 6
// 7
// 8
// 9 (Múltiplo de 4)
// 10 -----------------------


// ********** EJERCICIO 5: TABLAS Y COLUMNAS **********
// Escribir un script que pida numero de filas y columnas y escriba una tabla. 
// Dentro de cada una de las celdas debera escribirse un número consecutivo en orden descendente.
// Si por ejemplo, la tabla es de 7x5 los números irán del 35 al 1.
// *** VER LA SOLUCIÓN PORQUE USA <td>