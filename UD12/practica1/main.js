/*
Crear una página web que al cabo de 5 segundos de estar en ella muestre una notificación 
al usuario para que visite un nuevo video que se ha publicado.

Para ello, crea una 
X- Función timeout que reciba el número de ms como parámetro y cree una promesa con el timeout 
como acción.
X- Cuando la cuenta llegue a cero, se mostrará la notificación. 
X - Cuando  el  usuario  clica  en  la  notificación,  llevarle  a  una  página  en  el  que  se  muestre  el 
video que se adjunta en esta tarea. 
*/

// función timeout que reciba el número de ms como parámetro y cree una promesa con el timeout como acción
function timeout(millis) {
    const countSpan = document.createElement("span");
    document.body.appendChild(countSpan);

    let counter = Math.floor(millis / 1000);
    countSpan.textContent = `Tiempo restante: ${counter} segundos`

    const promise = new Promise((res) => {
        let end = false;

        const interval = setInterval( () => {
            if (counter > 0) {
                counter--;
            }
            countSpan.textContent = `Tiempo restante: ${counter} segundos`;
        }, 1000);

        setTimeout( () => {
            clearInterval(interval);
            res()
        }, millis);
    });

    return promise
}

function main() {
    timeout(3000).then( () => {
        alert("¡Han pasado 3 segundos!");
        window.location.href = "video.html";
    }).catch( () => {
        console.log("Tiempo no terminado");
    });
}

document.addEventListener("DOMContentLoaded", main);