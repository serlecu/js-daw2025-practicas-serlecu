const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
    let numsecs = document.getElementById('numsecs');
    let user = document.getElementById('user');
    let boton = document.querySelector('button');

    boton.addEventListener('click', (ev) => {
        ev.preventDefault();
        clearFields();
        // procesarFetch(numsecs.value, user.value);
        fetchPost({
            id: 1,
            email: 'george.bluth@reqres.in',
            first_name: 'George',
            last_name: 'Bluth',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
        });
    });
});

function clearFields() {
    document.querySelectorAll('span').forEach((element) => {
        element.innerHTML = '';
        console.log(element);
    });
}

function fetchPost(data) {
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {...data},
    }

    // el POST
    fetch('http://httpbin.org/post', postOptions)
        .then((response) => {
            if (!response.ok) {
                document.getElementById('status').innerHTML = response.status;
                throw new Error(`Error HTTP en POST: ${response.status}`);
            }
            return response.json();
        })
        .then((postData) => {
            console.log(`POST DATA:`);
            console.log(postData);
            document.getElementById('name').innerHTML =
                postData.data.first_name;
            document.getElementById('status').innerHTML = 200;
        })
        .catch((error) => {
            console.error('Error en la solicitud POST:', error);
        });
}

async function procesarFetch(numsecs, user) {
    try {
        const response = await fetch(BASE_URL + user + `?delay=${numsecs}`, {
            method: 'GET',
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            // body: null //JSON.stringify()
        });
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        } else {
            const data = await response.json();
            const usuarioID = data.id;
            const usuarioEmail = data.email;
            document.getElementById('id').innerHTML = usuarioID;
            document.getElementById('email').innerHTML = usuarioEmail;

            // el POST
            fetchPost(data);
        }
    } catch (error) {
        console.error(error);
    }
}
