let inputEl = document.getElementById("input-el");
let addList = document.querySelector(".add-list");
let storedTasks = document.querySelector(".stored-tasks")






function f1(){
    let userInput = inputEl.value;
    console.log(userInput);
    let newElement = document.createElement("p");

newElement.textContent = inputEl.value;
newElement.className = "cards";

storedTasks.appendChild(newElement);
}

