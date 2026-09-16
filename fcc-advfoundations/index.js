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

function selectItem(item){
  let price = 0;

  switch(item) {

    case "coffe" : 
      price = 2;
      break;
    case "sandwiches" :
      price = 5;
      break
    case "salad" :
      price = 4;
      break;
    case "lemon cake" :
      price = 3;
      break;  
      default:
        return `Sorry we dont sell that ${item}`;
    }

    return `You have slected ${item}, That will be $${price}.`;
}
console.log(selectItem("salad"));

const demo = document.getElementById("demo");
demo.innerHTML = "<h2>Welcome tot he page and this is text update</h2>";
const button = document.getElementById("btn");
button.addEventListener("click", f1)

function f1() {
  window.alert(`You are going ro leave this page; `);
  document.write(4+6);
  window.print()
};