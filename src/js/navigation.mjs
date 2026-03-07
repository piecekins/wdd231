export function subNavigation(){
  const toggles = document.querySelectorAll(".global-nav__split-button__toggle")
    toggles.forEach((toggle) => {

    toggle.addEventListener("click", (ev)=> {

    ev.currentTarget
    // took from both the example and ChatGPT to help me with this part.
    .closest(".global-nav__split-button")
    .nextElementSibling
    .classList.toggle("show")

    ev.currentTarget.querySelector(".icon").classList.toggle("rotate")
    
    })
    
    
  });
  
}
export function enableNavigation() {
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