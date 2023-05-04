function getComputerChoice() {
  // Returns a random value from array of 3 possible values
  const choiceArray = ["rock", "paper", "scissors"];
  var randomChoice =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];

  return randomChoice;
}

function getPlayerChoice() {
  // Prompt the user for a choice
  var playerChoice;

  // Prompts the user until a valid value is entered
  do {
    playerChoice = prompt(
      'Enter your choice between "rock", "paper" and "scissors"'
    ).toLowerCase();
  } while (
    (playerChoice != "rock") &
    (playerChoice != "paper") &
    (playerChoice != "scissors")
  );

  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  // Computes the result of the round
  switch (true) {
    case playerSelection === "paper" && computerSelection === "rock":
    case (playerSelection === "rock") & (computerSelection === "scissors"):
    case (playerSelection === "scissors") & (computerSelection === "paper"):
      return (result = "player");

    case playerSelection === computerSelection:
      return (result = "tie");

    default:
      return (result = "computer");
  }
}

function game() {
  // Returns the final winner of a 5-round rock, paper, scissors contest
  var roundWinner;
  var computer = 0;
  var player = 0;

  // Loop through each round 5 times
  for (let i = 1; i <= 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    // Store the round's possible results as a string
    let playerLose = `You lose: ${computerSelection} beats ${playerSelection}!`;
    let computerLose = `You won: ${playerSelection} beats ${computerSelection}!`;
    let tie = `It\'s a tie: you and the computer chose ${computerSelection}`;

    // Get the winner of the round
    roundWinner = playRound(playerSelection, computerSelection);

    // Store the score of the round
    if (roundWinner === "computer") {
      console.log(`Round ${i} - ${playerLose}`);
      computer++;
    } else if (roundWinner === "player") {
      console.log(`Round ${i} - ${computerLose}`);
      player++;
    } else {
      console.log(`Round ${i} - ${tie}`);
    }
  }

  // Return the final winner
  if (computer > player) {
    return `Final result - Computer won! Your Score: ${player} Computer's Score: ${computer}`;
  } else if (computer < player) {
    return `Final result - You win! Your Score: ${player} Computer's Score: ${computer}`;
  } else {
    return `Final result - It's a tie! Your Score: ${player} Computer's Score: ${computer}`;
  }
}

// Return final score and game winner
console.log(game());
