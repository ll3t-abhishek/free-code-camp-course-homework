let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = localStorage.getItem("myLeads");
const tabBtn = document.getElementById("tab-btn");


tabBtn.addEventListener("click", savedTab);

function savedTab (){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
        console.log(tabs);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
 

}

if (leadsFromLocalStorage) {
    myLeads = JSON.parse(leadsFromLocalStorage);
    render(myLeads);
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);

})

inputBtn.addEventListener("click", cLog);

function cLog() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    inputEl.focus();   

    render(myLeads);
    saveLeads();      
}

function render(leads) {
        let listItems = ""; 
        for(let i=0; i < leads.length; i++){       
        listItems += `
            <li>
                <a href= '${leads[i]}' target ='_blank'> ${leads[i]} 
                </a>
            </li>`;                   
        } 
         ulEl.innerHTML = listItems; 
    }

function saveLeads() {
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
}


// function buy() {
//     // return "Thank you for biuying!";
    
// example.innerHTML += "<br>" + "Thank you for biuying!";
// }

// const example = document.querySelector(".example");
// example.innerHTML = '<button onclick="buy()">BUY!</button>';

// const addTextExample = example. 


// const recepient = "James";
// const sender = "Abhishek"

// const email = `HEy! ${recepient} ! How's it goin? <br> Cheers ${sender}!`;


// let li = document.createElement("li");
    // li.textContent = inputEl.value;
    // ulEl.appendChild(li);   

 // listItems += "<li><a href='" + myLeads[i] +"' target ='_blank'>" + myLeads[i] + "</a></li>";

// let output = "";
    // for(let i=0; i < myLeads.length; i++){
    //     // output += myLeads[i] +"\n";  
    // }
    // leads.textContent = output;
    // ulEL.textContent = output;

// console.log(email);

// let myArray = `["asasas", "sasasas"]`;

// let myArrayNew =JSON.parse(myArray);

// console.log(myArray);
// console.log(typeof myArrayNew);
// console.log(Array.isArray(myArrayNew));

// myArray = JSON.stringify(myArrayNew);
// console.log(myArray);

// console.log(typeof myArray);
// myArrayNew.push("kekwlord");
// console.log(myArray);


// myLeads = JSON.stringify(myLeads);
// localStorage.setItem("My Leads", myLeads);
// console.log(typeof myLeads);
// myLeads = JSON.parse(myLeads);
// console.log(typeof myLeads);

// const welcomeEl = document.getElementById("welcome-el");

// function greetings(name) {
//     welcomeEl.textContent = `Welcome to the site ${name}`
// }
// greetings('Abhishek');

// function add(n1, n2) {
//     return n1 +n2;
// }
// console.log(add(3, 7));

// function getFirst(arr) {
//     return arr[0];
// }
// const egArray = ["asas", 6, "avav"];
// console.log(getFirst(egArray));