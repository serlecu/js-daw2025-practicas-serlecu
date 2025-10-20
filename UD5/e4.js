/*
4. Crea un array llamado numeros con al menos seis números.
 Usa desestructuración para obtener los primeros dos 
 números en variables individuales y almacena el resto de
 los números en un array llamado resto.
*/

let numeros = [10, 20, 30, 40, 50, 60];

let [num1, num2, ...resto] = numeros;
