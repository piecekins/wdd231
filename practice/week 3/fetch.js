// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;



function doStuff(data) {
  results = data;
  console.log("first: ", results);
  let info = `<h2>Name: ${results.name}</h2>
            <p>ID: ${results.id}</p>
            <img src="${results.sprites.front_default}" alt="image of ${results.name}">
            `
  const html = document.querySelector("#output");
  html.innerHTML = info;

}




            
const newUrl = "https://pokeapi.co/api/v2/pokemon";


function pokemonName(pokeList){
  
  return `<li>${pokeList.name}</li>`

}

async function getPokemon(url, doStuff) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}


function doStuffList(data){
  const htmlList = document.querySelector("#outputList");
    const pokelist = data.results;
    sortPokemon(pokelist)
    const html = pokelist.map(pokemonName)
    htmlList.innerHTML = html.join("");
}

function sortPokemon(list){
  return list.sort(compare)

}
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name){
    return 1;
  }
  // a must be equal to b
  return 0;
}


getPokemon(url, doStuff);
console.log("second: ", results);
getPokemon(newUrl, doStuffList)