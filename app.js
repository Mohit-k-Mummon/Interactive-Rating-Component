const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thankyou-container');

const submitBtn = document.querySelector('#submit');
const rateAgainBtn = document.querySelector('#rate-again');

const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.rating-btn');

submitBtn.addEventListener('click', () => {
	thanksContainer.classList.remove('hidden');
	mainContainer.classList.add('hidden');
});

rates.forEach(rate => {
	rate.addEventListener('click', () => {
		rating.innerHTML = rate.innerHTML;
	});
});
