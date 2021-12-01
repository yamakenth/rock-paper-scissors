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
  if (playerSelection === computerSelection) {
    gameStatus = 0;
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      gameStatus = 1;
    } else {
      gameStatus = -1;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      gameStatus = 1;
    } else {
      gameStatus = -1;
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      gameStatus = 1;
    } else {
      gameStatus = -1;
    }
  }

  return gameStatus;
}

// test 
for (let i = 0; i < 10; i++) {
  let playerSelection = 'scissors';
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  console.log(`P1: ${playerSelection}, COM: ${computerSelection}, Result: ${result}`)
}

// return `It was a draws! ${playerSelection} ties ${computerSelection}.`;