let firstCard = getRandomCard();
let secondCard = getRandomCard() ;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el")

function startGame() {
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
    let thirdCard = getRandomCard();

    cards.push(thirdCard);
    sum += cards[cards.length - 1];

    sumEl.textContent = sum;

    renderGame();
    
    // cardsEL.innerText = cards;

    // cardsEL.textContent = cards;
    // sum += thirdCard;
    

    // startGame();

        

}

function getRandomCard() {


}

let sentance = ["Hello", "my", "name", "is", "Abhishek"];
let greetingEl = document.getElementById("greeting-el");
console.log(greetingEl);

for (let i = 0; i < sentance.length;  i++){
    greetingEl.textContent += sentance[i] + " " ;
}

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