/*
Crea una página que muestre el número de visitas que has realizado en la página.
 La cookie que creas caducará en un mes. Si se visita la página más de 10 veces,
 el contador se pondrá a cero y se borrará la cookie existente.
*/
const idVisitas = "contador";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return null;
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function escribirVisitas(i, id) {
    document.getElementById(id).innerHTML = `Visitas: ${i}`;
}

function manejarVisitas() {
    var visitas = getCookie("visitas");
    console.log(visitas);

    if (visitas != "" && visitas != null) {
        if (parseInt(visitas) < 10) {
            setCookie("visitas", parseInt(visitas)+1, 30);
            escribirVisitas(visitas, idVisitas);
        } else {
            deleteCookie("visitas");
            escribirVisitas(0, idVisitas);
        }
    } else {
        setCookie("visitas", 1, 30);
        escribirVisitas(1, idVisitas);
    }
}

function main() {
    manejarVisitas();
}

document.addEventListener('DOMContentLoaded', main);