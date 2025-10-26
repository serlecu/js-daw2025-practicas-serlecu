function inWord() {
  let out = prompt('Escribe una palabra');
  return out;
}

function wordsLoop() {
  let stop = false;
  let wordList = new Set();
  do {
    let lastWord = inWord();
    if (lastWord) {
      wordList.add(lastWord);
    } else {
      stop = true;
    }
  } while (!stop);
  return [...wordList].sort().reverse();
}

function renderList(list) {
  let ul = document.createElement('ul');
  if (!list || list.length < 1) {
    console.log('No hay palabras para mostrar');
  } else {
    list.forEach((word) => {
      let li = document.createElement('li');
      li.textContent = word;
      ul.appendChild(li);
    });
  }
  return ul;
}

function main() {
  let lista = renderList(wordsLoop());
  document.getElementById('resultado').appendChild(lista);
}

main();
