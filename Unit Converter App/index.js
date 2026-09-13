const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
let meterToFeet = document.getElementById("meterToFeet");
let feetToMeter = document.getElementById("feetToMeter");
let inputValue = document.querySelectorAll(".input-value");

let litresToGallon = document.getElementById("litresToGallon");
let gallonToLitres = document.getElementById("gallonToLitres");
let kgToPounds = document.getElementById("kgToPounds");
let poundToKg = document.getElementById("poundToKg");

inputEl.addEventListener("wheel", (e) => e.target.blur());
buttonEl.addEventListener("click", convert);

function convert(){
const value = Number(inputEl.value);

inputValue.forEach(item => {
    item.textContent = value;
  });

  meterToFeet.textContent = lenConv(value).toFixed(3);
  feetToMeter.textContent = lenConvInv(value).toFixed(3);
  litresToGallon.textContent = volConv(value).toFixed(3);
  gallonToLitres.textContent = volConvInv(value).toFixed(3);
  kgToPounds.textContent = masConv(value).toFixed(3);
  poundToKg.textContent = masConvInv(value).toFixed(3);
}


function lenConv(inputNum) {
  return inputNum * 3.28084
}
function lenConvInv(inputNum) {
  return inputNum / 3.28084
}



function volConv(inputNum) {
  return inputNum * 0.264172
}
function volConvInv(inputNum) {
  return inputNum / 0.264172
}

function masConv(inputNum) {
  return inputNum * 2.20462
}
function masConvInv(inputNum) {
  return inputNum / 2.20462
}

