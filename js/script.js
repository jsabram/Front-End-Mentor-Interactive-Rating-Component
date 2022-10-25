const pageOne = document.querySelector('.rating-card--one');
const pageTwo = document.querySelector('.rating-card--two');
const scores = document.querySelectorAll('.rating-card__score-grade');
const btn = document.querySelector('.rating-card__btn');
const error = document.querySelector('.error');
const selectedScore = document.querySelector('.selected-score');

const switchPages = () => {
	pageOne.style.display = 'none';
	pageTwo.style.display = 'flex';
};

const handleActions = () => {
	scores.forEach((score) => {
		if (score.classList.contains('grade-active')) {
			error.style.visibility = 'hidden';
			switchPages();
		} else {
			error.style.visibility = 'visible';
		}
	});
};

scores.forEach((score, index) => {
	score.addEventListener('click', () => {
		scores.forEach((score) => score.classList.remove('grade-active'));
		for (let i = 0; i <= index; i++) {
			scores[i].classList.add('grade-active');
		}
		selectedScore.textContent = score.innerHTML;
	});
});

btn.addEventListener('click', handleActions);
