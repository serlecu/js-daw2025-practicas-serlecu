function filtro(arr, cbkFunc) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = cbkFunc(arr[i]);
  }
  return arr;
}

// Dado un array de palabras en minúsculas, pasarlas a mayúsculas.
let a = ['rojo', 'verde', 'azul'];
console.log(`Original: ${a}`);
let b = filtro(a, (x) => {
  return x.toUpperCase();
});
console.log(`Filtrado: ${b}`);

// Dado un array de números, calcular el factorial de cada uno.
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

let c = [1, 2, 3, 4];
console.log(`Original: ${c}`);
let d = filtro(c, (x) => {
  return factorial(x);
});
console.log(`Filtrado: ${d}`);
