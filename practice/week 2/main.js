const recipe = {
    "recipe_name": "Chocolate Chip Cookies",
    "ingredents": [
        {
        "name": "butter - softened",
        "amount": "1lb"
        },
        {
        "name": "Brown Sugar",
        "amount": "1 1/2 C"
        },
        {
        "name": "white sugar",
        "amount": "1 C"
        },
        {
        "name": "eggs",
        "amount": "3"
        },
        {
        "name": "vanilla",
        "amount": "2 tsp"
        },
        {
        "name": "Baking soda",
        "amount": "1 1/2 tsp"
        },
        {
        "name": "salt",
        "amount": "1/2 tsp"
        },
        {
        "name": " flour (we like 3 C white and 2 C whole wheat)",
        "amount": "5 C"
        },
        {
        "name": "semi-sweet chocolate chips",
        "amount": "2 C"
        },
        {
        "name": "shredded coconut",
        "amount": "1-2 C"
        }
    ],

    "steps": [
        {
            "1": "Cream the butter and sugar together, then beat in the eggs and vanilla"
        },
        {
            "2": "Mix in salt, soda and flour"
        },
        {
            "3": "Add chocolate chips and coconut"
        },
        {
            "4": "Bake 8-10 minutes at 350 F"
        }
    ]

}
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);