/* Create a variable named "computerChoice"
Create a function that generates a random number between 1 and 10,
If the number is between 1 and 3 assigns "rock" to computerChoice and returns it
If the number is between 4 and 7 assigns "paper" to computerChoice and returns it
If the number is between 8 and 10 assigns "scissors" to computerChoice and returns it */

let computerChoice
function getComputerChoice() {
    let num = Math.floor((Math.random()) * 10);
    console.log(num);
    if (num < 4) {
        console.log(computerChoice = "Rock");
    } else if (num < 7) {
        console.log(computerChoice = "Paper");
    } else {
        console.log(computerChoice = "Scissors");
    }
}

getComputerChoice();