(() => {
  let deck = [],
    playerScores = [];

  // Card types
  const types = ["C", "D", "H", "S"],
    specials = ["A", "J", "Q", "K"];

  // HTML References.
  const btnDraw = document.querySelector("#btnDraw"),
    btnEnd = document.querySelector("#btnEnd"),
    btnNew = document.querySelector("#btnNew"),
    divPlayerCards = document.querySelectorAll(".divCards"),
    scores = document.querySelectorAll("small");

  // Start game, build game and restart scores.
  const startGame = (numPlayers = 2) => {
    deck = buildDeck();
    playerScores = [];

    for (let i = 0; i < numPlayers; i++) {
      playerScores.push(0);
    }

    scores.forEach((elem) => {
      elem.innerText = 0;
    });

    divPlayerCards.forEach((elem) => {
      elem.innerHTML = "";
    });

    btnDraw.disabled = false;
    btnEnd.disabled = false;
  };

  // Build deck with card types.
  const buildDeck = () => {
    deck = [];

    for (let i = 2; i <= 10; i++) {
      for (let type of types) {
        deck.push(i + type);
      }
    }

    for (let type of types) {
      for (let special of specials) {
        deck.push(special + type);
      }
    }

    return _.shuffle(deck);
  };

  // Draw a card.
  const drawCard = () => {
    if (deck.length === 0) {
      throw "There are no cards left in the deck.";
    }

    return deck.pop();
  };

  // Obtain card value.
  const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);

    return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
  };

  // Accumulate points with card value an turn.
  const accumulatePoints = (card, turn) => {
    playerScores[turn] += cardValue(card);
    scores[turn].innerText = playerScores[turn];

    return playerScores[turn];
  };

  // Create card in HTML DOM.
  const createCard = (card, turn) => {
    const imgCard = document.createElement("img");
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.className = "card";
    divPlayerCards[turn].append(imgCard);
  };

  // Send alert messages on winner determinations.
  const determineWinner = () => {
    const [minimumPoints, computerPoints] = playerScores;

    setTimeout(() => {
      if (computerPoints === minimumPoints) {
        alert("Draw");
      } else if (minimumPoints > 21) {
        alert("The computer won");
      } else if (computerPoints > minimumPoints && computerPoints <= 21) {
        alert("The computer won");
      } else {
        alert("Player Wins");
      }
    }, 100);
  };

  // Computer turn based on player points.
  const computerPoints = (minimumPoints) => {
    let computerPoints = 0;

    do {
      const card = drawCard();

      computerPoints = accumulatePoints(card, playerScores.length - 1);
      createCard(card, playerScores.length - 1);
    } while (computerPoints < minimumPoints && minimumPoints <= 21);

    determineWinner();
  };

  //  Events
  btnDraw.addEventListener("click", () => {
    const card = drawCard();
    const playerPoints = accumulatePoints(card, 0);

    createCard(card, 0);

    if (playerPoints > 21) {
      btnDraw.disabled = true;
      btnEnd.disabled = true;
      computerPoints(playerPoints);
    }

    if (playerPoints === 21) {
      btnDraw.disabled = true;
      btnEnd.disabled = true;
      computerPoints(playerPoints);
    }
  });

  btnEnd.addEventListener("click", () => {
    btnDraw.disabled = true;
    btnEnd.disabled = true;
    computerPoints(playerScores[0]);
  });

  btnNew.addEventListener("click", () => {
    startGame();
  });

  return { newGame: startGame };
})();
