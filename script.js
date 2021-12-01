// randomly generate computer's move 
// take no parameters 
// return 'rock', 'paper', or 'scissors'
function computerPlay() {
  // declare move 
  let move = '';
  // generate a random number [0, 3)
  let randNum = Math.floor(Math.random() * 3);
  // convert random number to move in words
  if (randNum === 0) {
    move = 'rock';
  } else if (randNum === 1) {
    move = 'paper';
  } else {
    move = 'scissors';
  }
  // return move
  return move;
}

// play one round of Rock Paper Scissors 
// take in a player's move, a computer's move 
// return a message to indicate who won 
function playRound(playerSelection, computerSelection) {
  // determine winner {-1: player lose, 0: draw, 1: player win}
  let gameStatus = NaN;
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
  // get message to indicate who won 
  let message = getStatusMessage(playerSelection, computerSelection, gameStatus);
  // return message 
  return message;
}

// generate a message indicating who won in each round
// take in a player's selection, a computer's selection, an integer representaion of who won 
// return message
function getStatusMessage(playerSelection, computerSelection, gameStatus) {
  if (gameStatus === 0) {
    return `It was a draw! You played ${playerSelection}.`;
  } else if (gameStatus === 1) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

// play 5 games, log result of each round, keep tally of number of wins, display final winner 
// take in no parameters 
// return final winner out of 5 games 
function game() {
  // keep tally of player's wins and computer's wins 
  let playerWinCount = 0;
  let computerWinCount = 0;
  // play game 
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('What\'s your move? Type "rock", "paper", or "scissors"').toLowerCase();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result.split('!')[0] === 'You won') {
      playerWinCount++;
    } else if (result.split('!')[0] === 'You lost') {
      computerWinCount++;
    }
    console.log(result);
    
    console.log('P>>>' + playerWinCount);
    console.log('COM>>>' + computerWinCount);
  }
  // log final winner 
  let finalMessage = determineWinner(playerWinCount, computerWinCount);
  console.log(finalMessage);
}

// determine final game winner 
function determineWinner(playerWinCount, computerWinCount) {
  if (playerWinCount === computerWinCount) {
    return 'IT WAS A DRAW!';
  } else if (playerWinCount > Math.floor(playerWinCount / 2)) {
    return `YOU WON! YOU WON ${playerWinCount} GAMES OUT OF 5.`;
  } else {
    return `YOU LOST! YOU WON ${playerWinCount} GAMES OUT OF 5.`;
  }
}

// play game
// game();
