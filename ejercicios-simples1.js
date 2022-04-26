
// *********** EJERCICIO WEB CON "PROMPT" - MAYOR O MENOR DE 18 ************
// let edad = prompt('Introduce tu edad');

// if (edad <= 17 ){
//     alert('Tenes ' + edad + ' años. Sos menor de edad.')
// } else {
//     alert('Tenes ' + edad + ' años. Ya sos mayor de edad.')
// }

// *********** EJERCICIO 2: INGRESA UNA CALIFICACIÓN E IMPRIME UN MENSAJE ************
//0-2 Muy deficiente
//3-5 Insuficiente
//6   Suficiente  
//7   Bien
//8-9 Notable
//10  Sobresaliente
//

// let calificacion = prompt('Ingresa la nota (0 al 10): ');


// if (calificacion == '' || calificacion == null || calificacion == undefined){
//     alert('Campo vacío sin valor');
// }
// else if (calificacion < 3){
//     alert('Nota: '+ calificacion + 'Muy deficiente');
// } else if (calificacion <= 6){
//     alert('Nota: '+ calificacion + 'Insuficiente');
// } else if (calificacion == 6){
//     alert('Nota: '+ calificacion + 'Suficiente');
// } else if (calificacion == 7){
//     alert('Nota: '+ calificacion + 'Bien');
// } else if (calificacion <= 9){
//     alert('Nota: '+ calificacion + 'Notable');
// } else if (calificacion == 10){
//     alert('Nota: '+ calificacion + 'Es un 10');
// } else { alert('Escribiste algo mal');
// };

// *********** EJERCICIO: FIZZ BUZZ ************
// Si es multiplo de 3 escribe FIZZ, si es múltiplo de 5 escribe Buzz.
// Y si es múltipo de 3 y 5 escribre FIZZBUZZ

// for (i = 0; i < 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('FIZZBUZZ');
//     } else if ( i % 3 === 0){
//         console.log('FIZZ');
//     } else if (i % 5 === 0) {
//         console.log('BUZZ');
//     } else {
//         console.log(i);
//     }
// }

// *********** EJERCICIO 3: CONCATENA MENSAJES HASTA APRETAR CANCELAR ************
// Hacer un programa que pida strings hasta que se presione cancelar. Luego lo imprime.

// let mensaje = '';
// let texto = '';

// while ( mensaje != null){
//     mensaje = prompt('Ingrese el mensaje');
//     texto += mensaje + ' ';
//     console.log(mensaje);
//     }

// console.log(texto);

// *********** EJERCICIO 4: SUMA DE NUMEROS HASTA APRETAR CANCELAR ************
// Diseñar un programa que pida numeros hasta que se precione cancelar. 
// Al finalizar debe sumar todos los números y dar el resultado por consola.
// Si se introduce algo que no sea un numero lo debe avisar con un alert, y volver al bucle.

// let numero = 0;
// let suma = 0;

// while (numero != null){
//     numero = prompt('Ingrese un número: ');

//     if (isNaN(numero)){
//         alert('No ingresaste un número');
//     } else{
//         suma += Number(numero);
//     }
// }

// console.log('Los números ingresados suman: '+suma);


//  *********** EJERCICIO 5: DNI A LETRAS ************
/* Realizar una pagina con un script que calcule el valor de la letra de un numero de DNI

 El algoritmo para calular la letra es el siguiente:
 * El numero debe ser entre 0 y 99999999
 * Debemos calcular el resto de la division entera entre el numero y el número 23.
 * Segun el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E)
 * Si lo introducido no es un numero deberá indicarse con un alert y volver a preguntar.
 * Deberá repetirse el proceso hasta que el usuario presione cancelar.
  */
 
//  let numero = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
//  dni = prompt('Ingrese el DNI');
//  if (isNaN(dni)){
//         alert('No ingresaste un número');
//          } else{
//             letra = dni % 23;
//          }

//  console.log(letra);
//  console.log(numero[letra]);


// **** PRUEBA FUNCION DE FLECHA ****

// let a = Number(prompt('Un número'));
// let b = Number(prompt('Otro número'));
// let prueba = () => a + b;
// console.log('El resultado es: ' + prueba());