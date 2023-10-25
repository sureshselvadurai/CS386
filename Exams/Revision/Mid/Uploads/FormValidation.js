// FormValidation.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("Form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const loginButton = document.getElementById("loginButton");
  const resetButton = document.getElementById("resetButton");

  loginButton.addEventListener("click", function(){fValidate(event,usernameInput,passwordInput)});


  resetButton.addEventListener("click", function(){fReset(usernameInput,usernameError,passwordInput,passwordError)});

});

function fReset(usernameInput,usernameError,passwordInput,passwordError) {
    usernameError.innerHTML = "Validation messages";
    passwordError.innerHTML = "Validation messages";
    usernameInput.style.backgroundColor = "white";
    passwordInput.style.backgroundColor = "white";
    usernameInput.value = "";
    passwordInput.value = "";
  }

function fValidate (event,usernameInput,passwordInput) {

    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let validationFailed = false;

    if (usernameValue.length < 8 || usernameValue.length > 20) {
      usernameError.innerHTML = "Atleast 8 and atmost 20 characters";
      usernameInput.style.backgroundColor = "red";
      validationFailed = true;
    } else {
      usernameError.innerHTML = "Validation messages";
      usernameInput.style.backgroundColor = "white";
    }

    if (passwordValue.length < 8 || passwordValue.length > 20) {
      passwordError.innerHTML = "Atleast 8 and atmost 20 characters";
      passwordInput.style.backgroundColor = "red";
      validationFailed = true;
    } else {
      passwordError.innerHTML = "Validation messages";
      passwordInput.style.backgroundColor = "white";
    }

    if (validationFailed) {
      alert("Form Validation Failed");
      event.preventDefault();
    }
}
