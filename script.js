'use strict';

const rangeNum = 20;
const number = Math.trunc(Math.random() * rangeNum) + 1;
let score = 20;
document.querySelector('.range').textContent = `1 - ${rangeNum}`;

document.querySelector('.check').addEventListener('click', function () {
	const guess = +document.querySelector('.guess').value;
	document.querySelector('.message').textContent = checkGuess(guess);
	if (score >= 1 && guess === number) {
		if (document.querySelector('.highscore').textContent < score)
			document.querySelector('.highscore').textContent = score;
		document.querySelector('.number').textContent = number;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
	} else if (score > 1) {
		changeScore(score - 1);
	} else {
		changeScore(0);
		document.querySelector('.message').textContent = 'You lost a game!';
	}
});

document.querySelector('.again').addEventListener('click', function () {
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	changeScore(20);
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
