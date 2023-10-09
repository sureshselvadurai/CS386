// Event listener for form submission
window.addEventListener("submit", fSubmit);

function fSubmit() {
    fRadioButtons();
    fTextInputs();
}

function fRadioButtons() {
    // alert(`fRadioButtons`);
    let childElements = document.getElementsByTagName("form")[0].childNodes;

    for (let i = 0, len = childElements.length; i < len; i++) {
        let child = childElements[i];
        if (child.name == "gender" && child.checked) {
            alert('Gender value selected: ' + child.value);
        }
    }
}

function fTextInputs() {
    // alert(`fTextInputs`);
    let fullName = "";
    let textInputs = document.querySelectorAll('input[type="text"]');

    for (let i = 0, len = textInputs.length; i < len; i++) {
        fullName += textInputs[i].value + ' ';
    }

    alert('Full Name: ' + fullName.trim());
}
