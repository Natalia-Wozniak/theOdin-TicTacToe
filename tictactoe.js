
//SETS SCORE TO 0
let playerScore = 0;
let computerScore = 0;

//  PREVIOUS VERSION OF COMPUTER CHOICE
// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * 3) + 1;
//     if (choice === 1) {
//         return ('rock');
//     }
//     else if (choice === 2) {
//         return ('paper');
//     }
//     else if (choice === 3) {
//         return ('sizors');
//     }
// }

//RETURNS RANDOM COMPUTER CHOICE
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors']
    let choice = Math.floor(Math.random() * 3) + 1;
   return options[choice];
}

//RETURNS A RESULT OF ONE ROUND
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Paper' && computerSelection === 'Rock'
    ||
    playerSelection === 'Scissors' && computerSelection === 'Paper'
    ||
    playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerScore++;
    roundScore.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`
    }

    else if (playerSelection === 'Rock' && computerSelection === 'Paper'
    ||
    playerSelection === 'Paper' && computerSelection === 'Scissors'
    ||
    playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerScore++;
    roundScore.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`
    }

    else
    roundScore.textContent = `You both chose ${playerSelection}. That's a tie!`
    }

//BUTTONS WITH USERS INPUT
let rock = document.createElement('button');
rock.textContent = "Rock";
rock.addEventListener("click", () => {
    game("Rock");
    })
        
let paper = document.createElement('button');
paper.textContent = "Paper";
paper.addEventListener("click", () => {
    game("Paper");
    })

let scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.addEventListener("click", () => {
    game("Scissors");
    })

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

let roundScore = document.createElement('div');
document.body.appendChild(roundScore);

let playerAllRounds = document.createElement('div');document.body.appendChild(playerAllRounds);
        
let computerAllRounds = document.createElement('div');
document.body.appendChild(computerAllRounds);
    
let welcomeMassage = document.createElement('div');
document.body.appendChild(welcomeMassage);
welcomeMassage.textContent = "Choose your throw!";


//FUNCTION ALLOWING THE GAME TO GO TO SCORE OF 5
function game(player) {
    if (playerScore < 5 && computerScore < 5) {
    const computerSelection = getComputerChoice();
    const playerSelection = player;
    playRound(playerSelection, computerSelection)

    playerAllRounds.textContent = `YOUR SCORE: ${playerScore}`; 
    computerAllRounds.textContent = `COMPUTER'S SCORE: ${computerScore}`;
    }

    if (playerScore === 5) {
        roundScore.textContent = "CONGRATS! YOU WIN!"
    }

    if (computerScore === 5) {
        roundScore.textContent = "TOO BAD! YOU LOST THE GAME!"
    }
    }


//PREVIOUS FUNCTION, WHERE THERE WERE NO BUTTONS
// function game() {
//     // // for(let i = 0; i < 5; i++) {
        
//     //     // const playerSelection = prompt('Choose your throw!', 'Rock, Paper or Sizors').toLowerCase();
//     //     const computerSelection = getComputerChoice();
//     //    console.log(playRound(playerSelection, computerSelection))
//     // // }
//     if (playerScore > computerScore)
//     return ('YOU WIN!')
//     else if (playerScore < computerScore)
//     return ('YOU LOSE!')
//     else
//     return ('IT IS A TIE!')
// }
        
// console.log(game());