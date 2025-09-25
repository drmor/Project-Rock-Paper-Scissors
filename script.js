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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
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
        return [humanScore, computerScore];
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    for(i = 0; i <4; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log(`Game ended, you win! With your score ${humanScore}`)
    } else if (humanScore < computerScore){
        console.log(`Game ended, you lose! With computer score ${computerScore}`)
    } else if (humanScore == computerScore){
        console.log(`Game ended, with draw! Your and computer score ${humanScore} vs ${computerScore}`)
    }
    
}

playGame();