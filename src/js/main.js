const SHOWING__CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
function slide() {
	const currentSilde = document.querySelector(`.${SHOWING__CLASS}`);
	if (currentSilde) {
		currentSilde.classList.remove(SHOWING__CLASS);
		const nextSlide = currentSilde.nextElementSibling;
		if (nextSlide) {
			nextSlide.classList.add(SHOWING__CLASS);
		} else {
			firstSlide.classList.add(SHOWING__CLASS);
		}
	} else {
		firstSlide.classList.add(SHOWING__CLASS);
	}
}

slide();
setInterval(slide, 2000);

const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
	type: "doughnut",
	options: {
		responsive: false,
		plugins: {
			title: {
				display: true,
				text: "지난 주 입양 통계",
				padding: {
					// top: 10,
				},
			},
		},
	},
	data: {
		labels: ["강아지", "고양이", "그 외"],
		datasets: [
			{
				label: "My First Dataset",
				data: [11, 2, 1],
				backgroundColor: ["#ecbb7f", "#a48772", "#a47272"],
				hoverOffset: 4,
			},
		],
	},
});
