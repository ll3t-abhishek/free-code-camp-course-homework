// const playerGuess = 4;
// const correctAnswer = 6;

// let message = "";
// if(playerGuess === correctAnswer) {
//   message = "correct";
// }else {
//   message ="wrong";
// }

// console.log(message);

// const message = playerGuess === correctAnswer ? "correct" 
// :playerGuess > correctAnswer ? "too high" : "too low";
// console.log(message);



// function selectItem(item){
//   let price = 0;

//   switch(item) {

//     case "coffe" : 
//       price = 2;
//       break;
//     case "sandwiches" :
//       price = 5;
//       break
//     case "salad" :
//       price = 4;
//       break;
//     case "lemon cake" :
//       price = 3;
//       break;  
//       default:
//         return `Sorry we dont sell that ${item}`;
//     }

//     return `You have slected ${item}, That will be $${price}.`;
// }
// console.log(selectItem("salad"));

// const demo = document.getElementById("demo");
// demo.innerHTML = "<h2>Welcome tot he page and this is text update</h2>";
// const button = document.getElementById("btn");
// button.addEventListener("click", f1)

// function f1() {
//   window.alert(`You are going ro leave this page; `);
//   document.write(4+6);
//   window.print()
// };


//labels
// let num = 0;
// while(num <= 50){
//   console.log(num);
//   num+=2;
// }

// const text = "hello";
// let reversed =""
// for( let i = text.length - 1; i >= 0; i-- ) {
//   reversed += text[i];
// }
// console.log(reversed);


// const word =""

// function palindromeChecker(word){
//   let reversed = "";

//   for (let i = word.length - 1; i>=0; i-- ){
//     reversed += word[i];
//   }

//   if (reversed === word){
//     console.log("plaindrone");    
//   }else {
//     console.log("Not a palindrome.");
//   }
// }


// let str = "A boy named a dog.";

// let exStr ="A boy yob A"

// function isPalindrome(str) {
//   let lrCsStr = str.toLowerCase();
//   let newStr = lrCsStr.replaceAll(" ", "");
//   for(let i = 0; i < newStr.length / 2; i++ ){
//     if (newStr[i] !== newStr[newStr.length - 1 - i]){
//       return false;
//     }
//   }
//    return true;
   
// }

// console.log(isPalindrome(str));
// console.log(isPalindrome(exStr));

// const book = {
//   title: "Wings of Fire",
//   author: "A.P.J. Abdul Kalam",
//   pages: 180
// };

// const {title, author, pages: totalPages} = book;

// const text = `the title is ${title} and the author name is ${author} and the 
// total pages in books are ${totalPages}`
// console.log(text);

// const phone = {
//   brand: "Samsung",
//   price: 15000
// };

// const {brand, color = "black"} = phone;

// console.log(color);
// //

// const employee = {
//   name: "Priya",
//   job: {
//     title: "Developer",
//     salary: 60000
//   }
// };

// const {name, job:{title, salary}} = employee;

// console.log(salary);

// function describe ({ name, score}){
//   return `${name} scored ${score}`;
// }
// console.log(describe({ name: "Karan", score: 88 }));

// const car = {
//   make: "Toyota",
//   model: "Innova",
//   year: 2020,
//   color: "white"
// };

// const {make, ...details} = car;
// console.log(details);

// const students = [
//   { name: "Ravi", marks: 90 },
//   { name: "Sneha", marks: 75 },
//   { name: "Arjun", marks: 82 }
// ];

// const dreamHoliday = {
//   destination: "heaven",
//   activity: "go carting",
//   accomodation: "house by the lake",
//   companion: "a cow"
// }

// const {destination, activity, accomodation, companion} = dreamHoliday;

// const text = `I want to go the ${destination} and do ${activity}. 
// I would stay in ${accomodation} and would talk to ${companion}`;

// console.log(text);

// const abc = function(a,b){
//   return a * b;
// }
// console.log(abc(3,5));

// function abc(a,b){
//   return a*b;
// }

// const abc = (a,b) => a*b;

// console.log("Start");

// setTimeout(function() {
//   console.log("Hello after 2 seconds");
// }, 2000);

// console.log("End");

// function logAnswer(ans, points ){
//   console.log(`The answer is ${ans} of course! If you got that right, give yourself ${points} points `)
// }

// console.log(`What is the capital of Peru?`);

// setTimeout(logAnswer, 3000, "Lima", 10);

// const start = performance.now();

// setTimeout (() => {
//   const end = performance.now();
//   console.log(`Execution Time :${end - start}`);
// }, 2000);

// import { abcVariable } from "./importAndExport.js";

// console.log(abcVariable);

// class cars {
//   constructor(name, model, topSpeed){
//     this.name = name;
//     this.model = model;
//     this.topSpeed = topSpeed;
//   }
// }

// const cars1 = new cars("maruti", "lodu", 50);
// console.log(cars1);

// const date = new Date();
// const year = date.getFullYear();
const year = new Date().getFullYear();
console.log(year);


class stocks{
  constructor(name, sym, price, time){
    this.name =name;
    this.sym = sym;
    this.price= price;
    this.time = time;
  }
}