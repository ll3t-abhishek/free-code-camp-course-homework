const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
let meterToFeet = document.getElementById("meterToFeet");
let inputValue = document.querySelectorAll(".input-value");


buttonEl.addEventListener("click", convert)

function convert(){
inputValue.textContent = " " + inputEl.value;
meterToFeet.textContent = lenConv(Number(inputEl.value)).toFixed(3);
console.log(lenConv(inputEl.value));
console.log(inputEl.value);

}


function lenConv(inputNum) {
  return inputNum * 3.28084
}
function volConv(inputNum) {
  return inputNum * 0.264172
}
function masConv(inputNum) {
  return inputNum * 2.20462
}

