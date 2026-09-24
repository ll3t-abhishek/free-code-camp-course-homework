const compName = document.getElementById("comp-name");
const symbol = document.getElementById("symbol");
let price = document.getElementById("price");
let time = document.getElementById("time");
let strngSymbol = document.getElementById("triangle");

symbol.textContent = "QTA";
compName.textContent = "QtechAI";

function randomNumber(){
 let rn = (Math.random() * 3).toFixed(2);
 return rn;
}

let rN = 0;

let num= [];

let solution = setInterval(() =>{
  
    let rN = randomNumber ();
    price.textContent = rN;
    time.textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
    num.push(rN);
    console.log(num);
    
    if(num.length < 2){
    strngSymbol.textContent = "🔼";
    }else if(num[num.length -1]>num[num.length -2]){
    strngSymbol.textContent = "🔼"; 
    }else if(num[num.length -1] == num[num.length -2]){
      strngSymbol.textContent = "◀▶"; 
    }else{
      strngSymbol.textContent = "🔽"; 
    }

}, 2000
)


// class stockCard {
//   constructor(cName, symbol, price, time){
//     this.cName = ;
//     this.symbol = ;
//     this.price = ;
//     this.time = ;

//   }
// }



