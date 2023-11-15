let playerScore = 0;
let computerScore = 0;

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

function getComputerChoice() {
    let options = ['rock', 'paper', 'sizors']
    let choice = Math.floor(Math.random() * 3) + 1;
   return options[choice];
}

    function playRound(playerSelection, computerSelection) {
        let p1 = 0;
        let p2 = 0;
            if (playerSelection === 'paper' && computerSelection === 'rock'
            ||
            playerSelection === 'sizors' && computerSelection === 'paper'
            ||
            playerSelection === 'rock' && computerSelection === 'sizors') {
            playerScore++;
            return (`${playerSelection} beats ${computerSelection}!`)
            }

            else if (playerSelection === 'rock' && computerSelection === 'paper'
            ||
            playerSelection === 'paper' && computerSelection === 'sizors'
            ||
            playerSelection === 'sizors' && computerSelection === 'rock') {
            computerScore++;
            return (`${computerSelection} beats ${playerSelection}!`)
            }

            else
            return ("it's a tie!")
            
            }



function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your throw!', 'Rock, Paper or Sizors').toLowerCase();
        const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore)
    return ('YOU WIN!')
    else if (playerScore < computerScore)
    return ('YOU LOSE!')
    else
    return ('IT IS A TIE!')
}

console.log(game());