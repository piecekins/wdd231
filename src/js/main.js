import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs"

import "../css/style.css";
import "../css/home.css";



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


async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData)
  setParkIntro(parkData)
  setParkInfo(getInfoLinks(parkData))
  enableNavigation()
}


function enableNavigation() {
  // use a querySelector to get the menu buttons
    const menuButton = document.querySelector("#global-nav-toggle")
  // when the main menu button is clicked:
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show")

    // check to see if target is the button or something inside the button
    if (target.tagName != "BUTTON"){
      target = target.closest("button")
    }
    
    // check to see if we just opened or closed the menu
    if(menuButton.getAttribute("aria-expanded") == "true"){
      // if we opened it then set the aria-expanded attribute on the button to true
      menuButton.setAttribute("aria-expanded", "false")
       }
    else{
      // if we closed it then set the aria-expanded attribute on the button to false
      menuButton.setAttribute("aria-expanded", "true")}
      
      
      
      
  });
}

init()


