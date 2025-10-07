function getHumanChoice(){
    let choice = prompt("What is your choise?", "rock, paper, scissors").toLowerCase();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
};

function getComputerChoice(){
    const elements = ['Rock', 'Paper', 'Scissors'];
    let element = elements[Math.floor(Math.random() * elements.length)];
    return element;
};

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){  
        if (humanChoice == computerChoice){ 
            console.log(`Tie! You and computer chose ${humanChoice}.`);
        } else if (humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Paper"){
            humanScore += 1;
            console.log(`You won this round, your ${humanChoice} beats computer ${computerChoice}!`);
        } else {
            computerScore += 1;
            console.log(`You lose, computer ${computerChoice} beats your ${humanChoice}!`);
        } 
        return [humanScore, computerScore];
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    for(i = 0; i < 0; i++){
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