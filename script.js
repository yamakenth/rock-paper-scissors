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
    // .push returns new array length 
    let roundNumber = gameResult.push([roundResult, playerSelection, computerSelection]); 
    // get round result message
    let roundResultMessage = getRoundResultMessage(gameResult[gameResult.length - 1]);
    // add round result message to page 
    addRoundResultToPage(roundResultMessage);

    console.log(roundResult, playerSelection, computerSelection, gameResult, roundNumber);
    console.log(roundResultMessage);
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






/*

// play 5 rounds, log result of each round, keep tally of number of rounds won, display game winner 
// take in no parameters 
// return game winner
function game() {
  // keep tally of player's wins and computer's wins 
  let playerRoundWon = 0;
  let computerRoundWon = 0;
  // play game 
  while (true) {  
    let playerSelection = prompt('What\'s your move? Type "rock", "paper", or "scissors"').toLowerCase();
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult.split('!')[0] === 'You won') {
      playerRoundWon++;
    } else if (roundResult.split('!')[0] === 'You lost') {
      computerRoundWon++;
    }
    console.log(roundResult);
  }
  // log game winner 
  let gameMessage = getGameResultMessage(playerRoundWon, computerRoundWon);
  console.log(gameMessage);
}

// generate a message indicating who won the game 
// take in number of rounds won by player, number of rounds won by computer
// return message
function getGameResultMessage(playerRoundWon, computerRoundWon) {
  if (playerRoundWon === computerRoundWon) {
    return 'IT WAS A DRAW!';
  } else if (playerRoundWon > computerRoundWon) {
    return `YOU WON! YOU WON ${playerRoundWon} GAMES OUT OF 5.`;
  } else {
    return `YOU LOST! YOU WON ${playerRoundWon} GAMES OUT OF 5.`;
  }
}

// play game
// game();

*/