const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  if (
    event.target.value.length ===
    Number(validationInput.getAttribute("data-length"))
  ) {
    validationInput.classList.add("valid");

    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");

    validationInput.classList.add("invalid");
  }
});
