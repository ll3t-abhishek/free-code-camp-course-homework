const list = document.getElementById("list-el");
let inputEl = document.getElementById("input-el");
const btn = document.querySelector(".btn-el");
const listStorage = [];

btn.addEventListener("click", addItemFunction );
inputEl.addEventListener("keydown",(e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addItemFunction();
  }
}) ;

function addItemFunction () { 

  if(isValidInput() && compare()){
    listStorage.push(inputEl.value);
    list.innerHTML="";
    render();
  }       
  inputEl.value ="";

  console.log(listStorage);   
}

function isValidInput(){
  if(!inputEl.value.trim()){
    console.log("Not a valid input!");
    return false;
  }
  return true;
}

function render() {
    for(const el of listStorage){
    const newItem = document.createElement("li");
    newItem.textContent = el;
    list.appendChild(newItem);
  }    
}

function compare() {
  for(const element of listStorage){
    if(element == inputEl.value){
    console.log("value already exist");
    alert("Item already exists");
    return false;
    }       
  }  
    
  return true; 
}