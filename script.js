// array to track round results and moves
const gameResult = [];

// eventListener on player selection buttons 
// 1. play one round and add result to gameResult array
// 2. display round result on page 
const playerSelectionBtns = document.querySelectorAll('.selection-button');
playerSelectionBtns.forEach((selectionBtn) => {
  selectionBtn.addEventListener('click', (e) => {
    // play one round 
    let playerSelection = e.target.innerText.toLowerCase();
    let computerSelection = generateComputerSelection();
    let roundResult = playRound(playerSelection, computerSelection);
    // add result and moves of each round to gameResult array 
    gameResult.push([roundResult, playerSelection, computerSelection]); 
    // get round result message
    let roundResultMessage = getRoundResultMessage(gameResult[gameResult.length - 1]);
    // add round result message to page 
    addRoundResultToPage(roundResultMessage);
    // add running total to page 
    addRunningTotalToPage();
  });
});

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
  let roundResult = NaN;
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

// generate a message indicating who won in each round
// take in array of roundResult, playerSelection, computerSelection
// return message
function getRoundResultMessage(roundDetail) {
  let roundResult = roundDetail[0];
  let playerSelection = roundDetail[1];
  let computerSelection = roundDetail[2];
  if (roundResult === 0) {
    return `It was a draw! You played ${playerSelection}.`;
  } else if (roundResult === 1) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

// add child element to "Round Result" section on page
// take in round result message 
// return no results 
function addRoundResultToPage(roundMessage) {
  const roundResultDiv = document.querySelector('.round-result');
  const roundMessageP = document.createElement('p');
  roundMessageP.innerText = roundMessage;
  roundResultDiv.appendChild(roundMessageP);
}

// add running total to page and return message if one player wins 
// take in no parameters 
// return no results 
function addRunningTotalToPage() {
  // calculate running totals 
  let roundNumber = gameResult.length;
  let resultOnly = gameResult.map(x => x[0]);
  let playerScore = resultOnly.filter(x => x > 0).length;
  let computerScore = resultOnly.filter(x => x < 0).length;
  // add running totals to page 
  document.querySelector('.round-number').innerText = roundNumber;
  document.querySelector('.player-score').innerText = playerScore;
  document.querySelector('.computer-score').innerText = computerScore;
  // display game winner if one playe reaches 5 points 
  let gameResultDiv = document.querySelector('.game-result');
  let gameResultMessage = document.createElement('p');
  if (playerScore === 5 || computerScore === 5) {
    gameResultMessage.innerText = `You ${(playerScore > computerScore) ? 'won' : 'lost'}!`;
    gameResultDiv.appendChild(gameResultMessage);
  }
}