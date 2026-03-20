//add this at the top of the file
import spritePath from '../images/sprite.symbol.svg';

// ...bunch of stuff

export function alertTemplate(alert) {
  let alertType = "";
  // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  // note the new path below for the SVG!
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>  
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

export function footerTemplate(data){
  const mailing = getMailingAddress(data.addresses)
  const voice = getPhoneNumber(data.contacts.phoneNumbers)
  /* had to add section after I looked at the answers */
  return `<section class="contact">
          <h3>CONTACT INFO</h3>
          <h4>Mailing Address:</h4>
          <div class="address">
            <p>${mailing.line1}</p>
            <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
          <h4>Phone:</h4>
          <p>${voice.phoneNumber}</p></section>
        `
}

export function getMailingAddress(addresses){
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

export function getPhoneNumber(phoneNumbers){
  const number = phoneNumbers.find((number) => number.type === "Voice");
  return number;
}

export function mediaCardTemplate(info){
  /* had to add div after I looked at the answers */
  return `<div class="media-card">
            <a class="media" href="${info.link}">
              <img src="${info.image}" alt="${info.name}">
              <h3>${info.name}</h3>
            </a>
            <p>${info.description}</p> </div>`

}

export  function parkInfoTemplate(info){
      return `<a href="#" class="hero-banner__title">${info.name}</a>
                <p class="hero-banner__subtitle">
                  <span>${info.designation}</span>
                  <span>${info.states}</span>
                </p>`
  }




export  function centerTemplate(info){
      return `<div>
          <p class="name">${info.name}</p>
          <p>${info.description}</p>
          <p>${info.directionsInfo}</p>
        </div>`
  }

  export  function activitiesTemplate(info){
      return `<li>${info.name}</li>`
  }



  


