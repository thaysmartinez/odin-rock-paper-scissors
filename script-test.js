const rpsButtons = document.querySelectorAll(".buttons");

let userChoice;
rpsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    if (userChoice === "rock") return console.log("works");
    if (userChoice === "paper") return console.log("you clicked on paper");
    else return console.log("you clicked on scissors");
  });
});
