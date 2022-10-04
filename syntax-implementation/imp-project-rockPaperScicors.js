/* Rock, Paper, or Scicors - Dea Ananda Gunawan
Well, you know this game. */

/**
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
 */

// User choosing rock, paper, or scicors
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === "rock" || userInput === "paper" || userInput === "scicors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("Error. Choose the right option!");
  }
};

getComputerChoice = () => {
  randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scicors";
      break;
  }
};

compChoice = getComputerChoice();

determineWinner = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    return "It's a TIE!";
  }
  if (userChoice === "rock") {
    if (compChoice === "paper") {
      return `You: ${userChoice} 
Comp: ${compChoice}
==Computer Won!==`;
    } else if (compChoice === "scicors") {
      return `You: ${userChoice} 
Comp: ${compChoice}
==You Won!==`;
    }
  } else if (userChoice === "paper") {
    if (compChoice === "scicors") {
      return `You: ${userChoice} 
Comp: ${compChoice}
==Computer Won!==`;
    } else if (compChoice === "rock") {
      return `You: ${userChoice} 
Comp: ${compChoice}
==You Won!==`;
    }
  } else if (userChoice === "scicors") {
    if (compChoice === "rock") {
      return `You: ${userChoice} 
Comp: ${compChoice}
==Computer Won!==`;
    } else if (compChoice === "paper") {
      return `You: ${userChoice} 
Comp: ${compChoice}
==You Won!==`;
    }
  } else {
    return "YOU WIN! BOOO CHEATER!!";
  }
};

userChoice = userInput = "BOMB";

playGame = () => {
  console.log(determineWinner(userChoice, compChoice));
};

playGame();

// Secret Cheat Code : type 'bomb' so that you will always win!
