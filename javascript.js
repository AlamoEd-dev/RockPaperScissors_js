function getComputerChoice () {
    const RANDOM_CHOICE = Math.floor(Math.random() * 3)

    switch(RANDOM_CHOICE){
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const roundResultDiv = document.getElementById("round-result");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");

function playRound(humanChoice, computerChoice) {
    if (gameOver) {
        return;
    }

    // Normalize input to lowercase to handle any capitalization
    const userChoice = humanChoice ? humanChoice.toLowerCase() : "";

    if (userChoice === computerChoice) {
        roundResultDiv.textContent = `It's a tie! Both chose ${computerChoice}.`;
    } 
    
    else if ((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")) 
            {
            humanScore++;
            roundResultDiv.textContent = `You win this round! ${userChoice} beats ${computerChoice}.`;
            } 

    else {
        computerScore++;
        roundResultDiv.textContent = `Computer wins this round! ${computerChoice} beats ${userChoice}.`;
    }

    scoreDiv.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        winnerDiv.textContent = "Congratulations! You won the match!";
        gameOver = true;
    }
    else if (computerScore === 5) {
        winnerDiv.textContent = "The computer won the match. Better luck next time!";
        gameOver = true;
    }
}

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
