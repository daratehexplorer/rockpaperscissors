//Ask user to choose rock paper or scissors

let playerSelection = prompt("Choose: Rock, Paper, Scissors.", )

//Generate computer choice of rock paper or scissors


function getComputerChoice() {
    return Math.floor(Math.random()*3)
};

let computerSelection = getComputerChoice(); 

console.log(computerSelection)
//Compare use choice against computer choice
//If user wins, return a string declaring user the winner
//If user loses, return a string declaring user the loser 