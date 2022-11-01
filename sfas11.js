let startingBoard = [ [  0,  1,  0,  1,  0,  1,  0,  1 ],
                    [  1,  0,  1,  0,  1,  0,  1,  0 ],
                    [  0,  1,  0,  1,  0,  1,  0,  1 ],
                    [  0,  0,  0,  0,  0,  0,  0,  0 ],
                    [  0,  0,  0,  0,  0,  0,  0,  0 ],
                    [  2,  0,  2,  0,  2,  0,  2,  0 ],
                    [  0,  2,  0,  2,  0,  2,  0,  2 ],
                    [  2,  0,  2,  0,  2,  0,  2,  0 ] ];

let userOneCheckers = [];
let userTwoCheckers = [];

const startGame = () => {
  // set up game board in starting position  
  let board = startingBoard;
  return board;
}

const firstUser = () => {
  // returns first user randomly
  let user = Math.floor(Math.random() * 2) + 1 
  return user;
}

const printBoard = (board) => {
  // prints board with alphanumeric grid positions on the side and bottom 
  board.forEach(function(row){
    console.log(row);
  });
}

const moveToken = () => {
  // allows user to move a token to a grid position 
  
}

const jumpAvailable = (user, boardPosition) => {
  // checks if a user has a jump available at a specific position
}
