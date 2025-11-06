/*
Crea una función que reciba un número en milisegundos y genere un temporizador que
escriba el texto "Tiempo concluido" cuando pasen esos milisegundos.
Realmente la función no escribe, genera una promesa cuyo resultado es el texto nombrado.
En caso de que no se cumpla la promesa, el resultado será el texto: "El tiempo no va bien".
Se decidirá que la promesa no se ha cumplido cuando pase el doble de tiempo que el
indicado.
Crea un programa que invoque esta función (con 5 segundos) y escriba por pantalla
(elemento HTML) los resultados de la promesa. 
*/

function temporizador(milis){
  return new Promise(
    (resolver, rechazar) => {
      const timeInit = Date.now();
      setTimeout( 
        () => {
          if (Date.now() > 2*(timeInit + milis)){
            console.log(`Mal: elapsed=${Date.now()-timeInit}`)
            rechazar("El tiempo no va bien");
          } else {
            console.log(`Bien: elapsed=${Date.now()-timeInit}`)
            resolver("Tiempo concluido");
          }
        }, milis
      );
    }
  );
}

async function main(){
    const textEle = document.getElementById('timer-msg');

    let mensaje = await temporizador(5000);
    textEle.innerHTML = mensaje;
}

document.addEventListener('DOMContentLoaded', main);