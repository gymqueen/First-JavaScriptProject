// Getting all the HTML elements
let computerNumber = 0;
let playButton = document.getElementById('play-button');
let resetButton = document.querySelector('.button-reset');
let userInput = document.querySelector('#user-input');
let resultAreaImg = document.querySelector('.main-img');
let resultText = document.querySelector('.result-text');
let chanceArea = document.getElementById('chance-area');
let gameOver = false;
let chances = 10;
let userValueList = []; // List of numbers user entered.

chanceArea.innerHTML = `You have: ${chances} times left.`;
playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', focusInput);

function pickRandomNumber() {
  //Getting random number
  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log('Answer: ', computerNumber);
}

function play() {
  // Guessing number
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = 'Please enter a number between 1 and 100.';

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent =
      'This number has already been entered. Please enter a different number.';

    return;
  }

  chances--;
  chanceArea.innerHTML = `You have: ${chances} time(s) left.`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      'https://media3.giphy.com/media/3625U4ote7MTAaGi9n/giphy.gif?cid=ecf05e474sbwv01o3pyey532y2o8uh3f59nxe32d1fr10xlb&rid=giphy.gif&ct=g';
    resultText.textContent = 'Up!';
  } else if (userValue > computerNumber) {
    resultAreaImg.src =
      'https://media3.giphy.com/media/LkuPxRS0F6gmc/giphy.gif?cid=ecf05e4702xfm2boukfuxhb1iqtsyib7frt4nskccceebn3s&rid=giphy.gif&ct=g';
    resultText.textContent = 'Down!';
  } else {
    resultAreaImg.src =
      'https://media1.giphy.com/media/JpwTIaQlTw7jwQCqRN/giphy.gif?cid=ecf05e47io2163rpxoolhzgtvzsa0hest89mp1nkh4zcd6g4&rid=giphy.gif&ct=g';
    resultText.textContent = 'Correct!';
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = '';
}

function reset() {
  pickRandomNumber();
  userInput.value = '';
  resultAreaImg.src =
    'https://media3.giphy.com/media/VL48WGMDjD64umCEkv/giphy.gif?cid=ecf05e47oua4pnipry93f3txzda33bct9ephltn4iyuvtfie&rid=giphy.gif&ct=g';
  resultText.textContent = 'Guess?';
  gameOver = false;
  playButton.disabled = false;
  chances = 10;
  chanceArea.innerHTML = `You have: ${chances} time(s) left.`;
  userValueList = [];
}

pickRandomNumber();
