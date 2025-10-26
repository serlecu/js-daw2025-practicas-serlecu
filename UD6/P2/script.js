function inWord() {
  let out = prompt('Escribe una palabra');
  return out;
}

function wordsLoop() {
  let stop = false;
  let wordList = [];
  do {
    let lastWord = inWord();
    if (lastWord != null && lastWord !== '') {
      wordList.push(lastWord);
    } else {
      stop = true;
    }
  } while (!stop);
  return [...wordList].sort().reverse();
}

function makeWordMap(words) {
  let wordMap = new Map();
  words.forEach((word) => {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  });
  return wordMap;
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
  let lista = renderList(makeWordMap(wordsLoop()).entries());
  document.getElementById('resultado').appendChild(lista);
}

main();
