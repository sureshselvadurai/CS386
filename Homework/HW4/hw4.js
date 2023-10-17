window.addEventListener("DOMContentLoaded", fLoad);

function fLoad() {

    let loginButton = document.getElementById("login");
    let resetButton = document.getElementById("reset");

//    Listeners for button
    loginButton.addEventListener("click", fValidation);
    resetButton.addEventListener("click", fReset);

}

//Validate data function
function fValidation() {

    let inputElements = document.querySelectorAll("input[type='text']");

    for (let input of inputElements) {
        if (input.value.length === 0) {
            input.style.background = "red";
        } else {
            input.style.background = "green";
        }
    }
}

//reset fields function
function fReset() {
    let inputElements = document.querySelectorAll("input[type='text']");

    for (const input of inputElements) {
        input.style.background = "";
        input.value = "";
    }
}
