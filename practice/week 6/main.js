const element = document.querySelector("#contact-form")



function submitForm(event){
    const name = this.name;
    const email = this.email;
    console.log(email)

    const error = "";
    if (validateEmail(email)){
        error = "";
    }
    else{
        error = "You did not put a vaild email"
    }
    if (error != ""){
        event.preventDefault();
        document.getElementById("form-error").textContent = error;
    }

}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

element.addEventListener("submit", submitForm)