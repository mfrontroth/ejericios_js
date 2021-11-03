// Actividad Práctica Adicional - JavaScript Unidad 1

// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
// alert que diga “Hello World”.
//alert("Hello World");

// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
// diga “Hello World” (document.write).
//document.write("Hello World");

// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
// de sumar 3 + 5.
// document.write(3+5);

// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un
// prompt y escriba un texto que diga “Hola nombreUsuario”
// var nombre = prompt("Ingrese su nombre: ","");
// document.write("Hola "+ nombre);

// 5. Escribe un programa de tres líneas que pida un número, pida otro número y
// escriba el resultado de sumar estos dos números.
// let num1 = prompt("Ingrese un número: ","");
// let num2 = prompt("Ingrese otro número: ","");
// document.write("La suma de " + num1 + " y " + num2 + " es: " + (parseInt(num1) + parseInt(num2)));

// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
// mayor.
// let num1 = prompt("Ingrese un número: ", "");
// let num2 = prompt("Ingrese otro número: ", "");

// if (num1 > num2) {
//   document.write("El mayor es: " + parseInt(num1));
// } else if (num2 > num1) {
//     document.write("El mayor es: " + parseInt(num2));
// } else {
//   document.write("Son iguales");
// }

// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
// los tres.
// let num1 = prompt("Ingrese un número: ", "");
// let num2 = prompt("Ingrese un número: ", "");
// let num3 = prompt("Ingrese un número: ", "");

// document.write("El mayor de: " + num1 + " " + num2 + " " + num3 + " es: ");

// if (num1 > num2 && num1 > num3) {
//   document.write(num1);
// } else if (num2 > num1 && num2 > num3) {
//   document.write(num2);
// } else if (num3 > num1 && num3 > num2) {
//     document.write(num3);
// } else {
//   document.write(" es: Son iguales ");
// }

// 8. Escribe un programa que pida un número y diga si es divisible por 2
// let num = prompt("Ingrese un número: ","");
// var resultado = num%2 === 0 ? "Es divisible": "No es divisible";
// document.write(resultado);

// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
// letra a
// let frase = prompt("Escriba una frase: ", "");
// let tamanio = frase.length;
// let cont = 0;
// for (i = 0; i <= tamanio; i++) {
//   if (frase[i] === "a") {
//     cont++;
//   }
// }

// document.write("La frase es: " + frase);
// document.write("La cantidad de veces que aparece a es: " + cont);

// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen
// let frase = prompt("Ingrese una frase: ", "");
// let tam = frase.length;

// for (i = 0; i <= tam; i++) {
//   if (
//     frase[i] === "a" ||
//     frase[i] === "e" ||
//     frase[i] === "i" ||
//     frase[i] === "o" ||
//     frase[i] === "u"
//   ) {
//     document.write(frase[i]);
//   }
// }

// /* Otra forma es*/

// var text = prompt("Escribe una frase");
// var nText = text.length;
// var i;

// for (i = 0; i < nText; i++) {
// if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
// document.write(text.substr(i,1));
// }
// }

