const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-image");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let counter = 1;

const next = () => {
  if (counter === 8) {
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

/*

let sliderWrap = document.querySelector(".slider-wrap");
let slider = document.querySelector(".slider");
let clonesWidth;
let sliderWidth;
let clones = [];
let disabledScroll = false;
let scrollPos;

let items = [...document.querySelectorAll(".slider-item")];
let images = [...document.querySelectorAll(".img-div")];

images.forEach((image, idx) => {
  image.style.backgroundImage = `url('./img/amazon${idx + 1}.jpg')`;
});

items.forEach((item) => {
  let clone = item.cloneNode(true);
  clone.classList.add("clone");
  slider.appendChild(clone);
  clones.push(clone);
});

function getClonesWidth() {
  let width = 0;
  clones.forEach((clone) => {
    width += clone.offsetWidth;
  });
  return width;
}

function getScrolled() {
  return window.scrollY;
}

function getScrollPos(pos) {
  window.scrollTo({ top: pos });
}

function scrollUpdate() {
  scrollPos = getScrollPos();

  if (clonesWidth + scrollPos >= sliderWidth) {
    window.scrollTo({ top: 1 });
  } else if (scrollPos <= 0) {
    window.scrollTo({ top: sliderWidth - clonesWidth - 1 });
  }

  slider.style.transform = `translateX(${-window.scrollY}px)`;

  requestAnimationFrame(scrollUpdate);
}

function onLoad() {
  calculateDimension();

  document.body.style.height = `${sliderWidth}px`;
  window.scrollTo({ top: 1 });
  scrollUpdate();
}

function calculateDimension() {
  sliderWidth = slider.getBoundingClientRect().width;
  clonesWidth = getClonesWidth();
}

onLoad();

*/

/*

<!--
        <div class="card">
          <h4>Summer essentials for car & bike</h4>
          <div class="images">
            <span class="image">
              <img
                src="https://m.media-amazon.com/images/I/41kwH0GpHPL._SR210,210_.jpg"
                alt="car-cover"
                class="span-one"
              />
              <p>Car cover</p>
            </span>
            <span class="image">
              <img
                src="https://m.media-amazon.com/images/I/41vb7+aKV4L._SR210,210_.jpg"
                alt="bike-cover"
                class="span-one"
              />
              <p>Bike cover</p>
            </span>
            <span class="image">
              <img
                src="https://m.media-amazon.com/images/I/41HToieSG2L._SR210,210_.jpg"
                alt="air-freshners"
                class="span-one"
              />
              <p>Air freshners</p>
            </span>
            <span class="image">
              <img
                src="https://m.media-amazon.com/images/I/41VxLFNBQoL._SR210,210_.jpg"
                alt="helmets"
                class="span-one"
              />
              <p>Certified Helmets</p>
            </span>
          </div>
          <a href="/">See more</a>
        </div>
        <div class="card">
          <h4>Up to 70% off | Clearance store</h4>

          <div class="images" id="single-image">
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                alt="off"
                class="span-two"
              />
            </span>
          </div>
          <a href="/">See more</a>
        </div>

        <div class="card">
          <h4>Automotive essentials | Up to 60% off</h4>
          <div class="images">
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
                alt="cleaning-cloth"
                class="span-one"
              />
              <p>Cleaning accessories</p>
            </span>
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
                alt="tyre-care"
                class="span-one"
              />
              <p>Tyre & rim care</p>
            </span>
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
                alt="helmets"
                class="span-one"
              />
              <p>Helmets</p>
            </span>
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
                alt="vaccum-cleaner"
                class="span-one"
              />
              <p>Vaccum cleaner</p>
            </span>
          </div>
          <a href="/">See more</a>
        </div>
        <div class="card">
          <h4>Revamp your home in style</h4>
          <div class="images">
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"
                class="span-one"
              />
              <p>Bedsheets, curtains & more</p>
            </span>
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"
                alt="tyre-care"
                class="span-one"
              />
              <p>Home Decoration</p>
            </span>
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg"
                alt="helmets"
                class="span-one"
              />
              <p>Home Storage</p>
            </span>
            <span class="image">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"
                alt="vaccum-cleaner"
                class="span-one"
              />
              <p>Lighting solutions</p>
            </span>
          </div>
          <a href="/">Explore all</a>
        </div>

      -->

*/
