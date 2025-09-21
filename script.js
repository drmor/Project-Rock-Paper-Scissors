let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3); // 0-2
    if (num === 0){
        console.log("rock");
    } else if (num === 1){
        console.log("paper");
    } else if (num === 2){
        console.log("scissors");
    }
};

getComputerChoice();

function getHumanChoice(){
    let choice = prompt("What is your choise?", "rock, paper, scissors");
    if (choice === "rock"){
        console.log("Correct")
    } else if (choice === "paper"){
        console.log("Correct1")
    } else if (choice === "scissors"){
        console.log("Correct2")
    }
}

getHumanChoice();





