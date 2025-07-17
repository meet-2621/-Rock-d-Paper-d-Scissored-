const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");

const choices = document.querySelectorAll(".choice");

choices.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;
    resultText.textContent = result;
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getResult(user, computer) {
  if (user === computer) return "It's a draw!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "🎉 You Win!";
  }
  return "😞 You Lose!";
}
