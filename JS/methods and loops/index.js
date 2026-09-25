//for in loop

const characters1 = {
  title: "ninja",
  emoji: "🥷",
  powers: ["agility", "stealth", "agression"]

}

for(let property in characters1){
  console.log(characters1[property]);
}