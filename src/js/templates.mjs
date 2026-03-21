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

      return `<li class="visitor-center">
          <h4><a href="visitor-center.html?id=${info.id}">${info.name}</a></h4>
          <p>${info.description}</p>
          <p>${info.directionsInfo}</p>
          </li>`
  }

  export  function activitiesTemplate(info){
      return `<li>${info.name}</li>`
  }






export function listTemplate(data, contentTemplate){
  const html = data.map(contentTemplate)
  return `<ul>${html.join("")}</ul>`; 
}

export function vcImageTemplate(data){
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export function vcAmenityTemplate(data){
  return `<li>${data}</li>`;
}

export function vcDirectionsTemplate(data){
  return `<p>${data.directionsInfo}</p>`;
}

export function vcAddressTemplate(data){
  return `<h3>Physical Address</h3>
              <address>
                ${data.addresses[0].line1}<br />
                ${data.addresses[0].city}, ${data.addresses[0].stateCode} ${data.addresses[1].postalCode}
              </address>
              <h3>Mailing address</h3>
              <address>
                ${data.addresses[1].line1}<br />
                ${data.addresses[1].city}, ${data.addresses[1].stateCode} ${data.addresses[1].postalCode}
              
              </address>`;
}

export function vcContectTemplate(data){
  return `<section class="vc-contact__email">
              <h3>Email Address</h3>
              <a href="email:${data.contacts.emailAddresses[0].emailAddresses}">Send this visitor center an email</a>
              </section>
              <section class="vc-contact__phone">
              <h3>Phone numbers</h3>
              <a href="tel:+${data.contacts.phoneNumbers[0].phoneNumber}">${data.contacts.phoneNumbers[0].phoneNumber}</a>
                `;
}





export function detailsTemplate(id, icon, summary, content){
  return `<details class="centers" name="${id}">
            <summary>
              
                <svg class="icon" role="presentation" focusable="false">
                  <use xlink:href="/images/sprite.symbol.svg#${icon}"></use>
                </svg>
                ${summary}
            </summary>
            
            <section class="id">
              ${content}
            </section>
        </details>
      </section>`
}


export function mainHeaderTemplate(data){
  return `<h1>
            <svg class="icon" role="presentation" focusable="false">
            <use xlink:href="/images/sprite.symbol.svg#ranger-station"></use>
            </svg>
            ${data.name}
          </h1>`;
}

export function visitorImageTemplate(data){
  return `<img src="${data.images[0].url}" alt="${data.images[0].altText}">
        <p>${data.images[0].caption}</p>`
}


  


