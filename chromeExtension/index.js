let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const leads = document.getElementById("leads");
const ulEl = document.getElementById("ul-el");


function cLog(){
    console.log("button clicked")
    myLeads.push(inputEl.value);
    console.log(myLeads);
    
    // let li = document.createElement("li");
    // li.textContent = inputEl.value;
    // ulEl.appendChild(li);   

    let listItems = "";
    for(let i=0; i < myLeads.length; i++){
        // listItems += "<li><a href='" + myLeads[i] +"' target ='_blank'>" + myLeads[i] + "</a></li>";
        listItems += `
            <li>
                <a href= '${myLeads[i]}' target ='_blank'> ${myLeads[i]} 
                </a>
            </li>`;
        console.log(listItems);         
    }
    ulEl.innerHTML = listItems;
    inputEl.value = "";
    inputEl.focus()
   

    // let output = "";
    // for(let i=0; i < myLeads.length; i++){
    //     // output += myLeads[i] +"\n";  
    // }
    // leads.textContent = output;
    // ulEL.textContent = output;
}

inputBtn.addEventListener("click", cLog)
// function buy() {
//     // return "Thank you for biuying!";
    
// example.innerHTML += "<br>" + "Thank you for biuying!";
// }

// const example = document.querySelector(".example");
// example.innerHTML = '<button onclick="buy()">BUY!</button>';

// const addTextExample = example. 
