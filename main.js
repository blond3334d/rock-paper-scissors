// Function to randomly return a Rock, Paper, and Scissors

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
    let humanChoice = prompt("Rock, Paper, Scissors!\nWhat is your pick? ");
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