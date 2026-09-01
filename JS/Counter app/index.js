// document.getElementById("count-el").innerText = 5
// let count = 0

// console.log(count)

// let myAge = 28
// console.log(myAge)

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch


// console.log(count)
// 

// let myAge = 28
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let count = 5

// count = count + 1

// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints -75
// console.log(bonusPoints)
// bonusPoints = bonusPoints +45
// console.log(bonusPoints)





let count = Number(document.getElementById("count-el").textContent);



function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;

}

function save(){
    console.log(count);
    let prevEnt = document.getElementById("prev-ent");
    console.log(prevEnt);
    prevEnt.textContent += count +" - ";

    document.getElementById("count-el").textContent = 0;
    count = 0;
    
}
function error(){
    document.getElementById("error-msg").textContent = "Something went wrong";
}




// let cName = "Linda";
// let greetings = "Hi there!";    
// function project() {
//      console.log(greetings + ", " + cName + "!");
// }

// project();



// let myPoint = 3;
// function add3Points() {
//     myPoint +=3;
// }

// function remove1Point() {
//     myPoint -=1;
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
console.log(myPoint);
// let prevEnt = document.getElementById("prev-ent");
// console.log(prevEnt);
// prevEnt.textContent += count +"-";


// let username= "per"

// let message = "You have 3 notifications"

// let messageToUser = message + ","+username +"!";
// console.log(messageToUser);

// let myName ="Abhsihek"
// let greeting = "My name is "
// let myGreeting = greeting+ myName ;
// console.log(myGreeting)



