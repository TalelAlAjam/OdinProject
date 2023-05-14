function getComputerChoice() {
    let resultComputerChoice = "null";
    let randomInteger = Math.floor(Math.random() * 3)
    switch(randomInteger) {
        case 0:
            resultComputerChoice = "rock";
            break;
        case 1:
            resultComputerChoice = "paper";
            break;
        case 2:
            resultComputerChoice = "scissors";
            break;
        default:
            resultComputerChoice = "null";
    }
    return resultComputerChoice;
}
function playRound() {
    playerSelection = prompt("Lets Play!! Choose Rock, Paper, or Scissors!!: ");
    if (playerSelection = undefined)
    
    console.log(playRound(playerSelection, computerSelection));
    
    switch (playerSelection) {
        case "rock":
                if (computerSelection = "scissors"){
                    countWins++;
                    break;
                }
                break;
        case "paper":
                if (computerSelection = "rock"){
                    countWins++;
                    break;
                }
                break;
        case "scissors":
                if (computerSelection = "paper"){
                    countWins++;
                    break;
                }
                break;
        default:
            break;
    }
  }
  function playGame() {
    let roundCount = 0;
    let countWins = 0;
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        if (playRound() = 1) {
        }
    }
  }
  //start of main loop //
  prompt("Would you like to play a game? Type any key", "no user input");
  const computerSelection = getComputerChoice();
  

