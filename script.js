// variables to keep track of game status 
let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

// eventListener on player selection buttons 
const playerSelectionBtns = document.querySelectorAll('.selection-button');
playerSelectionBtns.forEach((selectionBtn) => {
  selectionBtn.addEventListener('click', (e) => playGame(e));
});

// play one round of game 
// take in event from click 
// return no results 
function playGame(e) {
  // add one round
  roundNumber++;
  // play one round 
  let playerSelection = e.target.innerText.toLowerCase();
  let computerSelection = generateComputerSelection();
  let roundResult = playRound(playerSelection, computerSelection);
  // get roundResult as message 
  let roundResultMessage = getRoundResultMessage(roundResult, playerSelection, computerSelection);
  // display roundResult 
  displayRoundResultMessage(roundResultMessage);
  // add scores 
  addScore(roundResult);
  // display running score 
  displayRunningScore();
  // end game if a score reaches 5 points 
  if (playerScore === 5 || computerScore === 5) {
    // display result message 
    displayGameResultMessage();
    // disable selection buttons 
    disableSelectionBtns();
    // display page refresh button
    displayPlayAgain();
  }
}

// randomly generate computer's move 
// take no parameters 
// return 'rock', 'paper', or 'scissors'
function generateComputerSelection() {
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

  return move;
}

// play one round of Rock Paper Scissors
// take in a player's move, a computer's move 
// Return int representation of result 
function playRound(playerSelection, computerSelection) {
  // determine winner {-1: player lose, 0: draw, 1: player win}
  let roundResult = 0;
  if (playerSelection === computerSelection) { // draw 
    roundResult = 0;
  } else if (playerSelection === 'rock') { // player plays 'rock'
    if (computerSelection === 'scissors') {
      roundResult = 1;
    } else {
      roundResult = -1;
    }
  } else if (playerSelection === 'paper') { // player plays 'paper'
    if (computerSelection === 'rock') {
      roundResult = 1;
    } else {
      roundResult = -1;
    }
  } else if (playerSelection === 'scissors') { // player plays 'scissors'
    if (computerSelection === 'paper') {
      roundResult = 1;
    } else {
      roundResult = -1;
    }
  }

  return roundResult;
}

// add score to playerScore or computerScore
// take in roundResult int
// return no result 
function addScore(roundResult) {
  if (roundResult === 1) {
    playerScore++;
  } else if (roundResult === -1) {
    computerScore++;
  }
}

// generate a message indicating who won in each round
// take in roundResult, playerSelection, computerSelection
// return message
function getRoundResultMessage(roundResult, playerSelection, computerSelection) {
  if (roundResult === 0) {
    return `It was a draw! You both played ${playerSelection}.`;
  } else if (roundResult === 1) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

// display roundResultMessage on page 
// take in round result message 
// return no results 
function displayRoundResultMessage(roundMessage) {
  const roundResultDiv = document.querySelector('.round-result');
  const roundMessageP = document.createElement('p');
  roundMessageP.innerText = roundMessage;
  roundResultDiv.appendChild(roundMessageP);
}

// display running total to page  
// take in no parameters 
// return no results 
function displayRunningScore() {
  // add running totals to page 
  document.querySelector('.round-number').innerText = roundNumber;
  document.querySelector('.player-score').innerText = playerScore;
  document.querySelector('.computer-score').innerText = computerScore;
}

// display game result on page
// take in no parameters 
// return no results 
function displayGameResultMessage() {
  let gameResultDiv = document.querySelector('.game-result');
  let gameResultMessage = document.createElement('p');
  gameResultMessage.innerText = `You ${(playerScore > computerScore) ? 'won' : 'lost'}!`;
  gameResultDiv.appendChild(gameResultMessage);
}

// disable player selection buttons 
// take in no parameters
// return no results 
function disableSelectionBtns() {
  playerSelectionBtns.forEach((selectionBtn) => {
    selectionBtn.disabled = true;
  });
}

// display play again to refresh page 
// take in no parameters 
// return no results 
function displayPlayAgain() {
  let playAgainDiv = document.querySelector('.play-again');
  let playAgainBtn = document.createElement('button');
  playAgainBtn.type = 'button';
  playAgainBtn.className = 'play-again';
  playAgainBtn.innerText = 'Play Again!';
  playAgainDiv.appendChild(playAgainBtn);
  playAgainBtn.addEventListener('click', () => window.location.reload());
}