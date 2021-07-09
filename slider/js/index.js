let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;

const container = document.querySelector(".slider__container");
const track = document.querySelector(".slider__track");
const slides = document.querySelectorAll(".slider__slide");
const slidesCount = slides.length;
const prevBtn = document.querySelector(".slider__prev");
const nextBtn = document.querySelector(".slider__next");

const slidesWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * slidesWidth;

nextBtn.addEventListener("click", () => {
  const slidesLeft =
    slidesCount -
    (Math.abs(position) + slidesToShow * slidesWidth) / slidesWidth;

  position -=
    slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slidesWidth;

  setPosition();
  checkBtns();
});

prevBtn.addEventListener("click", () => {
  const slidesLeft = Math.abs(position) / slidesWidth;

  position +=
    slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slidesWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  prevBtn.disabled = position === 0;
  nextBtn.disabled = position <= -(slidesCount - slidesToShow) * slidesWidth;
};

checkBtns();
