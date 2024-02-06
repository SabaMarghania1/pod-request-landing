const button = document.querySelector("input[type=submit]");
const form = document.querySelector("form");
const error = document.querySelector(".error");

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

function errorMessage(event) {
  event.preventDefault();

  const emailInput = document.querySelector("#email").value;

  const isValid = validateEmail(emailInput);

  if (!isValid) {
    error.textContent = "Please enter a valid email address.";
    error.style.display = "block";
  } else {
    error.textContent = "";
    error.style.display = "none";
    console.log("Email is valid");
  }
}
button.addEventListener("click", errorMessage);
