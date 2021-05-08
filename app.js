// select elements
const Playeroption = document.querySelector(".options");
const CompChoice = document.querySelector("#CompChoice");
const CompChoiceIcon = document.querySelector("#CompChoiceIcon");
const result = document.querySelector(".results");
const Choice = document.querySelector(".Choice")


// events
Playeroption.addEventListener("click", PlayerChoiceFunction);

// functions
// capture user input
function PlayerChoiceFunction(e){
    var choice = e.target.classList[1];
    var Player;
    if (choice === "fa-gem") {
        Player = "Rock";
        
    } else if (choice === "fa-sticky-note") {
        Player = "Paper";
        
    } else {
        Player = "Scissor";
    }

    // call computer choice
    let computer = RandomChoice();

    // Results

    if (Player === computer) {
        result.textContent= "It's A Draw";
    } else if(Player==="Rock" && computer==="Paper"){
        result.textContent = "You Lose!!";
    } else if(Player==="Rock" && computer==="Scissor"){
        result.textContent = "You Win!!";
    } else if(Player==="Scissor" && computer==="Paper"){
        result.textContent = "You Win!!";
    } else if(Player==="Scissor" && computer==="Rock"){
        result.textContent = "You Lose!!";
    } else if(Player==="Paper" && computer==="Rock"){
        result.textContent = "You Win!!";
    } else if(Player==="Paper" && computer==="Scissor"){
        result.textContent = "You Lose!!";
    }
}



// computer choice function
function RandomChoice(){
    // random number 0-3
    const randNo = Math.floor(Math.random() * 3);
    var ComputerChoice;

    if (randNo === 0) {
        CompChoice.textContent = "Rock";
        CompChoiceIcon.innerHTML = '<i class="fas fa-gem"></i>';
    } else if(randNo ===1 ) {
        CompChoice.textContent = "Paper";
        CompChoiceIcon.innerHTML = '<i class="fas fa-sticky-note"></i>';
    } else{

        CompChoice.textContent = "Scissor";
        CompChoiceIcon.innerHTML = '<i class="fas fa-cut"></i>';
    }

     ComputerChoice = CompChoice.textContent;
     return ComputerChoice; 
}
