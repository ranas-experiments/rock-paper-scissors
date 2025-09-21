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
function getHumanChoice(humanChoice) {
    humanChoice = prompt("rock, paper or scissors?", "")
    return humanChoice
}

// getHumanChoice();

let humanScore = 0;
let computerScore = 0;

/* Create a function named playRound that
Takes the user input and computerChoice as arguments and compares the two
define a win function that increments user score and logs the statement you win, define a lose function, define a tie function
make the user input all lowercase and assign it to humanChoice
if user: rock com: scissors, return win
if user: rock com: paper, return lose
if user: paper com: rock, return win
if user: paper com: scissors, return lose
if user: scissors com: paper, return win
if user: scissors com: rock, return lose
if user draws the same as the computer, return tie
increment winner score */

function playRound(humanChoice, computerChoice) {
    function win() {
    }
    function lose() {
        computerScore += computerScore;
        console.log("You lose!")
    }
    function tie() {
        console.log("It's a tie! try again.")
    }
    
    user = humanChoice.toLowerCase();
    com = computerChoice.toLowerCase();
    
    if (user === "rock" && com === "scissors") {
        humanScore += 1;
        console.log("You win! rock beats scissors")
        console.log("your score is: " + humanScore);
        console.log("the computer's score is: " + computerScore);
    
    } else if (user === "rock" && com === "paper") {
        computerScore += 1;
        console.log("You lose! paper beats rock")
        console.log("your score is: " + humanScore);
        console.log("the computer's score is: " + computerScore);
    
    } else if ( user === "paper" && com === "rock") {
        humanScore += 1;
        console.log("You win! paper beats rock.")
        console.log("your score is: " + humanScore);
        console.log("the computer's score is: " + computerScore);

    
    } else if (user === "paper" && com === "scissors") {
        computerScore += 1;
        console.log("You loser! scissors beat paper")
        console.log("your score is: " + humanScore);
        console.log("the computer's score is: " + computerScore);
            
    } else if (user === "scissors" && com === "paper") {
        humanScore += 1;
        console.log("You win! scissors beat paper")
        console.log("your score is: " + humanScore);
        console.log("the computer's score is: " + computerScore);
    
    } else if (user === "scissors" && com === "rock") {
        lose();
    
    } else {
        tie();
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);