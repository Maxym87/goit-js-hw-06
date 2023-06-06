const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", hundleSubmit);

function hundleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Усі поля мають бути заповнені");
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);
  event.currentTarget.reset();
}
