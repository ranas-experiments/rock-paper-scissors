/* Create a variable named "computerChoice"
Create a function that generates a random number between 1 and 10,
If the number is between 1 and 3 assigns "rock" to computerChoice and returns it
If the number is between 4 and 7 assigns "paper" to computerChoice and returns it
If the number is between 8 and 10 assigns "scissors" to computerChoice and returns it */

let computerChoice
function getComputerChoice() {
    let num = Math.floor((Math.random()) * 10);
    if (num < 4) {
        return computerChoice = "Rock";
    } else if (num < 7) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}

getComputerChoice();

/* Create a variable called humanChoice
Create a function that prompts the user for input
Checks if the input is valid (one of rock, paper, or scissors)
If valid, stores the input in humanChoice
If invalid, does nothing */

let humanChoice
function getHumanChoice(input) {
    input = prompt("rock, paper or scissors?", "")
    if ((input === "rock") || (input === "paper") || (input === "scissors")) return input
        else return;
}

getHumanChoice();