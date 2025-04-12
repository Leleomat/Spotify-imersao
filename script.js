// VERSÃO ONDE APARECE VÁRIAS OPÇÕES POR VEZ NA PESQUISA

const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result, searchTerm));
}

function displayResults(result, searchTerm) {
  resultPlaylist.classList.add("hidden");
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.innerHTML = ""; // Limpa os resultados anteriores

  const filteredArtists = result.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm)
  );

  filteredArtists.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `
          <div class="card-img">
              <img class="artist-img" src="${artist.urlImg}" />
              <div class="play">
                  <span class="fa fa-solid fa-play"></span>
              </div>
          </div>
      <div class="card-text">              
              <span class="artist-name">${artist.name}</span>
              <span class="artist-categorie">Artista</span>
          </div>
      `;
    gridContainer.appendChild(artistCard);
  });

  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === "") {
    resultPlaylist.classList.remove("hidden");
    resultArtist.classList.add("hidden");
    return;
  }

  requestApi(searchTerm);
});

// VERSÃO ONDE APARECE APENAS 1 OPÇÃO POR VEZ NA PESQUISA

// const searchInput = document.getElementById('search-input'); //Pega o elemento
// const resultArtist = document.getElementById('result-artist');
// const resultPlaylist = document.getElementById('result-playlists');

// function requestApi(searchTerm){
//     const url = `http://localhost:3000/artists?name_like=${searchTerm}`; // url da api fake
//     fetch(url)
//         .then((response) => response.json()) //Programação assíncrona // Pega a resposta e converte em json // {response.json()} as chaves só seriam utilizadas se estivesse retornando e colocando na linha de baixo, o que não é o caso, estamos retornando na mesma linha
//         .then((result) => displayResults(result))
// }

// function displayResults(result){
//     resultPlaylist.classList.add('hidden');
//     const artistName = document.getElementById('artist-name');
//     const artistImage = document.getElementById('artist-img');

//     result.forEach(element => {
//         artistName.innerText = element.name; // Nome do artista
//         artistImage.src = element.urlImg; // Imagem do artista
//     });

//     resultArtist.classList.remove('hidden'); // Vai mostrar o card
// }

// document.addEventListener('input', function() {//manipular eventos
//     const searchTerm = searchInput.value.toLowerCase(); // Pega o valor
//     if (searchTerm === ''){// '===' vê se os valores são iguais e de mesmo tipo
//         resultPlaylist.classList.remove('hidden');
//         resultArtist.classList.add('hidden');
//         return;
//     } 
//     requestApi(searchTerm);
// })

