let firstCard = 10;
let secondCard = 3 ;
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
cardsEL.textContent = cards;
}  




function newCard() {
    let thirdCard = 14;
    cards.push(thirdCard);
    sumEl.textContent += thirdCard;
    
    // cardsEL.innerText = cards;
    cardsEL.textContent = cards;
    sum += thirdCard;
    sumEl.textContent = sum; 

    startGame();

        

}

// let describeYourelf = ["Abhishek", 28, true];
// console.log(describeYourelf.length);
// console.log(describeYourelf[2]);

// describeYourelf.push(false);
// console.log(describeYourelf);
