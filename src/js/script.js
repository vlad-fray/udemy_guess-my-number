'use strict';

let rangeNum = null;
let number = null;
let score = null;
let highscore = 0;
let difficulty = 1;

document
	.querySelector('.difficulty')
	.addEventListener('click', function () {
		if (difficulty < 3) difficulty++;
		document.querySelector(
			'.difficulty-lvl'
		).textContent = `Lvl: ${difficulty}`;
		startGame();
	});

document
	.querySelector('.check')
	.addEventListener('click', function () {
		const guess = +document.querySelector('.guess').value;
		displayMessage(checkGuess(guess));
		if (score >= 1 && guess === number) {
			winGame();
		} else if (score > difficulty) {
			changeScore(score - difficulty);
		} else {
			loseGame();
		}
	});

document
	.querySelector('.again')
	.addEventListener('click', function () {
		startGame();
	});

const checkGuess = (guess) => {
	if (!guess) {
		return 'No number! 🤨';
	} else if (guess === number) {
		return 'Correct number! 🎉';
	} else if (guess < number) {
		return 'Too low!';
	} else if (guess > number) {
		return 'Too high!';
	} else {
		return 'Something went wrong!';
	}
};

const changeScore = (num) => {
	score = num;
	document.querySelector('.score').textContent = score;
};

const changeHighscore = (num) => {
	if (document.querySelector('.highscore').textContent < num) {
		document.querySelector('.highscore').textContent = num;
		highscore = num;
	}
};

const changeNumber = (num, width) => {
	document.querySelector('.number').style.width = width;
	document.querySelector('.number').textContent = num;
};

const toggleCheckAccess = (isDisabled) => {
	document.querySelector('.check').disabled = isDisabled;
};

const displayMessage = (message) => {
	document.querySelector('.message').textContent = message;
};

const changeRange = (num) => {
	rangeNum = num;
	document.querySelector('.range').textContent = `1 - ${rangeNum}`;
	number = Math.trunc(Math.random() * rangeNum) + 1;
};

const winGame = () => {
	changeHighscore(score);
	changeNumber(number, '20rem');
	toggleCheckAccess(true);
	document.querySelector('body').style.backgroundColor = '#60b347';
};

const loseGame = () => {
	changeScore(0);
	toggleCheckAccess(true);
	displayMessage('You lost a game!');
};

const startGame = () => {
	changeRange(20 + 10 * (difficulty - 1));
	score = 20;
	displayMessage('Start guessing...');
	document.querySelector('body').style.backgroundColor = '#222';
	changeNumber('?', '10rem');
	document.querySelector('.guess').value = '';
	changeScore(20);
	toggleCheckAccess(false);
};

startGame();
