export function temporizador(milis){
return new Promise(
  (resolver, rechazar) => {
    const timeInit = Date.now();
    setTimeout( 
      () => {
        if (Date.now() > 2*(timeInit + milis)){
          // console.log(`Mal: elapsed=${Date.now()-timeInit}`)
          rechazar("El tiempo no va bien");
        } else {
          // console.log(`Bien: elapsed=${Date.now()-timeInit}`)
          resolver("Tiempo concluido");
        }
      }, milis
    );
  }
);
}

export async function cuenta(cuenta, rate = 1000, ele = document.body, onEnd){
  ele.innerHTML = cuenta;
  for (let i = cuenta; i >= 0; i--){
    await new Promise(resolve => {
      setTimeout(
        () => {
          console.log(i);
          if (i <= 0){
            ele.innerHTML = 0;
            onEnd();
          } else {  
            ele.innerHTML = (i-1);
          }
          resolve(); // Resuelve la Promise después de ejecutar el setTimeout
        },
        rate
      );
    });
  }
}