const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");

let active = 0;
const total = items.length;
let timer;

function update(direction) {
  items[active].classList.remove("active");
  dots[active].classList.remove("active");

  if (direction > 0) {
    active = active + 1;
    if (active === total) {
      active = 0;
    }
  } else if (direction < 0) {
    active = active - 1;
    if (active < 0) {
      active = total - 1;
    }
  }

  items[active].classList.add("active");
  dots[active].classList.add("active");

  numberIndicator.textContent = (active + 1).toString().padStart(2, "0");
}

prevButton.addEventListener("click", () => {
  clearInterval(timer);
  update(-1);
  startTimer();
});

nextButton.addEventListener("click", () => {
  clearInterval(timer);
  update(1);
  startTimer();
});

function startTimer() {
  timer = setInterval(() => {
    update(1);
  }, 5000);
}

numberIndicator.textContent = (active + 1).toString().padStart(2, "0");
