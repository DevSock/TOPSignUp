const form = document.getElementById("form");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const pwMismatch = document.getElementById("pw-mismatch");

form.addEventListener("submit", function (event) {
  console.log(event);
  console.log(`pw1: ${password.value} pw2: ${passwordConfirm.value}`);

  if (password.value !== passwordConfirm.value) {
    event.preventDefault();
    pwMismatch.hidden = false;
    password.style.borderColor = "#f00";
    passwordConfirm.style.borderColor = "#f00";
  }
});
