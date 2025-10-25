const choiceContainer = document.getElementById("choice-container");

const result = document.getElementById("result");
const resultText = document.createTextNode("");
result.appendChild(resultText);

let humanScore = 0;
let computerScore = 0;

const score = document.getElementById("score");
const scoreText = document.createTextNode(humanScore + " - " + computerScore);
score.appendChild(scoreText);

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

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock") {

        if (computerChoice == "rock") {
            result.firstChild.textContent = "Tie";
        } else if (computerChoice == "paper") {
            result.firstChild.textContent = "You lose! Paper beats Rock";
            score.firstChild.textContent = `${humanScore} - ${++computerScore}`;
        } else if (computerChoice == "scissors") {
            result.firstChild.textContent = "You win! Rock beats Scissors";
            score.firstChild.textContent = `${++humanScore} - ${computerScore}`;
        }

    } else if (humanChoice == "paper") {

        if (computerChoice == "rock") {
            result.firstChild.textContent = "You win! Paper beats Rock";
            score.firstChild.textContent = `${++humanScore} - ${computerScore}`;
        } else if (computerChoice == "paper") {
            result.firstChild.textContent = "Tie";
        } else if (computerChoice == "scissors") {
            result.firstChild.textContent = "You lose! Scissors beats Paper";
            score.firstChild.textContent = `${humanScore} - ${++computerScore}`;
        }

    } else if (humanChoice == "scissors") {

        if (computerChoice == "rock") {
            result.firstChild.textContent = "You lose! Rock beats Scissors";
            score.firstChild.textContent = `${humanScore} - ${++computerScore}`;
        } else if (computerChoice == "paper") {
            result.firstChild.textContent = "You win! Scissors beats Paper";
            score.firstChild.textContent = `${++humanScore} - ${computerScore}`;
        } else if (computerChoice == "scissors") {
            result.firstChild.textContent = "Tie";
        }

    }

    if (humanScore === 5 || computerScore === 5) {
        alert("Winner: " + ( humanScore === 5 ? "Human" : "Computer"));
        score.firstChild.textContent = `${humanScore = 0} - ${computerScore = 0}`;
    }

}

choiceContainer.addEventListener("click", e => {
    playRound(e.target.textContent.toLowerCase(), getComputerChoice());
});
