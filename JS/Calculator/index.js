let calc = 0;
function calcf7() {
    let calcInv = document.getElementById("calc-inv").innerText 
    calcInv = calcInv + 7;
    document.getElementById("calc-inv").innerText = calcInv;
    console.log(7);
    calc += 7;
}
console
function calcf8() {
    let calcInv = document.getElementById("calc-inv").innerText 
    calcInv = calcInv + 8;
    document.getElementById("calc-inv").innerText = calcInv;
    console.log(8);
    calc += 8;
}


function calcfMult() {
    let calcInv = document.getElementById("calc-inv").innerText 
    calcInv = calcInv + '*';
    document.getElementById("calc-inv").innerText = calcInv;
    console.log('*');
}

function calcfEqual() {
    let calcInv = document.getElementById("calc-inv").innerText 
    calcInv = calcInv + '=';
    document.getElementById("calc-inv").innerText = calcInv;
    console.log('=');
    document.getElementById("calc-result").textContent = calc;
    
}