const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const carouselSlide = document.querySelectorAll(".carousel__slide");

const addActiveClass = (ele) => ele.classList.add("active");
const removeActiveClass = (ele) => ele.classList.remove("active");

slideCarousel = (slideType) => {
  const carouselHolder = document.querySelector(".carousel__holder");
  const carouselSlideActive = carouselHolder.querySelector(
    ".carousel__slide.active"
  );

  if (!carouselSlideActive) return;

  if (
    slideType === "loop" &&
    carouselHolder.lastElementChild.classList.contains("active")
  ) {
    removeActiveClass(carouselSlideActive);
    addActiveClass(carouselHolder.firstElementChild);

    return;
  }

  if (slideType === "previous") {
    if (carouselHolder.firstElementChild.classList.contains("active")) {
      removeActiveClass(carouselSlideActive);
      addActiveClass(carouselHolder.lastElementChild);

      return;
    }

    removeActiveClass(carouselSlideActive);
    addActiveClass(carouselSlideActive.previousElementSibling);

    return;
  }

  if (
    slideType === "next" &&
    carouselHolder.lastElementChild.classList.contains("active")
  ) {
    removeActiveClass(carouselSlideActive);
    addActiveClass(carouselHolder.firstElementChild);

    return;
  }

  removeActiveClass(carouselSlideActive);
  addActiveClass(carouselSlideActive.nextElementSibling);
};

nextButton.addEventListener("click", () => slideCarousel("next"));
previousButton.addEventListener("click", () => slideCarousel("previous"));

setInterval(() => slideCarousel("loop"), 4000);

