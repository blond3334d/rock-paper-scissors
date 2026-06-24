// Function to randomly return a Rock, Paper, and Scissors
/*
function getComputerChoice() {
    let randomPick = Math.floor(Math.random() * 3 + 1);
    let computerChoice;

    switch (randomPick) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
}

// Function to prompt the user to enter their choice

function getHumanChoice() {
    // let humanChoice = prompt("Rock, Paper, Scissors!\nWhat is your pick? ");
    let humanChoice = "";
    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    rock.addEventListener("click", event => {
        humanChoice = 'rock';
    })

    paper.addEventListener("click", event => {
        humanChoice = 'paper';
    })

    scissors.addEventListener("click", event => {
        humanChoice = 'scissors';
    })

    return humanChoice;
}

// Function to play a single round

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let winner;
    let choice = humanChoice.toLowerCase();

    switch(computerChoice) {
        case 'rock':
            if (choice == 'rock') {
                winner = 'Tie!';
                break;
            } else if (choice == 'paper') {
                winner = 'You win!';
                humanScore++;
            } else if (choice == 'scissors') {
                winner = 'Computer wins!';
                computerScore++;
            } else {
                console.log('Error: input not valid.');
            }
            break;
        case 'paper':
            if (choice == 'rock') {
                winner = 'Computer wins!';
                computerScore++;
            } else if (choice == 'paper') {
                winner = 'Tie!';
            } else if (choice == 'scissors') {
                winner = 'You win!';
                humanScore++;
            } else {
                console.log('Error: input not valid.')
            }
            break;
        case 'scissors':
            if (choice == 'rock') {
                winner = 'You win!';
                humanScore++;
            } else if (choice == 'paper') {
                winner = 'Computer wins!';
                computerScore++;
            } else if (choice == 'scissors') {
                winner = 'Tie!';
            } else {
                console.log('Error: input not valid.')
            }
            break;
    }

    alert(winner);
} 


// Logic to play the entire game for 5 rounds

function playGame() {
    let gameRounds = 0;

    do {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        gameRounds++;
    } while (gameRounds != 5);

    if (humanScore > computerScore) {
        alert('You are the winner!\nYour Score: ' + humanScore + '\nComputer Score: ' + computerScore);
    } else if (humanScore === computerScore) {
        alert('What a tight fight!\nYour Score: ' + humanScore + '\nComputer Score: ' + computerScore);
    } else if (humanScore < computerScore) {
        alert('You lose!\nYour Score: ' + humanScore + '\nComputer Score: ' + computerScore);
    }
}

playGame();
*/

const displayHumanScore = document.querySelector("#user-score");
const displayComputerScore = document.querySelector("#computer-score");
const displayRoundCount = document.querySelector("#current-round");

const winnerStatus = document.querySelector("#status");
const whoBeatsWho = document.querySelector("#who-beats-who");

const buttons = document.querySelectorAll("button");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Function to generate a random computer choice
function getComputerChoice() {
    let randomPick = Math.floor(Math.random() * 3 + 1);
    let computerChoice;

    switch (randomPick) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
}

let humanChoice = "";
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        const computerSelection = getComputerChoice();
        
        playOneRound(humanChoice, computerSelection);
        // playFiveRounds();
    })
});

function playOneRound(humanChoice, computerChoice) {
    roundCount++;
    if (humanChoice === 'rock') {
        switch(computerChoice) {
            case 'rock':
                winnerStatus.textContent = 'YOU TIED!';
                whoBeatsWho.textContent = 'A close fight!';
                break;
            case 'paper':
                winnerStatus.textContent = 'COMPUTER WON!';
                whoBeatsWho.textContent = 'Paper devours Rock...';
                computerScore++;
                break;
            case 'scissors':
                winnerStatus.textContent = 'YOU WON!';
                whoBeatsWho.textContent = 'Rock beats Scissors...';
                humanScore++;
                break;
        }
    } else if (humanChoice === 'paper') {
        switch(computerChoice) {
            case 'rock':
                winnerStatus.textContent = 'YOU WON!';
                whoBeatsWho.textContent = `${humanChoice} beats ${computerChoice}`;
                humanScore++;
                break;
            case 'paper':
                winnerStatus.textContent = 'CLOSE FIGHT!';
                whoBeatsWho.textContent = 'You both chose paper';
                break;
            case 'scissors':
                winnerStatus.textContent = 'COMPUTER WON!';
                whoBeatsWho.textContent = `${computerChoice} beats ${humanChoice}`;
                computerScore++;
                break;
        }
    } else if (humanChoice === 'scissors') {
        switch(computerChoice) {
            case 'rock':
                winnerStatus.textContent = 'COMPUTER WON!';
                whoBeatsWho.textContent = `${computerChoice} beats ${humanChoice}`;
                computerScore++;
                break;
            case 'paper':
                winnerStatus.textContent = 'YOU WON';
                whoBeatsWho.textContent = `${humanChoice} beats ${computerChoice}`;
                humanScore++;
                break;
            case 'scissors':
                winnerStatus.textContent = 'YOU TIED!';
                whoBeatsWho.textContent = `You both chose ${humanChoice}`;
                break;
        }
    }

    displayComputerScore.textContent = computerScore;
    displayHumanScore.textContent = humanScore;
    displayRoundCount.textContent = roundCount;

}

// GAME OVER LOGIC HERE 