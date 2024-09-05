let choices = ["stone", "paper", "scissors"];
let score = 0;  

function choose() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    choice.innerText = computerChoice;

    const playerChoice = this.id.toLowerCase(); 
    Winner(computerChoice, playerChoice); 
}

function Winner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        win.innerText = "It's a draw!";
        return;
    }

   
    if (
        (computerChoice === "stone" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "stone")
    ) {
        win.innerText = "Player won!";
        score++; 
    } else {
        win.innerText = "Computer won!";
        score--; 
    }


    scoreDisplay.innerText = score;
}


let choice = document.getElementById("choice");
let stone = document.getElementById("Stone");
let paper = document.getElementById("Paper");
let scissors = document.getElementById("Scissors");
let win = document.getElementById("Win");  
let scoreDisplay = document.getElementById("Score"); 
stone.addEventListener('click', choose);
paper.addEventListener('click', choose);
scissors.addEventListener('click', choose);
