const buttons = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;
let humanWin = 0;
let computerWin = 0;
let currentRound = 0;
const MAXROUND = 5;
let humanSelection;

//player element selection and launching the game
buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        humanSelection = btn.id
        playRound(getComputerChoice())
    });
});

//computer element selection
function getComputerChoice(){
    const elements = ['Rock', 'Paper', 'Scissors'];
    let element = elements[Math.floor(Math.random() * elements.length)];
    return element;
};

//Rounds operation
function playRound(computerChoice){
    if (humanSelection == computerChoice){ 
        currentRound += 1;
        console.log(`Tie! You and computer chose ${humanSelection}.`);
    } else if (humanSelection == "Paper" && computerChoice == "Rock" || humanSelection == "Rock" && computerChoice == "Scissors" || humanSelection == "Scissors" && computerChoice == "Paper"){
        currentRound += 1;
        humanScore += 1;
        console.log(`You won this round, your ${humanSelection} beats computer ${computerChoice}!`);
    } else {
        currentRound += 1;
        computerScore += 1;
        console.log(`You lose, computer ${computerChoice} beats your ${humanSelection}!`);
    } 
    if (currentRound == MAXROUND){
        gameEnd() 
    }
    return [humanScore, computerScore];
}

//Comparing the score and displaying the result
function gameEnd(){
    if (humanScore > computerScore){
        humanWin += 1;
        console.log(`Game ended, you win! With your score ${humanScore}`)
    } else if (humanScore < computerScore){
        computerWin += 1;
        console.log(`Game ended, you lose! With computer score ${computerScore}`)
    } else if (humanScore == computerScore){
        console.log(`Game ended, with draw! Your and computer score ${humanScore} vs ${computerScore}`)
    }
    console.log(`Computer: ${computerWin} Player: ${humanWin}`)
    reset()
}
//setting all vlues to zero so game can run again and again
function reset(){
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
}