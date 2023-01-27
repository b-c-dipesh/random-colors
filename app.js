const letters = document.querySelectorAll('.letter');

const getRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return `rgb(${r}, ${g}, ${b})`;
};

const intervalID = setInterval(() => {
	for (letter of letters) {
		letter.style.color = getRandomColor();
	}
}, 1000);
