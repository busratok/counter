const show = document.getElementById("number");
const down = document.getElementById("down");
const reset = document.getElementById("reset");
const up = document.getElementById("up");

let number = 0;
const bgColor = (num) => {
  if (num === 0) {
    show.style.color = "#403d39";
  } else if (num > 0) {
    show.style.color = "#9a031e";
  } else {
    show.style.color = "#2a9d8f";
  }
};

down.addEventListener("click", () => {
  show.innerText = `${--number}`;
  bgColor(number);
});
reset.addEventListener("click", () => {
  number = 0;
  show.innerHTML = number;
  bgColor(number);
});
up.addEventListener("click", () => {
  show.innerHTML = `${++number}`;
  bgColor(number);
});
