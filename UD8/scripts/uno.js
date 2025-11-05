const keyState = {
  alt: false
};

document.addEventListener('DOMContentLoaded', main);
window.addEventListener('keydown', (e) => {
  if (e.key === "Alt") {
    keyState.alt = true;
  } else if (e.key === "F12" && keyState.alt) {
    generarImagen();
  }
});
window.addEventListener('keyup', (e) => {
  if (e.key === "Alt") {
    keyState.alt = true;
  }
});

function generarImagen() {
  console.log("HEY");
  const contenedor = document.getElementById('contenedor-img');
  
  let img = fetch('https://picsum.photos/1024/720');
  img.then((response) => {
    contenedor.style.backgroundImage = `url(${response.url})`;
  });
}

function main() {
  
}