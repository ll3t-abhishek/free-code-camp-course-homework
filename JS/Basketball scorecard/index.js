
function score_ha1() {
   let scrH1 = Number(document.getElementById("team-score-h").innerText) ;
   scrH1 += 1;
   console.log(scrH1);
    console.log(document.getElementById("team-score-h").innerText = scrH1);

}

function score_ha2() {
   let scrH2 = Number(document.getElementById("team-score-h").innerText) ;
   scrH2 += 2;
   console.log(scrH2);
    console.log(document.getElementById("team-score-h").innerText = scrH2);

}


function score_ha3() {
   let scrH3 = Number(document.getElementById("team-score-h").innerText) ;
   scrH3 += 3;
   console.log(scrH3);
    console.log(document.getElementById("team-score-h").innerText = scrH3);

}


function score_ga1() {
   let scrG1 = Number(document.getElementById("team-score-g").innerText) ;
   scrG1 += 1;
   console.log(scrG1);
console.log(document.getElementById("team-score-g").innerText = scrG1);

}

function score_ga2() {
   let scrG2 = Number(document.getElementById("team-score-g").innerText) ;
   scrG2 += 2;
   console.log(scrG2);
   console.log(document.getElementById("team-score-g").innerText = scrG2);

}


function score_ga3() {
   let scrG3 = Number(document.getElementById("team-score-g").innerText) ;
   scrG3 += 3;
   console.log(scrG3);
console.log(document.getElementById("team-score-g").innerText = scrG3);

}
function foulH() {
   let scoreH =Number(document.getElementById("team-score-h").innerText);
   scoreH -= 1;
   document.getElementById("team-score-h").innerText = scoreH;
}

function foulG() {
   let scoreG =Number(document.getElementById("team-score-g").innerText);
   scoreG -= 1;
   document.getElementById("team-score-g").innerText = scoreG;
}





function newGame() {
    console.log(document.getElementById("team-score-h").innerText = 0);
    console.log(document.getElementById("team-score-g").innerText = 0);
}
