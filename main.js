const displayHumanScore = document.querySelector("#user-score");
const displayComputerScore = document.querySelector("#computer-score");
const displayRoundCount = document.querySelector("#current-round");

const winnerStatus = document.querySelector("#status");
const whoBeatsWho = document.querySelector("#who-beats-who");

const buttons = document.querySelectorAll("button");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const modalHeadText = document.getElementById("modal-headtext");
const modalText = document.getElementById("modalText");

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
                whoBeatsWho.textContent = 'Paper devours Rock...';
                humanScore++;
                break;
            case 'paper':
                winnerStatus.textContent = 'CLOSE FIGHT!';
                whoBeatsWho.textContent = 'You think alike!';
                break;
            case 'scissors':
                winnerStatus.textContent = 'COMPUTER WON!';
                whoBeatsWho.textContent = 'Scissors cut Paper...'
                computerScore++;
                break;
        }
    } else if (humanChoice === 'scissors') {
        switch(computerChoice) {
            case 'rock':
                winnerStatus.textContent = 'COMPUTER WON!';
                whoBeatsWho.textContent = 'Rock beats Scissors...';
                computerScore++;
                break;
            case 'paper':
                winnerStatus.textContent = 'YOU WON';
                whoBeatsWho.textContent = 'Scissors cut Paper...';
                humanScore++;
                break;
            case 'scissors':
                winnerStatus.textContent = 'YOU TIED!';
                whoBeatsWho.textContent = 'What a tight fight!';
                break;
        }
    }

    displayComputerScore.textContent = computerScore;
    displayHumanScore.textContent = humanScore;
    displayRoundCount.textContent = roundCount;

    if (humanScore === 5) {
        modalHeadText.textContent = "YOU WON!"
        modalText.innerHTML = "You've beaten the computer. <br>Thanks for playing!";
        modal.classList.add("open");
    } else if (computerScore === 5) {
        modalHeadText.textContent = "GAME OVER."
        modalText.textContent = "You've been beaten. Thanks for playing!";
        modal.classList.add("open");
    }

}

closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;

    displayComputerScore.textContent = '0';
    displayHumanScore.textContent = '0';
    displayRoundCount.textContent = '0';

    winnerStatus.textContent = 'ROUND 1 STARTS NOW';
    whoBeatsWho.textContent = 'Awating your move...';
});