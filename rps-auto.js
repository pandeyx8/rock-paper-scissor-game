let currentMode = 'play';

let guessScore = {
  correct: 0,
  wrong: 0
};

let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
  score = { wins: 0, losses: 0, ties: 0 };
} else {
  const confirmReset = confirm("Continue with previous score?");
  if (!confirmReset) {
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.setItem('score', JSON.stringify(score));
  }
}

updatescore();
updateGuessScore();

//autoplay

let isAutoPlaying = false;
let intervalId;

function autoplay() {
  const autoplayButton = document.querySelector('.auto-play-css');
  
  if (!isAutoPlaying) {
    autoplayButton.classList.add('active');
    intervalId = setInterval(() => {
      const moves = ['Rock', 'Paper', 'Scissor'];
      const randomMove = moves[Math.floor(Math.random() * 3)];
      playgame(randomMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    autoplayButton.classList.remove('active');
    isAutoPlaying = false;
  }
}


function playgame(playerMove) {
  const compMove = pickcompmove();

  if (currentMode === 'guess') {
    const correct = playerMove === compMove;

    if (correct) guessScore.correct++;
    else guessScore.wrong++;

    document.querySelector('.js-result').innerHTML = correct ? '🎉 Correct Guess!' : '❌ Wrong Guess!';
    document.querySelector('.js-moves').innerHTML = 
   `You <img src="images/${playerMove.toLowerCase()}-emoji.png" class="result-image"> vs Bot <img src="images/${compMove.toLowerCase()}-emoji.png" class="result-image">`;


    updateGuessScore();

  } else {
    let result = '';

    if (playerMove === compMove) {
      result = 'Tie!';
      score.ties++;
    } else if (
      (playerMove === 'Rock' && compMove === 'Scissor') ||
      (playerMove === 'Paper' && compMove === 'Rock') ||
      (playerMove === 'Scissor' && compMove === 'Paper')
    ) {
      result = 'You Win!';
      score.wins++;
    } else {
      result = 'You Lose!';
      score.losses++;
    }

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = 
   `You guessed <img src="images/${playerMove.toLowerCase ()}-emoji.png" class="result-image"> & Bot played <img src="images/${compMove.toLowerCase()}-emoji.png" class="result-image">`;


    localStorage.setItem('score', JSON.stringify(score));
    updatescore();
  }
}

function pickcompmove() {
  const rand = Math.random();
  if (rand < 1 / 3) return 'Rock';
  if (rand < 2 / 3) return 'Paper';
  return 'Scissor';
}

function updatescore() {
  document.querySelector('.js-score').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateGuessScore() {
  document.querySelector('.js-score').innerHTML =
    `Correct: ${guessScore.correct}, Wrong: ${guessScore.wrong}`;
}

//toggle mode function

function toggleMode() {

  if (currentMode === 'play') {
    currentMode = 'guess';
    document.querySelector('.js-mode-status').innerText = 'Mode: Guess the Bot';
    document.querySelector('.mode-toggle').classList.add('active');

  } else {
    currentMode = 'play';
    document.querySelector('.js-mode-status').innerText = 'Mode: Play Against Bot';
    document.querySelector('.mode-toggle').classList.remove('active');

  }

  // Reset result and moves when switching
  document.querySelector('.js-result').innerText = '';
  document.querySelector('.js-moves').innerText = '';

  if (currentMode === 'guess') {
    updateGuessScore();
  } else {
    updatescore();
  }
}

//reset score function
function resetCurrentScore() {
  if (currentMode === 'guess') {
    guessScore.correct = 0;
    guessScore.wrong = 0;
    updateGuessScore();
  } else {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updatescore();
  }

  document.querySelector('.js-result').innerText = '';
  document.querySelector('.js-moves').innerText = '';
}
