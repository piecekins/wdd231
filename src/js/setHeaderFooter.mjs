import { footerTemplate, parkInfoTemplate } from "./templates.mjs";


function setParkFooter(data){

  
  const footer = document.querySelector("footer");

  footer.innerHTML = footerTemplate(data)
}

function setHeaderInfo(parkData){
  const discaimer = document.querySelector(".disclaimer > a")
  discaimer.href = parkData.url;
  discaimer.innerHTML = parkData.fullName;

  const title = document.querySelector("title");

  title.innerHTML = parkData.fullName;

  const parkInfo = document.querySelector(".hero-banner__content")


  parkInfo.innerHTML = parkInfoTemplate(parkData);

  const heroImg = document.querySelector(".hero-banner > img")
  heroImg.src = parkData.images[0].url;

}
export function setHeaderFooter(parkData){
    setHeaderInfo(parkData)
    setParkFooter(parkData)
}
