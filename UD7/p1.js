/*
Queremos crear objetos que representen puntos. De ellos necesitamos:
    • Que tengan dos propiedades: x e y. Servirán para representar a las
    coordenadas del punto.
    • La construcción de los puntos se realizará con una función constructora a 
    la que se le pasan dos números. Si lo que se recibe en cada coordenada no es
     un número, se pondrá un cero.
    • Que tengan un método llamado: cambiar. A este método le pasaremos dos 
    números y nos permitirá cambiar las coordenadas del punto
    • Que tengan un método llamado: copia. Este método devolverá una copia del 
    objeto.
    • Que tengan un método llamado: suma. Este método recibe un segundo punto y 
    devuelve un tercer punto resultado de sumar las coordenadas de los dos anteriores.
Añadir código que valide/pruebe el funcionamiento de todos los requisitos.
*/

function Punto(x, y) {
  this.x = typeof x != 'number' ? 0 : x;
  this.y = typeof y != 'number' ? 0 : y;
  this.cambiar = function (x, y) {
    if (typeof x == 'number') this.x = x;
    if (typeof y == 'number') this.y = y;
  };
  this.copia = function () {
    return { ...this };
  };
  this.suma = function (p) {
    if (p instanceof Punto) return new Punto(this.x + p.x, this.y + p.y);
  };
}

let puntoA = new Punto(1, 4);
console.log(puntoA);
let puntoMal = new Punto('a', null);
console.log(puntoMal);
let puntoCopia = puntoMal.copia();
console.log(puntoCopia);
puntoCopia.cambiar(0, 2);
console.log(puntoCopia);
console.log(puntoMal.suma(puntoA));
