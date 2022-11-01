
const dealCard = () => {
  // if user requests additional card, card is drawn and score is incremented
  let newCard = randomCard(cards);
  // returns card and value
  return { newCard }
}

const playGame = () => {
  console.log('Welcome to blackjack!');
  firstCards = initialDeal();
  currentScore += firstCards[card1].val + firstCards[card2].val;
  console.log(`Your first cards are: ${firstCards[card1]} and ${firstCards[card2]});
  console.log(`Your score is ${currentScore});
  dealCard();
}




playGame();
