function fetchUsuario(renderFunc) {
    fetch('https://randomuser.me/api/')
        .then((res) => {
            res.json()
                .then((data) => {
                    renderFunc(data.results[0]);
                })
                .catch((err) => {
                    console.error(`Error al parsear JSON: ${err}`);
                    return false;
                });
        })
        .catch((err) => {
            console.error(`Error al obtener usuario: ${err}`);
            return false;
        });
}

function renderUsuario(data) {
    const contEle = document.getElementById('containerProfile');
    let img = data.picture.thumbnail;
    let nombre = data.name.first + ' ' + data.name.last;
    let email = data.email;
    let dir = data.location.street.number + ' ' + data.location.street.name;
    contEle.innerHTML = `
        <div>
            <img src="${img}" style="height: 100px;" alt="Retrato">
            <div>
                <h5>${nombre}</h5>
                <p>Email: ${email}</p>
                <p>Dirección: ${dir}</p>
            </div>
        </div>
    `;
}

function main() {
    fetchUsuario(renderUsuario);
}

document.addEventListener('DOMContentLoaded', main);
