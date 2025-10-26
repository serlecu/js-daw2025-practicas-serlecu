/*
Los objetos de tipo Array (en definitiva, los arrays) poseen numerosos métodos 
que resultan muy útiles. 

Esta práctica consiste en añadir un método a todos los arrays para el cálculo 
de la media aritmética de sus elementos. 

Modificar el prototipo de los arrays para añadir el llamado método.

Hace falta utilizar el método reduce() de los Arrays.
Añadir código que valide/pruebe el funcionamiento de los requisitos.
*/

Array.prototype.mediaAritmetica = function () {
  //   let counter = 0;
  //   let sum = 0;
  //   this.forEach((element) => {
  //     if (typeof element === 'number') {
  //       sum += element;
  //       counter++;
  //     }
  //   });
  //   return counter > 0 ? sum / counter : 0;

  return (
    this.reduce((prev, valor) => {
      if (typeof valor === 'number') {
        return prev + valor;
      }
      return prev;
    }) /
    this.filter((valor) => {
      return typeof valor === 'number';
    }).length
  );
};

console.log([1, 2, 3, 4, 5].mediaAritmetica());
console.log([1, '2', 3, '4', 5].mediaAritmetica());
console.log([1, 2, 3, 4, '5'].mediaAritmetica());
console.log([1, 2, 3, 4, 5, null].mediaAritmetica());
console.log([null, null].mediaAritmetica());
