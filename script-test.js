// Get user choice
const rpsButtons = document.querySelectorAll("button");
// console.log(rockButton.dataset.choice);

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset.choice);
  });
});
