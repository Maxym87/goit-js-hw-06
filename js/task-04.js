let counterValue = 0;

const counter = document.getElementById("value");

const decrButtonEl = document.querySelector('button[data-action="decrement"]');
const incrButtonEl = document.querySelector('button[data-action="increment"]');

decrButtonEl.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
incrButtonEl.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
