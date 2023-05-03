// Get user choice
const rpsButtons = document.querySelectorAll("button");
const divScore = document.querySelector(".score");

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice, getComputerChoice());
  });
});

function getComputerChoice() {
  // Returns a random value from array of 3 possible values
  const choiceArray = ["rock", "paper", "scissors"];
  var randomChoice =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];

  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  // Computes the result of the round
  let roundResult;
  if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult = "player wins!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult = "player wins!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult = "player wins!";
  } else if (playerSelection === computerSelection) {
    roundResult = "it's a tie!";
  } else {
    roundResult = "computer wins!";
  }

  const paraElement = document.createElement("p");
  divScore.appendChild(paraElement);
  paraElement.setAttribute("class", "round-score");
  paraElement.textContent = roundResult;
}
