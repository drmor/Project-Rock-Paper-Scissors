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







