// Get user choice
const rpsButtons = document.querySelectorAll("button");
// console.log(rockButton.dataset.choice);

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.dataset.choice);
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
  switch (true) {
    case playerSelection === "paper" && computerSelection === "rock":
    case (playerSelection === "rock") & (computerSelection === "scissors"):
    case (playerSelection === "scissors") & (computerSelection === "paper"):
      return alert("player wins!");

    case playerSelection === computerSelection:
      return alert("it's a tie");

    default:
      return alert("computer wins!");
  }
}
