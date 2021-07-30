import { cars } from "./cars.js";

console.log(cars);
console.log(cars[1].specifications[0]);

document.querySelector(".prevBtn").addEventListener("click", () => {
  changeSlides(-1);
});
document.querySelector(".nextBtn").addEventListener("click", () => {
  changeSlides(1);
});

var slideIndex = 0;
var images = [];
var description = [];
var titles = [];
var summaries = [];
var prices = [];
var specifications = [];
var lines = [];
var paymentButton = [];
var background = [];

var body = document.getElementsByTagName("body")[0];
var sliderImages = document.querySelector(".slider-images");
var sliderDescription = document.querySelector(".slider-description");
var footer = document.querySelector(".footer-specifications");
var navLines = document.querySelector(".navLines");

for (let i = 0; i < cars.length; i++) {
  images[i] = document.createElement("div");
  description[i] = document.createElement("div");
  titles[i] = document.createElement("div");
  summaries[i] = document.createElement("div");
  prices[i] = document.createElement("p");
  specifications[i] = document.createElement("div");
  lines[i] = document.createElement("span");
  paymentButton[i] = document.createElement("button");
  background[i] = document.createElement("div");

  images[i].className = "slider-image";
  titles[i].className += "slider-title";
  summaries[i].className += "slider-summary";
  prices[i].className += "slider-price";
  lines[i].className += "navLine";
  paymentButton[i].className += "payment-button";
  description[i].className += "initial-description";
  background[i].className += "colored-body";

  sliderImages.append(images[i]);
  sliderDescription.append(description[i]);
  description[i].append(titles[i]);
  description[i].append(summaries[i]);
  description[i].append(prices[i]);
  footer.append(specifications[i]);
  navLines.append(lines[i]);
  description[i].append(paymentButton[i]);
  body.prepend(background[i]);
}

showSlides(slideIndex);

function changeSlides(n) {
  hideSlide();
  setTimeout(() => {
    showSlides((slideIndex += n));
  }, 2000);
}

function showSlides(n) {
  for (let i = 0; i < cars.length; i++) {
    images[i].innerHTML = `<img src= ./images/${cars[i].image} >`;
    titles[i].innerHTML = `<h1> ${cars[i].title}</h1>`;
    summaries[i].innerHTML = `<p> ${cars[i].summary}</p>`;
    prices[i].innerHTML = cars[i].price;
    specifications[i].innerHTML =
      `<p> ${cars[i].specifications[0]} </p>` +
      `<p> ${cars[i].specifications[1]} </p>` +
      `<p> ${cars[i].specifications[2]} </p>`;
    paymentButton[i].innerHTML = "پرداخت";

    images[i].style.display = "none";
    titles[i].style.display = "none";
    summaries[i].style.display = "none";
    prices[i].style.display = "none";
    specifications[i].style.display = "none";
    paymentButton[i].style.display = "none";
    description[i].style.display = "none";

    lines[i].className = lines[i].className.replace(" selected", "");
    lines[i].className = lines[i].className.replace(" line-animate", "");

    images[i].className = images[i].className.replace(" car-animate", " ");

    specifications[i].className = specifications[i].className.replace(
      " specification-animate",
      ""
    );
    images[i].classList.remove("car-animate-remove");
    description[i].classList.remove("description-remove");
    specifications[i].classList.remove("specification-animate-remove");
  }

  if (n >= cars.length) {
    slideIndex = 5;
    document.querySelector(".nextBtn").disabled = true;
  }

  if (n < 1 || n == 1) {
    slideIndex = 1;
    document.querySelector(".prevBtn").disabled = true;
  }
  if (n > 1 && n < cars.length) {
    slideIndex = n;
    document.querySelector(".prevBtn").disabled = false;
    document.querySelector(".nextBtn").disabled = false;

  }

  var hideImage = images[slideIndex - 1];
  var hideDescription = description[slideIndex - 1];
  var hideSpecify = specifications[slideIndex - 1];

  images[slideIndex - 1].style.display = "block";
  images[slideIndex - 1].className += " car-animate";

  titles[slideIndex - 1].style.display = "block";
  summaries[slideIndex - 1].style.display = "block";
  prices[slideIndex - 1].style.display = "block";
  specifications[slideIndex - 1].style.display = "flex";
  specifications[slideIndex - 1].className += " specification-animate";
  description[slideIndex - 1].style.display = "block";
  description[slideIndex - 1].className += " description";
  lines[slideIndex - 1].className += " selected";
  if (slideIndex != 1) {
    lines[slideIndex - 1].className += " line-animate";
  }
  paymentButton[slideIndex - 1].style.display = "inline-block";
  body.style.setProperty("--backgroundColor", `${cars[slideIndex - 1].theme}`);

  return [hideImage, hideDescription, hideSpecify];
}

function hideSlide() {
  let items = showSlides();
  var hideImage = items[0];
  var hideDescription = items[1];
  var hideSpecify = items[2];

  hideImage.className += " car-animate-remove";
  hideDescription.className += " description-remove";
  hideSpecify.className += " specification-animate-remove";

  console.log(hideImage);
}
