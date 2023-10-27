let playerScore = 0;
let computerScore = 0;

let wantToPlay = prompt("Wanna play Rock, Paper, Scissors with me?", )
        switch (wantToPlay.toLowerCase()) {
        case "yes": 
            console.log(game());
        break;
        case "no":
            alert("You're no fun!")
        break;
        default:
            alert("It's a yes or no question, dummy!");
        break;
    }

function game () {
//Ask user to choose rock, paper, or scissors
let playerSelection = prompt("Choose: Rock, Paper, Scissors.", );

switch (playerSelection.toLowerCase()) {
     case "rock": 
        console.log("You chose Rock!")
    break;
    case "paper":
        console.log("You chose Paper!")
    break;
    case "scissors":
        console.log("You chose Scissors!")
    break;
    default:
        console.log("Invalid selection! You have to choose Rock, Paper or Scissors!")
    break;
}

//Generate computer choice of rock, paper, or scissors
function getComputerChoice() {
    numSelect = Math.floor(Math.random()*3)
    if (numSelect === 2) {
        return 'Scissors'
    } else if (numSelect === 1) {
        return 'Paper'
    } else {
        return 'Rock'
    }
};

let computerSelection = getComputerChoice(); 

console.log("Computer chose " + computerSelection + "!");

//Compare user choice against computer choice
function playRound(playerSelection, computerSelection) {

     
    if 
        (((playerSelection.toLowerCase() === 'rock') && computerSelection === 'Rock') ||
        ((playerSelection.toLowerCase() === 'paper') && computerSelection === 'Paper') ||
        ((playerSelection.toLowerCase() === 'scissors') && computerSelection === 'Scissors')) {
            return tieString = "It's a tie! You both chose " + computerSelection + "!\nPlayer Score: " + playerScore + " | Computer Score: " + computerScore;
    } else if
        (((playerSelection.toLowerCase() === 'rock') && computerSelection === 'Paper') ||
        ((playerSelection.toLowerCase() === 'paper') && computerSelection === 'Scissors') ||
        ((playerSelection.toLowerCase() === 'scissors') && computerSelection === 'Rock')) { 
            computerScore = computerScore + 1;
            return loseString = "You Lose! " + computerSelection + " beats " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + "!\n Player Score: " + playerScore + " | Computer Score: " + computerScore;;
            
    } else if
        (((playerSelection.toLowerCase() === 'rock') && computerSelection === 'Scissors') ||
        ((playerSelection.toLowerCase() === 'paper') && computerSelection === 'Rock') ||
        ((playerSelection.toLowerCase() === 'scissors') && computerSelection === 'Paper')) { 
            playerScore = playerScore + 1;
            return winString = "You Win! " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + " beats " + computerSelection + "!\nPlayer Score: " + playerScore + " | Computer Score: " + computerScore;
    } else 
        return invalid = "You made an invalid selection! Please refresh and choose Rock, Paper, or Scissors.";
    };

console.log(playRound(playerSelection,computerSelection));

let playAgain = prompt("Play again?");

switch (playAgain.toLowerCase()) {
    case "yes": 
        console.log(game());
    break;
    case "no":
        alert("You're no fun!")
    break;
    default:
        alert("It's a yes or no question, dummy!");
    break;
}
}
