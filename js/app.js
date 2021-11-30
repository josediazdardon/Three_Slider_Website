let init = () => {
	let container = document.getElementsByClassName(
			"jumbo-slider__container"
		)[0],
		slides = document.getElementsByClassName("jumbo-slider__slide"),
		circles = document.getElementsByClassName("jumbo-slider__circle"),
		links = document.getElementsByClassName("jumbo-slider__link"),
		current = 1,
		time = 6000;

	//adds animation class to active
	slides[0].classList.add("jumbo-slider__slide--active");

	links[current - 1].classList.add("jumbo-slider__link--active");

	circles[current - 1].classList.add("jumbo-slider__circles-filled");

	//navigation update links function

	let updateNav = (current) => {
		console.log(`update current: ${current}`);
		//adds one to current and stops when it is false
		for (let index = 0; index < slides.length; index++) {
			links[index].classList.remove("jumbo-slider__link--active");
			circles[index].classList.remove("jumbo-slider__circle--filled");
		}
		links[current - 1].classList.add("jumbo-slider__link--active");
		circles[current - 1].classList.add("jumbo-slider__circle--filled");
	};
	let startSliding = () => {
		//infinit loop function

		setInterval(() => {
			//console.log(`current: ${current}`);
			// remove active class from first and add to second slide
			//so it can become the first ide with class activated
			slides[1].classList.add("jumbo-slider__slide--active");
			slides[0].classList.remove("jumbo-slider__slide--active");
			//goes through slides array from slides let declaration
			// by current++ adds to the current
			if (current < slides.length) {
				current++;
				//updateNav(current);
			} else {
				current = 1;
			}
			//clone the first slide and place it on the last space
			container.appendChild(slides[0].cloneNode([true]));
			//remove the first slide after it has been cloned
			container.removeChild(slides[0]);
		}, time);
	};
	//check min 36 s2 part 1 for break down of javascript
	startSliding();
};
init();
