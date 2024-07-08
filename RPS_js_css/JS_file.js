// JS initial commit

// Computer choice function

function getComputerChoice() {
  const calcFormula = Math.floor(Math.random() * 3);

  if (calcFormula === 0) {
    return "rock";
  } else if (calcFormula === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// End of computer choice function

// Score storing variables

let computerScore = 0;
let humanScore = 0;

// End of score storing variables

// playGame function

function playGame() {
  // Reference to score show variables

  const humanScoreShow = document.querySelector(".human-score-show");
  const computerScoreShow = document.querySelector(".computer-score-show");
  const winnerOfTheRound = document.querySelector(".winner-of-the-round");

  // Reference to score show variables

  // Menu buttons listener for click

  let menuButtons = document.querySelector("#menu-container");
  menuButtons.addEventListener("click", (event) => {
    let target = event.target.closest(".buttons");

    if (!target) return;

    if (humanScore === 5 || computerScore === 5) {
      humanScore = 0;
      computerScore = 0;
      humanScoreShow.textContent = `${humanScore}`;
      computerScoreShow.textContent = `${computerScore}`;
    }

    switch (target.id) {
      case "rock":
        break;
      case "paper":
        break;
      case "scissors":
        break;
    }
    scoreBoard(target.id, getComputerChoice());
  });

  // End of Menu buttons listener for click

  // Start of scoreBoard function code

  function scoreBoard(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
      const drawGame = `
User choice: "rock"

Computer choice: "rock"
      
 *** Draw! 

 *** You both selected rock!`;
      console.log(drawGame);
      winnerOfTheRound.textContent = `${drawGame}`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      const humanWins = `
User choice: "paper"
Computer choice: "rock"
      
Human wins! Paper beats rock!`;
      console.log(humanWins);
      ++humanScore;
      console.log(`Human: ` + humanScore);
      humanScoreShow.textContent = `${humanScore}`;
      winnerOfTheRound.textContent = `${humanWins}`;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      const computerWins = `
User choice: "scissors"
Computer choice: "rock"

Computer wins! Rock beat scissors!`;
      console.log(computerWins);
      ++computerScore;
      console.log(`Computer: ` + computerScore);
      computerScoreShow.textContent = `${computerScore}`;
      winnerOfTheRound.textContent = `${computerWins}`;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      const drawGame = `
User choice: "paper"
Computer choice: "paper"
      
 *** Draw! 
 *** You both selected paper!`;
      console.log(drawGame);
      winnerOfTheRound.textContent = `${drawGame}`;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      const drawGame = `
User choice: "scissors"
Computer choice: "scissors"

 *** Draw! 
 *** You both selected scissors!`;

      console.log(drawGame);
      winnerOfTheRound.textContent = `${drawGame}`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      const computerWins = `
User choice: "rock"
Computer choice: "paper"

Computer wins! Paper beats rock!`;
      console.log(computerWins);
      ++computerScore;
      console.log(`Computer: ` + computerScore);
      computerScoreShow.textContent = `${computerScore}`;
      winnerOfTheRound.textContent = `${computerWins}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      const humanWins = `
User choice: "rock"
Computer choice: "scissors"

Human wins! Rock beats scissors!`;
      console.log(humanWins);
      ++humanScore;
      console.log(`Human: ` + humanScore);
      humanScoreShow.textContent = `${humanScore}`;
      winnerOfTheRound.textContent = `${humanWins}`;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      const computerWins = `
User choice: "paper"
Computer choice: "scissors"

Computer wins! Scissors beat paper!`;
      console.log(computerWins);
      ++computerScore;
      console.log(`Computer: ` + computerScore);
      computerScoreShow.textContent = `${computerScore}`;
      winnerOfTheRound.textContent = `${computerWins}`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      const humanWins = `
User choice: "scissors"
Computer choice: "paper"

Human wins! Scissors beat paper!`;
      console.log(humanWins);
      ++humanScore;
      console.log(`Human: ` + humanScore);
      humanScoreShow.textContent = `${humanScore}`;
      winnerOfTheRound.textContent = `${humanWins}`;
    }
    if (humanScore === 5) {
      winnerOfTheRound.textContent = `The human is the winner of the round!`;
      console.log(`The human is the winner of the round!`);
    } else if (computerScore === 5) {
      winnerOfTheRound.textContent = `The computer is the winner of the round!`;
      console.log(`The computer is the winner of the round!`);
    }
  }
  // End of scoreBoard function code
}

// End of playGame function

playGame();
