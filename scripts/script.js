// Get user choice
const rpsButtons = document.querySelectorAll("button");
const divScore = document.querySelector(".running-score");
const spanPlayer = document.querySelector(".score-player");
const spanComputer = document.querySelector(".score-computer");
const choices = document.querySelector(".choices");
const paraElement = document.createElement("p");

function appendHTMLElement(roundResult) {
  divScore.appendChild(paraElement);
  paraElement.textContent = roundResult;
}

function getComputerChoice() {
  // Returns a random value from array of 3 possible values
  const choiceArray = ["rock", "paper", "scissors"];
  var randomChoice =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];

  return randomChoice;
}

function disableButtons() {
  rpsButtons.forEach((button) => {
    button.disabled = true;
  });
}

function getRoundWinner(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      return "draw";
    case playerSelection === "paper" && computerSelection === "rock":
    case playerSelection === "rock" && computerSelection === "scissors":
    case playerSelection === "scissors" && computerSelection === "paper":
      return "player";

    default:
      return "computer";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundWinner;
  let gameWinner;

  rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.dataset.choice;
      computerSelection = getComputerChoice();
      roundWinner = getRoundWinner(playerSelection, computerSelection);
      if (roundWinner === "player") {
        roundResult = `You win: ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        spanPlayer.textContent = `You: ${playerScore}`;
        spanComputer.textContent = `Computer: ${computerScore}`;
      } else if (roundWinner === "computer") {
        roundResult = `You lose: ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        spanPlayer.textContent = `You: ${playerScore}`;
        spanComputer.textContent = `Computer: ${computerScore}`;
      } else {
        roundResult = `Draw: you both chose ${playerSelection}`;
        spanPlayer.textContent = `You: ${playerScore}`;
        spanComputer.textContent = `Computer: ${computerScore}`;
      }

      console.log(
        `${playerScore}: ${playerSelection} - ${computerScore}: ${computerSelection}`
      );
      appendHTMLElement(roundResult);

      if (playerScore === 5 || computerScore === 5) {
        playerScore > computerScore
          ? (gameWinner = "You")
          : (gameWinner = "Computer");
        disableButtons();
        appendHTMLElement(
          `${gameWinner} won! \nReload this page to play again.`
        );
      }
    });
  });
}

game();
