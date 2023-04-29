/*
1. Write a function that gets the computer selection and return either 'rock', 'paper' or 'scissors'.
2. Write a function that takes player selection and computer selection as parameters, and return string declaring the winner.
    a) Function must be case insensitive (toLower function)
*/

function getComputerChoice () {
    // Return a random value from array
    const choiceArray = ['rock', 'paper', 'scissors'];
    
    var randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];

    return randomChoice;
}

function getPlayerChoice ()
{
    var playerChoice;

    do {
        playerChoice = prompt("Enter your choice between \"rock\", \"paper\" and \"scissors\"").toLowerCase();
    }
    while (playerChoice != "rock" & playerChoice != "paper" & playerChoice != "scissors");

    return playerChoice;
}



function playRound(playerSelection, computerSelection) {

    // let playerSelection = getPlayerChoice();
    // let computerSelection = getComputerChoice();

    // const playerLose = `You lose: ${computerSelection} beats ${playerSelection}!`;
    // const computerLose = `You won: ${playerSelection} beats ${computerSelection}!`;
    // const tie = `It\'s a tie: you and the computer chose ${computerSelection}`;

    // console.log(`Your choice: ${playerSelection}`);
    // console.log(`Computer's choice: ${computerSelection}`);

    if (playerSelection === "paper" & computerSelection === "rock") {
        // console.log(computerLose);
        return result = "player";
    } else if (playerSelection === "rock" & computerSelection === "scissors") {
        // console.log(computerLose);
        return result = "player";
    } else if (playerSelection === "scissors" & computerSelection === "paper") {
        // console.log(computerLose);
        return result = "player";
    } else if (playerSelection === computerSelection) {
        // console.log(tie);
        return result = "tie";
    } else {
        // console.log(playerLose);
        return result = "computer"
    }
}

function game () {
    
    var roundWinner;
    var computer = 0;
    var player = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let playerLose = `You lose: ${computerSelection} beats ${playerSelection}!`;
        let computerLose = `You won: ${playerSelection} beats ${computerSelection}!`;
        let tie = `It\'s a tie: you and the computer chose ${computerSelection}`;

        roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner === 'computer') {
            console.log(`Round ${i} - ${playerLose}`);
            computer++;
        } else if (roundWinner === "player") {
            console.log(`Round ${i} - ${computerLose}`);
            player++;
        } else {
            console.log(`Round ${i} - ${tie}`);
        }
    }

    if (computer > player) {
        return (`Final result - Computer wins! Your Score: ${player} Computer's Score: ${computer}`);
    } else if (computer < player) {
        return (`Final result - You win! Your Score: ${player} Computer's Score: ${computer}`);
    } else {
        return (`Final result - It's a tie! Your Score: ${player} Computer's Score: ${computer}`);
    }
}

console.log(game());