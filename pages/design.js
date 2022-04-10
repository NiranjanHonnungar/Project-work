const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const maxSlide = slides.length;
  const slider = document.querySelector(".slider");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
  let curSlide = 0;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
      console.log("dot");
    });
  };
  createDots();
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
    activateDot(slide);
  };
  goToSlide(0);
  const nextSlide = function () {
    if (curSlide == maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide == 0) curSlide = maxSlide - 1;
    else curSlide--;
    goToSlide(curSlide);
  };
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    else if (e.key == "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
    }
  });
};
slider();
