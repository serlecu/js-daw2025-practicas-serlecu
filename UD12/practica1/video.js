/*
X- Al hacer clic con el botón izquierdo del ratón en el video, éste se parará o se reproducirá. 
X- Cada clic cambia de un estado a otro. 
X- Al hacer clic con el botón derecho del ratón en el video, debe aparecer un texto en la parte 
inferior que nos diga el tiempo total del vídeo en minutos y segundos.
*/

function onLeftClick(e) {
    e.preventDefault();
    const ele = e.currentTarget;
    if(ele.paused) {
        ele.play();
    } else {
        ele.pause()
    }
}

function onRightClick(e) {
    e.preventDefault();
    const ele = e.currentTarget;
    const duracion = document.getElementById("duracion");
    if (!duracion) {
        document.createElement("p");
        const p = document.createElement("p");
        p.id = "duracion";
        const totalSeg = Math.floor(ele.duration);
        const mins = Math.floor(totalSeg / 60);
        const segs = totalSeg % 60;
        p.textContent = `Duración total: ${mins} minutos y ${segs} segundos.`;
        document.body.appendChild(p);
    } else {
        duracion.remove();
    }
}


function main() {
    const videoEle = document.getElementById("videoframe");
    videoEle.loop = true;

    videoEle.addEventListener("click", onLeftClick);
    videoEle.addEventListener("auxclick", onRightClick);
}

document.addEventListener("DOMContentLoaded", main);