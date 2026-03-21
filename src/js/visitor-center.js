import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs"
import {listTemplate, vcImageTemplate, vcAmenityTemplate, vcDirectionsTemplate, vcAddressTemplate, vcContectTemplate, detailsTemplate, mainHeaderTemplate, visitorImageTemplate} from "./templates.mjs"


import "../css/visitor-center.css";
import "../css/style.css";
 
function getParam(param) {
    const params = new URLSearchParams(location.search);
    const center = params.get(param)
    return center
}

function buildHtml(centerDetails){
    const galleryHTML = listTemplate(centerDetails.images, vcImageTemplate)
   document.querySelector('.gallery').insertAdjacentHTML("beforeend", galleryHTML);

   const AmenityHTML = detailsTemplate("amenities", "heading-icon_info", "AMENITIES", listTemplate(centerDetails.amenities, vcAmenityTemplate))
   document.querySelector('.vcAmenities').insertAdjacentHTML("beforeend", AmenityHTML);
   
   const directionsHTML = detailsTemplate("directions", "heading-icon_info", "DIRECTIONS", vcDirectionsTemplate(centerDetails))
   document.querySelector('.directions').insertAdjacentHTML("beforeend", directionsHTML);
    
   const addressesHTML = detailsTemplate("addresses", "heading-icon_map-pin", "ADDRESSES", vcAddressTemplate(centerDetails))
   document.querySelector('.addresses').insertAdjacentHTML("beforeend", addressesHTML);

   const contactsHTML = detailsTemplate("contacts", "phone", "CONTACTS", vcContectTemplate(centerDetails))
   document.querySelector('.contacts').insertAdjacentHTML("beforeend", contactsHTML);

   const headerHTML = mainHeaderTemplate(centerDetails)
   document.querySelector('#MainHeader').insertAdjacentHTML("beforeend", headerHTML);

   const imageHTML = visitorImageTemplate(centerDetails)
   document.querySelector('.visitorIamge').insertAdjacentHTML("beforeend", imageHTML);

   
   document.querySelector('.info').innerHTML = centerDetails.description
}

async function init() {
   const parkData = await getParkData();
   setHeaderFooter(parkData) 
   const centerId = getParam("id")
   const centerDetails = await getParkVisitorCenterDetails(centerId)
    
    buildHtml(centerDetails)
   
;
 
 }
 
init()