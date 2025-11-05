document.addEventListener('DOMContentLoaded', main);

function handleDragCapa1(e) {
  e.target.style.opacity = 0.5;
}

function handleDropCapa2(ele, e) {
  e.preventDefault();

  if( e.target.id == "capa2") {
    e.target.style.backgroundColor = "red";
    e.target.innerHTML= "Lo has logrado";
    ele.style.display = "none";
  }
}

function main() {
  const arrastrable = document.getElementById('capa1');
  const destino = document.getElementById('capa2');

  arrastrable.addEventListener('drag', (e) => handleDragCapa1(e));
  destino.addEventListener('dragover', (e) => e.preventDefault());
  destino.addEventListener('drop', (e) => handleDropCapa2(arrastrable,e));
}

