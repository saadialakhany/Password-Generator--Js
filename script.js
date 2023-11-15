"strict mode";

const generateBtn = document.querySelector(".btn--generate");
const inputContainer = document.querySelector(".inputs");

function generatePassword() {
  const length = 16;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  const passwordDisplay = document.querySelector(".password-field");
  passwordDisplay.value = password;
}

function copyPassword(event) {
  const passwordField = event.target
    .closest(".inputs")
    .querySelector(".password-field");

  const passwordValue = passwordField.value;

  passwordField.select();
  // Execute the copy command
  document.execCommand("copy");
}

generateBtn.addEventListener("click", generatePassword);

inputContainer.addEventListener("click", function (e) {
  e.preventDefault();
  copyPassword(e);
});
