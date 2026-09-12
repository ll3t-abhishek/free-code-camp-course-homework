let storedName = [];
let storedEmail = [];
let storedMessage = [];


const nameEL = document.getElementById("name-el");
const emailEL = document.getElementById("email-el");
const messageEL = document.getElementById("message-el");
const contactSubmitButton = document.querySelector(".contact-submitButton");

storedName = JSON.parse(localStorage.getItem("name"));
storedEmail = JSON.parse(localStorage.getItem("email"));
storedMessage = JSON.parse(localStorage.getItem("message"));

contactSubmitButton.addEventListener("click", submit);

function submit(e) {

  
  e.preventDefault();
  storedName.push(nameEL.value);
  storedEmail.push(emailEL.value);
  storedMessage.push(messageEL.value);

   localStorage.setItem("name", JSON.stringify(storedName));
   localStorage.setItem("email", JSON.stringify(storedEmail));
   localStorage.setItem("message", JSON.stringify(storedMessage));

}
console.log(storedName)
