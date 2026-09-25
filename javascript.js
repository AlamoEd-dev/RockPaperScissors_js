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

function getHumanChoice () {
    let humanChoice = prompt("Choose between 'rock', 'paper', or 'scissors' :")
    return humanChoice;
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // Normalize input to lowercase to handle any capitalization
        const userChoice = humanChoice ? humanChoice.toLowerCase() : "";

        if (userChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${computerChoice}.`);
        }
        else if (userChoice === "rock" && computerChoice === "scissors") {
            console.log("User wins: Rock beats scissors!");
            humanScore++;
        }
        else if (userChoice === "scissors" && computerChoice === "paper") {
            console.log("User wins: Scissors beats paper!");
            humanScore++;
        }
        else if (userChoice === "paper" && computerChoice === "rock") {
            console.log("User wins: Paper beats rock!");
            humanScore++;
        }
        else {
            console.log(`Computer wins: ${computerChoice} beats ${userChoice}!`);
            computerScore++;
        }
    }

    for (let i = 1; i <=5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Score: You ${humanScore} - ${computerScore} Computer\n`);
    }

    console.log("=== FINAL SCORE ===");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the match!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the match. Better luck next time!");
    } else {
        console.log("It's an overall tie match!");
    }

}

playGame();

