// Add an event listener on the window
window.addEventListener("load",fLoad)

function fLoad(){
    let inputLink = document.getElementById("usf");
    let div = document.getElementById("divMain");
    fHover(inputLink)
    fFadeIn(div)
}

//hover effect
function fHover(elt){

//    alert("Element ID : " + elt.id)

    let fontSize = window.getComputedStyle(elt).fontSize

    elt.addEventListener('mouseover', function () {
        elt.style.fontSize = '24pt';
    });

    elt.addEventListener('mouseout', function () {
        elt.style.fontSize = fontSize;
    });

}

//fade-in effect
function fFadeIn(elt){

//    alert("Element ID : " + elt.id)

    let opValue = 0;
    elt.style.opacity = opValue;

    const timerID = setInterval(function () {
        opValue += 0.01;
        elt.style.opacity = opValue;

        if (opValue > 1) {
          clearInterval(timerID);
        }
    }, 20);
}

