/*
7. Mostrar por consola 50 combinaciones aleatorias 
de la lotería primitiva. Las combinaciones son 6 números 
del 1 al 49, pero debe tenerse en cuenta que no se pueden 
repetir los números en una misma combinación.
*/
let combinaciones = [];

for (let i = 0; i < 50; i++) {
  let combinacion = new Set();
  do {
    let numero = Math.floor(Math.random() * 48) + 1;
    combinacion.add(numero);
  } while (combinacion.size < 6);

  combinaciones.push([...combinacion]);
}
