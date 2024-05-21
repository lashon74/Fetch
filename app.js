// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const move1 = data.moves[getRandomInt(100)]["move"]["name"];
    const move2 = data.moves[getRandomInt(100)]["move"]["name"];
    const move3 = data.moves[getRandomInt(100)]["move"]["name"];
    const move4 = data.moves[getRandomInt(100)]["move"]["name"];
    const imgElement = document.getElementById("pokemonSprite");
    const ui1 = document.getElementById("move1");
    const ui2 = document.getElementById("move2");
    const ui3 = document.getElementById("move3");
    const ui4 = document.getElementById("move4");

    imgElement.src = pokemonSprite;
    ui1.innerText = move1;
    ui2.innerText = move2;
    ui3.innerText = move3;
    ui4.innerText = move4;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
  .then((response) => response.json())
  .then((data) => console.log())
  .catch((error) => console.log(error));
