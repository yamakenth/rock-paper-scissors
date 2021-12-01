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

// play one round of Rock Paper Scissors 
function playRound(playerSelection, computerSelection) {
  
  // determine winner {-1: player lose, 0: draw, 1: player win}
  let gameStatus;
  if (playerSelection === computerSelection) { // draw 
    gameStatus = 0;
  } else if (playerSelection === 'rock') { // player plays 'rock'
    if (computerSelection === 'scissors') {
      gameStatus = 1;
    } else {
      gameStatus = -1;
    }
  } else if (playerSelection === 'paper') { // player plays 'paper'
    if (computerSelection === 'rock') {
      gameStatus = 1;
    } else {
      gameStatus = -1;
    }
  } else if (playerSelection === 'scissors') { // player plays 'scissors'
    if (computerSelection === 'paper') {
      gameStatus = 1;
    } else {
      gameStatus = -1;
    }
  }

  // get status message to return 
  let message = getStatusMessage(playerSelection, computerSelection, gameStatus);
  
  return message;
}

// generate game status message 
function getStatusMessage(playerSelection, computerSelection, gameStatus) {
  if (gameStatus === 0) {
    return `It was a draw! ${playerSelection} ties ${computerSelection}.`;
  } else if (gameStatus === 1) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}






// test 
for (let i = 0; i < 10; i++) {
    let computerSelection = computerPlay();
    let playerSelection = 'scissors';
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
}
