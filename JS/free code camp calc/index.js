let number_1 = Number(document.getElementById("num1").innerText);
let number_2 = Number(document.getElementById("num2").innerText);

function add() {

    let sum = number_1 + number_2;
    console.log(sum);
    document.getElementById("result").innerText = "Sum:" + sum;
    

}
function subtract() {

    let subtract = number_1 -  number_2;
    console.log(subtract);
    document.getElementById("result").innerText = "Subtraction is :" + subtract;
    

}

function divide() {

    let divide = number_1 / number_2;
    console.log(divide);
    document.getElementById("result").innerText = "Division is:" + divide;
    

}

function multiply() {

    let multiply = number_1 * number_2;
    console.log(multiply);
    document.getElementById("result").innerText = "Multiplication is:" + multiply;
    

}


