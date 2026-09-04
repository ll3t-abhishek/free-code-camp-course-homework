// //Lesson 1
// let person = {
//     name: "Abhishek",
//     age: 28,
//     country:"India"
// }
// function logData(){
//     let createString = person.name + " is " + person.age + " years old and lives in " + person.country;
//     console.log(createString);
// }
// logData();

// //Lesson 2

// let age = 95;
// let getDiscount = "";

// if (age < 6) {
//     console.log("free");
// }else if (age <18) {
//     console.log("child discount");
// }else if(age < 27) {
//     console.log("student discount");
// }else if (age < 67) {
//     console.log("full price");
// }else {
//     console.log("senior citizen discount");
// }

// //Lesson 3

// let largeCountries = ["China", "India" ,"USA", "Indonesia", "Pakistan"];
// console.log("The 5 largest countries in the world:")
// for(i=0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i]);
// }

// //Lesson 4
// // PUSH     POP     UNSHIFT     SHIFT
// let largeCountries1 = ["tuvalue:", "india", "usa","indonesia", "monaco"];
// largeCountries1.pop();
// largeCountries1.push("Pakistan");
// largeCountries1.shift();
// largeCountries1.unshift("China");

// console.log(largeCountries1)

// //Lesson 5

// let dayOfMonth = 13;
// let weekDay = "Friday";

// if (dayOfMonth === 13 && weekDay === "Friday"){
//     console.log("😱")
// }

// //LEsson 6
// // ROck, paper, scisssors

// let hands = ["rocks", "paper", "scissors"];

// function randomHand(){
//     let hand = Math.floor(Math.random() * 3);
//     return (hands[hand]);
       
// }
// console.log(randomHand());

// //Lesson 6
// //EMoji FIghter

// let stageEl = document.querySelector(".stage");
// let fightButton = document.getElementById("fight-button");



// let qq;

// let fighters = [
//   "🐶", "🐱", "🐵", "🦁", "🐘",
//   "🦊", "🐸", "🐧", "🐻", "🐼",
//   "🐨", "🐯", "🦒", "🦓", "🐴",
//   "🐷", "🐮", "🐔", "🐰", "🐢"
// ];


// // function randomFunction(){
// //    let qq = Math.floor(Math.random() * fighters.length) ;
   
// // }


// fightButton.addEventListener("click", function randomFighter() {
//     let randomNumber1 = Math.floor(Math.random() * fighters.length);
//     let randomNumber2 = Math.floor(Math.random() * fighters.length);

//     console.log(randomNumber1);
//     console.log(randomNumber2);

//     if(randomNumber1 === randomNumber2){
//         randomNumber2 = Math.floor(Math.random() * fighters.length);
//     }else{
//     stageEl.textContent = fighters[randomNumber1] +" Vs " + fighters[randomNumber2];
//         }
// });

// //Lesson 8
// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊",];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function sortFruit(){
//     for(i=0; i < fruit.length; i++){
//         if(fruit[i] === "🍎"){
//             appleShelf.textContent += fruit[i]
//         }else if(fruit[i] === "🍊"){
//             orangeShelf.textContent += fruit[i]
//         }
// }
// }
// sortFruit();

Solo Project- Password Generator

