/*
5. Crea un array llamado valores que contenga números,
 algunos de los cuales son duplicados. Utiliza un Set 
 para crear un nuevo array que contenga solo los 
 números únicos y luego imprímelo.
*/

let valores = [1, 2, 3, 2, 3, 4, 3, 4, 5];

let valoresSet = new Set(valores);

let valoresUnicos = [...valoresSet];

console.log(valoresUnicos);
