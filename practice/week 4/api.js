// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "SzodULOIfov2bbzdOYqnJ94U452fzgNdXsuynr1O";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}
function listTemplate(item) {
  
    console.log(`<li><a href="${item.url}">${item.fullname}</a>${item.states}</li>`)
    return `<li><a href="${item.url}">${item.fullname}</a>${item.states}</li>`    
}

async function renderClimbingList() {
    const outputlist = document.querySelector("#outputlist")

    const info = await getJson("activities/parks?q=climbing");
    const parks = info.data
    
    const html = parks.map(listTemplate).join("");
    outputlist.innerHTML = html
}




renderClimbingList()