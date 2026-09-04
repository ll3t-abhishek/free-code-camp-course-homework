let generatedPwd1 = document.getElementById("generated-pwd1");
let generatedPwd2 = document.getElementById("generated-pwd2");

let pwdLength = document.;

let password = [];

function passwordGenerator(){
    let randomNumber = "";
    let pwdCharacter = "";

    password = [];

    for(i = 0; i < 15; i++){
        randomNumber = Math.floor((Math.random() * 89) + 33);
        pwdCharacter = String.fromCharCode(randomNumber);
        // generatedPwd1.textContent += pwdCharacter;
        password.push(pwdCharacter);
        
    }
        
}   



function startApp(){
    passwordGenerator();
    let passWord1 = "";
    for(let i = 0; i < pwdLength; i++){ 
        passWord1 += password[i]}
    console.log(passWord1)
    generatedPwd1.textContent = passWord1;

       

     passwordGenerator();
    let passWord2 = "";
    for(let i = 0; i < pwdLength; i++){ 
        passWord2 += password[i]}
    console.log(passWord2)
    generatedPwd2.textContent = passWord2;

    
    
}



