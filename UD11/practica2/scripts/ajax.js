const BASE_URL = 'https://dummyjson.com/products/';
const POST_URL = 'https://httpbin.org/post';

function clearFields() {
    document.querySelectorAll('span').forEach((element) => {
        element.innerHTML = '';
        console.log(element);
    });
}

async function obtenerProducto(prodId) {
    try {
        const url = BASE_URL + prodId;
        const response = await fetch(url);
        // const data = await response;

        if (!response.ok) {
            throw new Error(`Error HTTP en GET: ${response.status}`);
        } else {
            console.log(`Fetch correcto: ${response.status}`);
            const data = await response.json();
            return [data.id, data.title, data.price];
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function ejecutarPOST(data) {
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    
    try {
        fetch(POST_URL, postOptions)
            .then(async (response) => {
                if (!response.ok) {
                    document.getElementById('status').innerHTML = response.status;
                    throw new Error(`Error HTTP en POST: ${response.status}`);
                } else {
                    console.log(`Fetch POST correcto: ${response.status}`);
                }
                let data = await response.json();
                return data.json;
            })
            .then((postData) => {
                console.log('Respuesta del POST:', postData);
                document.getElementById('id_post').innerHTML = postData.id;
                document.getElementById('title_post').innerHTML = postData.title;
                document.getElementById('price_post').innerHTML = postData.price;
                document.getElementById('status').innerHTML = 200;
            })
            .catch((error) => {
                console.error('Error en la solicitud POST:', error);
            });
    } catch (error) {
        console.error(error);
    }
}

async function aquireDataPipe(id) {
    // el GET
    const data = await obtenerProducto(id);

    if (typeof(data) == null) {
        document.getElementById('status').innerHTML = data;
        return;
    } else {
        const [id, title, price] = data;
        document.getElementById('id').innerHTML = id;
        document.getElementById('title').innerHTML = title;
        document.getElementById('price').innerHTML = price;

        // el POST
        await ejecutarPOST({ id: id, title: title, price: price });
    }

}

function main() {
    let prodId = document.getElementById('producto');
    let boton = document.querySelector('button');

    boton.addEventListener('click', (e) => {
        e.preventDefault();
        clearFields();
        aquireDataPipe(prodId.value);
        // try {
        //     obtenerProducto(prodId.value);
        // } catch (error) {
        //     console.error(error);
        // } finally {

        // }
    });
}

window.addEventListener('load', main());