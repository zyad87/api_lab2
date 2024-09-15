let url = `https://rickandmortyapi.com/api/character`;
async function fetchData() {
  let res = await fetch(url, { method: 'GET' });
  let data = await res.json();

  console.log(data.results);

  let characters = data.results;
  let cardContainer = document.getElementById('flex-container');

  characters.forEach((element) => {
    card = document.createElement('div');
    nameCharacter = document.createElement('p');
    imgCharacter = document.createElement('img');
    card.classList.add('card');
    nameCharacter.innerText = element.name;
    imgCharacter.src = element.image;
    card.appendChild(nameCharacter);
    card.appendChild(imgCharacter);
    cardContainer.appendChild(card);
  });
}
fetchData();