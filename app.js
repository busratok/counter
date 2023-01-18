const show = document.getElementById("number");
const buttons = document.querySelector(".buttons");

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

buttons.addEventListener("click", (e) => {
  if (e.target.id === "down") {
    show.innerText = `${--number}`;
    bgColor(number);
  } else if (e.target.id === "reset") {
    number = 0;
    show.innerHTML = number;
    bgColor(number);
  } else if (e.target.id === "up") {
    show.innerHTML = `${++number}`;
    bgColor(number);
  }
});
