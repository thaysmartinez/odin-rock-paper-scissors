// Get user choice
const rpsButtons = document.querySelectorAll("button");
const divScore = document.querySelector(".running-score");
const spanPlayer = document.querySelector(".score-player");
const spanComputer = document.querySelector(".score-computer");

function appendHTMLElement(result) {
  const paraElement = document.createElement("p");
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
  let userScore = 0;
  let computerScore = 0;
  let roundWinner;
  let gameWinner;

  spanPlayer.textContent = userScore;
  spanComputer.textContent = computerScore;

  rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      roundWinner = playRound(button.dataset.choice, getComputerChoice());
      if (roundWinner === "player") {
        userScore++;
        spanPlayer.textContent = userScore;
      } else if (roundWinner === "computer") {
        computerScore++;
        spanComputer.textContent = computerScore;
      }

      console.log(userScore, computerScore);
      if (userScore === 5 || computerScore === 5) {
        userScore > computerScore
          ? (gameWinner = "player")
          : (gameWinner = "computer");
        appendHTMLElement(`FINAL RESULT: ${gameWinner} wins!`);
        return;
      }
    });
  });
}

game();
