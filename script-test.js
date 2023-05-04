// Get user choice
const rpsButtons = document.querySelectorAll("button");
const divScore = document.querySelector(".running-score");
const spanPlayer = document.querySelector(".score-player");
const spanComputer = document.querySelector(".score-computer");
const choices = document.querySelector(".choices");
const paraElement = document.createElement("p");

function appendHTMLElement(result) {
  divScore.appendChild(paraElement);
  paraElement.textContent = result;
}

function getComputerChoice() {
  // Returns a random value from array of 3 possible values
  const choiceArray = ["rock", "paper", "scissors"];
  var randomChoice =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];

  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  let roundDisplay;
  let roundResult;

  console.log(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    roundDisplay = "it's a tie!";
    roundResult = "tie";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundDisplay = "player wins";
    roundResult = "player";
  } else {
    roundDisplay = "computer wins";
    roundResult = "computer";
  }
  appendHTMLElement(roundDisplay);
  return roundResult;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundWinner;
  let gameWinner;

  spanPlayer.textContent = `Player: ${playerScore}`;
  spanComputer.textContent = `Computer: ${computerScore}`;

  rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      roundWinner = playRound(button.dataset.choice, getComputerChoice());
      if (roundWinner === "player") {
        playerScore++;
        spanPlayer.textContent = `Player: ${playerScore}`;
      } else if (roundWinner === "computer") {
        computerScore++;
        spanComputer.textContent = `Computer: ${computerScore}`;
      }

      console.log(playerScore, computerScore);

      if (playerScore === 5 || computerScore === 5) {
        playerScore > computerScore
          ? (gameWinner = "player")
          : (gameWinner = "computer");
        choices.removeChild(spanComputer);
        choices.removeChild(spanPlayer);
        playerScore = 0;
        computerScore = 0;
        appendHTMLElement(`FINAL RESULT: ${gameWinner} wins!`);
        return;
      }
    });
  });
}

game();
