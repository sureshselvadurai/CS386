document.addEventListener('DOMContentLoaded', fLoad);

function fLoad() {
    const sendButton = document.getElementById('btnSend');
    sendButton.addEventListener('click', fAJAX);
}

function fAJAX() {

//    console.log("fAJAX Function")
    const textarea = document.getElementById('resultTextarea');
    textarea.value = '';

    const selectedCategory = document.getElementById('ddlCategory').value;
    const url = `https://v2.jokeapi.dev/jok/${selectedCategory}?safe-mode&type=single`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const joke = response.joke;
            textarea.value = joke;
        } else {
            console.error(`Error ${xhr.status} ${xhr.statusText}`);
        }
    });
    xhr.send();
}
