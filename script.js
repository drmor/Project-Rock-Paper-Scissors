const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
let humanScore = 0;
let computerScore = 0;
let humanFinalScore = 0;
let computerFinalScore = 0;
let draw = 0;
let currentRound = 0;
const MAXROUND = 5;
let humanSelection;

//transfer all console.log into DOM
const content = document.createElement("div");
const roundContent = document.createElement("div");
const playerWin = document.createElement("p");
const computerWin = document.createElement("p");
const draws = document.createElement("p");
const roundResult = document.createElement("p");
const roundPlayed = document.createElement("p");
content.classList.add("content");
roundContent.classList.add("round");
container.appendChild(roundContent);
container.appendChild(content);
roundContent.appendChild(roundResult);
roundContent.appendChild(roundPlayed);
content.appendChild(playerWin);
content.appendChild(computerWin);
content.appendChild(draws);
roundPlayed.textContent = `Rounds played: ${currentRound}`
roundResult.textContent = "What would you choose?";
playerWin.textContent = `Your current score: ${humanScore}`;
computerWin.textContent = `Computer current score: ${computerScore}`;
draws.textContent = `Your total score: ${humanFinalScore} | Computer total score: ${computerFinalScore} | Total draws: ${draw}`;


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
        roundPlayed.textContent = `Rounds played: ${currentRound}`
        roundResult.innerHTML = `Tie! You and computer chose <span style="font-weight: bold; font-size:1.2em;">${humanSelection}</span.`;
    } else if (humanSelection == "Paper" && computerChoice == "Rock" || humanSelection == "Rock" && computerChoice == "Scissors" || humanSelection == "Scissors" && computerChoice == "Paper"){
        currentRound += 1;
        humanScore += 1;
        roundPlayed.textContent = `Rounds played: ${currentRound}`
        roundResult.innerHTML = `You won this round, your <span style="font-weight: bold; font-size:1.2em;">${humanSelection}</span> beats computer <span style="font-weight: bold; font-size:1.2em;">${computerChoice}</span>!`;
        playerWin.textContent = `Your current score: ${humanScore}`;
    } else {
        currentRound += 1;
        computerScore += 1;
        roundPlayed.textContent = `Rounds played: ${currentRound}`
        roundResult.innerHTML = `You lose, computer <span style="font-weight: bold; font-size:1.2em;">${computerChoice}</span> beats your <span style="font-weight: bold; font-size:1.2em;">${humanSelection}</span>!`;
        computerWin.textContent = `Computer current score: ${computerScore}`;
    } 
    if (currentRound == MAXROUND){
        gameEnd() 
    }
    return [humanScore, computerScore];
}

//Comparing the score and displaying the result
function gameEnd(){
    if (humanScore > computerScore){
        humanFinalScore += 1;
        draws.textContent = `Your total score: ${humanFinalScore} | Computer total score: ${computerFinalScore} | Total draws: ${draw}`;
    } else if (humanScore < computerScore){
        computerFinalScore += 1;
        draws.textContent = `Your total score: ${humanFinalScore} | Computer total score: ${computerFinalScore} | Total draws: ${draw}`;
    } else if (humanScore == computerScore){
        draw += 1;
        draws.textContent = `Your total score: ${humanFinalScore} | Computer total score: ${computerFinalScore} | Total draws: ${draw}`;
    }
    reset()
}
//setting all values to zero so game can run again and again
function reset(){
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    setTimeout(function() {
        playerWin.textContent = `Your current score: ${humanScore}`;
        computerWin.textContent = `Computer current score: ${computerScore}`;
        roundPlayed.textContent = `Rounds played: ${currentRound}`
    }, 1000);
}