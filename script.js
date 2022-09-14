const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-image");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let counter = 1;

const next = () => {
  if (counter === images.length - 2) {
    counter++;
    carousel.style.transition = "all 1s ease";
    carousel.style.transform = `translateX(-${counter}00%)`;

    setTimeout(() => {
      counter = 1;
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${counter}00%)`;
    }, 999);
    console.log(counter);
    return;
  }
  if (counter < images.length - 2) {
    counter++;
    carousel.style.transition = `all 1s ease`;
    carousel.style.transform = `translateX(-${counter}00%)`;
    console.log(counter);
    return;
  }
};

const prev = () => {
  if (counter > 1) {
    counter--;
    carousel.style.transition = `all 1s ease`;
    carousel.style.transform = `translateX(-${counter}00%)`;
    console.log(counter);
    return;
  }
  if (counter === 1) {
    counter--;
    carousel.style.transition = `all 1s ease`;
    carousel.style.transform = `translateX(-${counter}00%)`;

    setTimeout(() => {
      counter = +(images.length - 2);
      carousel.style.transition = `none`;
      carousel.style.transform = `translateX(-${counter}00%)`;
    }, 999);
    console.log(counter);
    return;
  }
};

right.addEventListener("click", next);

left.addEventListener("click", prev);

setInterval(() => {
  next();
}, 4000);
