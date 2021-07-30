const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const ul = document.querySelector("ul");
const imgWidth = document.querySelectorAll("img")[0].clientWidth;
const maxWidth = document.querySelectorAll("img").length * imgWidth;
console.log("imgWidth", imgWidth);
console.log("maxWidth", maxWidth);

let position = 0;

prevButton.addEventListener("click", (event) => {
  if (event.ctrlKey) {
    let newPosition = position + 2 * -imgWidth;
    console.log(newPosition);
    if (newPosition < 0 && newPosition > 2 * -imgWidth) {
      newPosition = position + -imgWidth;
    }
    if (newPosition <= 2 * -imgWidth) {
      return null;
    }
    position = newPosition;
    ul.style.transform = `translateX(${-position}px)`;
  } else {
    let newPosition = position + 1 * -imgWidth;
    console.log(newPosition);
    if (newPosition < 0) {
      return null;
    }

    position = newPosition;
    ul.style.transform = `translateX(${-position}px)`;
  }
});

prevButton.addEventListener("mousedown", (event) => {
  if (event.which == 2) {
    event.preventDefault();

    let newPosition = 0;

    console.log(newPosition);

    position = newPosition;
    ul.style.transform = `translateX(${position}px)`;
  }
});

nextButton.addEventListener("click", (event) => {
  if (event.ctrlKey) {
    let newPosition = position + 2 * imgWidth;
    console.log(newPosition);
    if (newPosition > maxWidth - 2 * imgWidth) {
      return null;
    }
    // 3 pictures are displayed in ul
    if (newPosition > maxWidth - 3 * imgWidth) {
      newPosition = position + 1 * imgWidth;
    }

    position = newPosition;
    ul.style.transform = `translateX(${-position}px)`;
  } else {
    let newPosition = position + 1 * imgWidth;
    console.log(newPosition);
    // 3 pictures are displayed in ul
    if (newPosition > maxWidth - 3 * imgWidth) {
      return null;
    }

    position = newPosition;
    ul.style.transform = `translateX(${-position}px)`;
  }
});

nextButton.addEventListener("mousedown", (event) => {
  if (event.which == 2) {
    event.preventDefault();

    // 3 pictures are displayed in ul
    let newPosition = maxWidth - 3 * imgWidth;
    console.log(newPosition);

    position = newPosition;
    ul.style.transform = `translateX(${-position}px)`;
  }
});
