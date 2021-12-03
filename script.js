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

// play one round of Rock Paper Scissors then display result on page
// take in a player's move, a computer's move 
// return no result 
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

  // add message to indicate who won the round
  const roundMessage = getRoundResultMessage(playerSelection, computerSelection, roundResult);
  addRoundResultToDiv(roundMessage);
}

// add child element to "Round Result" section on page
// take in round result message 
// return no results 
function addRoundResultToDiv(roundMessage) {
  const roundResultDiv = document.querySelector('.round-result');
  const roundMessageP = document.createElement('p');
  roundMessageP.innerText = roundMessage;
  roundResultDiv.appendChild(roundMessageP);
}

// generate a message indicating who won in each round
// take in a player's selection, a computer's selection, an integer representaion of who won 
// return message
function getRoundResultMessage(playerSelection, computerSelection, roundResult) {
  if (roundResult === 0) {
    return `It was a draw! You played ${playerSelection}.`;
  } else if (roundResult === 1) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

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

// let playerSelectionRock = document.querySelector('.player-selection .rock');
// playerSelectionRock.addEventListener('click', (e) => console.log(e.target.textContent));

const playerSelectionBtns = document.querySelectorAll('.selection-button');
playerSelectionBtns.forEach((selectionBtn) => {
  selectionBtn.addEventListener('click', (e) => {
    playRound(e.target.innerText.toLowerCase(), computerPlay())
  });
});

// MAYBE CREATE ROUND RESULT ARRAY OR STH AND KEEP TRACK AND PULL EVERYTHING FROM THERE 
// HAVE playRound updateArray & have on click add child from last element in array
