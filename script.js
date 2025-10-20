function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {

        if (computerChoice == "rock") {
            console.log("Tie!");
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            ++computerScore;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            ++humanScore;
        }

    } else if (humanChoice == "paper") {

        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        } else if (computerChoice == "paper") {
            console.log("Tie!");
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            ++computerScore;
        }

    } else if (humanChoice == "scissors") {

        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            ++computerScore;
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            ++humanScore;
        } else if (computerChoice == "scissors") {
            console.log("Tie!");
        }

    }
}

function playGame() {
    for (let i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    let winner = humanScore > computerScore ? "Human" : computerScore > humanScore ? "Computer" : "Tie";
    console.log("Winner: " + winner + " (" + humanScore + " - " + computerScore + ")");
}

playGame();