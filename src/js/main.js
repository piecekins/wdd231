import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs"

const parkData = getParkData();



function setParkIntro(data){
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1>${data.fullName}</h1>
                    <p>${data.description}</p>`
                
}
function setParkInfo(data){
  /* added info.innerHTML = html.join(""); after i looked and updated it to have html const*/
  const info = document.querySelector(".info")
  const html = data.map(mediaCardTemplate)
  info.innerHTML = html.join("");
}




setHeaderFooter(parkData)
setParkIntro(parkData)
setParkInfo(parkInfoLinks)



