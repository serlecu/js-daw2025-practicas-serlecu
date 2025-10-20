/*
2. Crea un array vacío llamado letras. Inserta al principio
 del array las letras A, B y C. Luego, inserta al final las
 letras D y E. Finalmente, elimina el primer elemento y el
 último, e imprime el array final.
*/

let letras = new Array();
letras.push('A', 'B', 'C');

letras.push('D', 'E');

letras.shift();
letras.pop();

console.log(letras);
