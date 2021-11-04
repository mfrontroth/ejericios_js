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


// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que
// tiene son vocales

// let frase = prompt("Escriba una frase","");
// let contador = 0;

// for(i=0; i<=frase.length; i++){
//     if(esVocal(frase[i])){
//         contador++;
//     }
// }

// document.write("La frase tiene " + contador + " vocales.")

// function esVocal(letra){
//     if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
//         return true;
//     }
//     return false;
// }


// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
// cada una de las vocales
// let frase = prompt("Escriba una frase: ", "");
// let letra_a = 0;
// let letra_e = 0;
// let letra_i = 0;
// let letra_o = 0;
// let letra_u = 0;

// for(i=0; i<frase.length; i++){
//     letra_a += parseInt(esVocal(frase[i],"a"));
//     letra_e += esVocal(frase[i],"e");
//     letra_i += esVocal(frase[i],"i");
//     letra_o += esVocal(frase[i],"o");
//     letra_u += esVocal(frase[i],"u");
// }
// document.write("La cantidad de vocales son: a= " + letra_a + ", e= " + letra_e + ", i= " + letra_i + ", o= " + letra_o + " y u= " + letra_u);

// function esVocal(caracter, vocal){
// var valor =  (caracter === vocal) ? 1: 0;
//     return valor;
// }

//    // Otra forma de escribirlo
// // function esVocal(caracter, vocal){
// //     if(caracter === vocal){
// //         return 1;
// //     }
// //     return 0;
// // }


// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
// 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// let num = prompt("Ingrese un numero: ","");
// if(num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0){
//     document.write("Es divisible por 2, 3, 5 o 7.");
// }else{
//     document.write("NO es divisible por 2, 3, 5 o 7.");
// }


// 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
// que decir todos por los que es divisible)
// let num = prompt("Ingrese un número: ","");
// document.write(multiplo(num,2) + " " + multiplo(num,3) + " " + multiplo(num,5) + " " + multiplo(num,7))

// function multiplo(numero,valor){
//     return numero % valor === 0 ? valor: "";
// }


// 15. Escribir un programa que escriba en pantalla los divisores de un número dado
// let numero = prompt("Ingrese un número: ","");
// for(i=0;i<=9;i++){
//     document.write(divisor(numero,i) + " ");
// }

// function divisor(num, valor){
//     return num % valor === 0 ? valor: "";
// }


// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos
// números dados
// let num1 = prompt("Ingrese un número: ", "");
// let num2 = prompt("Ingrese un número: ", "");

// for (i = 0; i <= mayor(num1,num2); i++) {
//   document.write(divisores(num1, num2, i) + " ");
// }

// function divisores(num1, num2, valor) {
//   return (num1 % valor === 0 && num2 % valor === 0) ? valor : "";
// }

// function mayor(num1, num2){
// return (num1 >= num2) ? num1 : num2;
// }


// 17. Escribir un programa que nos diga si un número dado es primo (no es divisible
// por ninguno otro número que no sea él mismo o la unidad)
// let num = prompt("Ingrese un número: ", "");
// let flag = true;

// for (i = 2; i < num; i++) {
// if (num % i === 0){
//     flag = false;
//     i = num; //por si el número es elevado salga del for ni bien encuentre un divisor
// }
// }
// (flag) ? document.write("Es un numero primo.") : document.write("No es un numero primo.")


// 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir
// let edad = prompt("Ingrese su edad: ","");
// let resultado = edad>=18 ? "ya puede conducir": "aún no puede conducir";
// document.write(resultado);


// 19. Pide una nota (número). Muestra la calificación según la nota:
// ● 0-3: Muy deficiente
// ● 3-5: Insuficiente
// ● 5-6: Suficiente
// ● 6-7: Bien
// ● 7-9: Notable
// ● 9-10: Sobresaliente
// let nota = prompt("Ingrese su nota (0-10): ","");
// let calificacion ="";

// if(nota >= 0 && nota < 3){
//     calificacion = "Muy deficiente";
// }
// if(nota >= 3 && nota < 5){
//     calificacion = "Insuficiente";
// }
// if(nota >= 5 && nota < 6){
//     calificacion = "Suficiente";
// }
// if(nota >= 6 && nota < 7){
//     calificacion = "Bien";
// }
// if(nota >= 7 && nota < 9){
//     calificacion = "Notable";
// }
// if(nota >= 9 && nota <= 10){
//     calificacion = "Sobresaliente";
// }

// document.write(calificacion);



// 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión


// 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
// deberá indicarse la suma total de los números introducidos.
// 22. Realizar una página con un script que calcule el valor de la letra de un número
// de DNI (Documento Nacional de Identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// ● El número debe ser entre 0 y 99999999
// ● Debemos calcular el resto de la división entera entre el número y el número
// 23.
// ● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
// (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// ● Si lo introducido no es un número deberá indicarse con un alert y volver a
// preguntar.
// ● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
// 23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
// 22
// 333
// 4444
// 55555
// 666666
// …….
// 24. Haz un script que escriba una pirámide inversa de los números del 1 al
// número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
// 666666
// 55555
// 4444
// 333
// 22
// 1
// 25. Un script que escriba los números del 1 al 500, que indique cuáles son
// múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5
// ————————————————————
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10