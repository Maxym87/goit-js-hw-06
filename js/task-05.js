const nameInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.target.value;

  if (event.target.value === "") {
    outputEl.textContent = "Anonymous";
  }
});
