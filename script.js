let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let choice = prompt("What is your choise?", "rock, paper, scissors").toLowerCase();
    if (choice === "rock"){
        console.log("Rock");
    } else if (choice === "paper"){
        console.log("Paper");
    } else if (choice === "scissors"){
        console.log("Scissors");
    }
    return choice;
};

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3); // 0-2
    if (num === 0){
        console.log("rock");
    } else if (num === 1){
        console.log("paper");
    } else if (num === 2){
        console.log("scissors");
    }
    return num;
};

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == 0){ 
        humanScore += 1;
        computerScore += 1;
        console.log("Tie!");
    } else if (humanChoice == "rock" && computerChoice == 1){
        computerScore += 1;
        console.log("You lose, paper beats rock!");
    } else if (humanChoice == "rock" && computerChoice == 2){
        humanScore += 1;
        console.log("You won, rock beats scissors!");
    } else if (humanChoice == "paper" && computerChoice == 0){
        humanScore += 1;
        console.log("You won, paper beats rock!");
    } else if (humanChoice == "paper" && computerChoice == 1){
        humanScore += 1;
        computerScore += 1;
        console.log("Tie!");
    } else if (humanChoice == "paper" && computerChoice == 2){
        computerScore += 1;
        console.log("You lose, scissors beats paper!");
    } else if (humanChoice == "scissors" && computerChoice == 0){
        computerScore += 1;
        console.log("You lose, rock beats scissors!");
    } else if (humanChoice == "scissors" && computerChoice == 1){
        humanScore += 1;
        console.log("You won, scissors beats paper!");
    } else if (humanChoice == "scissors" && computerChoice == 2){
        humanScore += 1;
        computerScore += 1;
        console.log("Tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
    if (humanScore >= 5){
        console.log("The game ended");
    } else {
        playRound(humanSelection, computerSelection);
    }
}

playGame();
