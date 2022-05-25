const slider = document.getElementById("slider");
const img = document.querySelector(".foreground-img");

slider.addEventListener("input", (e) => {
	const sliderValue = e.target.value;

	img.style.width = `${sliderValue}%`;
});
