let humanChoice;
let computerChoice;
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


let humanScore = 0;
let computerScore = 0;
let rounds = 0;

const results = document.getElementById("results");
const resultsTxt = document.createElement("p");
const scores = document.createElement("p");
results.appendChild(resultsTxt);
results.appendChild(scores);

const rockBtn = document.getElementById("rock");
const pprBtn = document.getElementById("paper");
const scrsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", playRound);
pprBtn.addEventListener("click", playRound);
scrsBtn.addEventListener("click", playRound);


function playRound() {
    getComputerChoice();
    humanChoice = event.target.id;
    function tie() {
        console.log("It's a tie! try again.")
        rounds++
    }
    
    let user = humanChoice.toLowerCase();
    let com = computerChoice.toLowerCase();
    
    if ((user === "paper" && com === "scissors") || (user === "rock" && com === "paper") || (user === "scissors" && com === "rock")) {
        computerScore++;
        resultsTxt.textContent = `${com} beats ${user}! try again.`;
        scores.textContent = `you score: ${humanScore}, computer's score: ${computerScore}`;
    
    } else if ((user === "scissors" && com === "paper") || (user === "rock" && com === "scissors") || (user === "paper" && com === "rock")) {
        humanScore++;
        resultsTxt.textContent = `${user} beats ${com}! march on!`
        scores.textContent = `you score: ${humanScore}, computer's score: ${computerScore}`
    
    } else {
        resultsTxt.textContent = `it's a tie. try again?`
        scores.textContent = `you score: ${humanScore}, computer's score: ${computerScore}`
    }

    if (humanScore === 5) {
        const winner = document.createElement("p");
        winner.textContent = "You are the winner! Congrats!"
        results.appendChild(winner);
        rockBtn.classList.toggle("disabled");
        rockBtn.disabled = true;
        pprBtn.disabled = true;
        scrsBtn.disabled = true;

    } else if (computerScore === 5) {
        const winner = document.createElement("p");
        winner.textContent = "You lost. Wanna try again?"
        results.appendChild(winner);
        rockBtn.disabled = true;
        pprBtn.disabled = true;
        scrsBtn.disabled = true;
    }
};