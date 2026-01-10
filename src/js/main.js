import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const discaimer = document.querySelector(".disclaimer > a")
discaimer.href = parkData.url;
discaimer.innerHTML = parkData.fullName;

const title = document.querySelector("title");

title.innerHTML = parkData.fullName;

const parkInfo = document.querySelector(".hero-banner__content")

function parkInfoTemplate(info){
    return `<a href="#" class="hero-banner__title">Yellowstone</a>
              <p class="hero-banner__subtitle">
                <span>${info.designation}</span>
                <span>${info.states}</span>
              </p>`
}
parkInfo.innerHTML = parkInfoTemplate(parkData);

const heroImg = document.querySelector(".hero-banner > img")
heroImg.src = parkData.images[0].url;
