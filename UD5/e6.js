/*
6. Crea un Map que almacene nombres como claves 
y edades como valores. Luego, agrega algunos nombres 
y edades, actualiza la edad de uno de ellos, y 
finalmente imprime todos los nombres con sus edades.
*/

let personas = new Map();

personas.set('Adam', 40);
personas.set('Sara', 54);
personas.set('Alberto', 25);
personas.set('Irene', 32);

personas.set('Sara', 53);

for (let [nombre, edad] of personas) {
  console.log(nombre + ' -> ' + edad);
}
