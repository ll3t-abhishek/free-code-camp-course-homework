let player = {
    name:"",
    chips:0 
}

let sum = 0;
let cards = [];
let hasBlackJack = false;   
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");


player.name = "Per";
player.chips = 145;
playerEl.textContent = player.name + ": $" + player.chips;
//Generates a random number/card//

function getRandomCard() {
    let randomNumber =Math.floor( Math.random() * 13 ) + 1;
    if (randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
    
}

//Starts the game
function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards=[firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();

  
} 

function renderGame() {
    if (sum <= 20){
    message = "Do you want to draw a new card?";
    
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        
    } else {
        message = "You're out of the game!";
        isAlive = false;
        
    }
    messageEl.textContent = message;

    sumEl.textContent = sum;

    cardsEL.textContent = "";    

    for (let i = 0; i < cards.length; i++){
        cardsEL.textContent += cards[i] + " "};
        
    
} 

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard();
        cards.push(thirdCard);
        sum += cards[cards.length - 1];

        renderGame();
    }
    
}



// let sentance = ["Hello", "my", "name", "is", "Abhishek"];
// let greetingEl = document.getElementById("greeting-el");
// // console.log(greetingEl);

// for (let i = 0; i < sentance.length;  i++){
//     greetingEl.textContent += sentance[i] + " " ;
// }




// function rollDice(){
//     let rNumber = Math.floor(Math.random() * 6 ) + 1;
//     return rNumber;
// }

// console.log(rollDice());

// rollDice();

// let floorNumber = Math.floor(randomNumber);
// console.log(floorNumber);
// for (i=10; i <= 20; i++){
//     console.log(i);

// }

// for(let count = 10; count <=100; count+=10){
//     console.log(count);
// }

// let arrayR = ['1asas', '2sasas', '3vv', '4gg'];
// for ( let i =0; i < arrayR.length; i++){
//     console.log(arrayR[i])
// }
// {
// let cards = [7,3,9]
// for(let i = 0; i < cards.length; i++){
//     console.log(cards[i]);
// }

// }
// let describeYourelf = ["Abhishek", 28, true];
// console.log(describeYourelf.length);
// console.log(describeYourelf[2]);

// describeYourelf.push(false);
// console.log(describeYourelf);


// let player1Time = 67;
// let player2Time = 85;
// function fastesTime() {
//     if (player1Time < player2Time){
//         return player1Time;
//     }else if(player1Time > player2Time) {
//         return player2Time;
//     }else {
//         return player1Time;
// }

// }

// function getTotalRaceTime() {
//     return player1Time + player2Time;
// }


// let totalRaceTime = getTotalRaceTime();
// console.log(totalRaceTime);

// let storedResult = fastesTime();

// console.log(storedResult);


// let course = {
//     title: "Learn CSS grid for free",
//     lessons: 16,
//     creater: "Per",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log(course.length);
// console.log(course["length"]); //brackat notations;

// let airbnbCastle = {
//     title: "Live liek a king in my castle",
//     price: 190,
//     isSuperHost: true,
//     images: ["img/castle1.png","img/castle2.png"],
//     location: "europe",
//     ac: true,
//     rooms: ["4 geustRooms", "2 washrooms", "1 bar"]
// }

// console.log(airbnbCastle.price);
// console.log(airbnbCastle.rooms);
