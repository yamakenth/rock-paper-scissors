// randomly return 'rock', 'paper', 'scissors'
function computerPlay() {
  // move in english 
  let move;
  // generate a random number [0, 2]
  let randNum = Math.floor(Math.random() * 3);
  // generate a move 
  if (randNum === 0) {
    move = 'rock';
  } else if (randNum === 1) {
    move = 'paper';
  } else {
    move = 'scissors';
  }
  return move;
}

