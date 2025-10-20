/*
8. Se desea validar hasta qué punto la función 
Math.random es realmente aleatoria. Para tal fin, 
calcularemos 10.000 veces números aleatorios del 
1 al 10. Por consola mostraremos cada número del 
1 al 10 y a continuación el número de veces que 
ha salido ese número.
*/

let numeros = new Map();

for (let i = 0; i < 10000; i++) {
  let num = Math.floor(Math.random() * 10) + 1;
  if (numeros.has(num)) {
    numeros.set(num, numeros.get(num) + 1);
  } else {
    numeros.set(num, 1);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`Número ${i}: ${numeros.get(i)}`);
}
