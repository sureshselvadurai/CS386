//register the event resize on the window
window.addEventListener("resize", function () {
    let width = window.innerWidth
    var card =  document.querySelector('.col:first-child .card');
    var cardWidth = card.offsetWidth;

//    The event handler shows the window.innerWidth property in the console
    console.log("Window Width: " + width );
    console.log("Card Width: " + cardWidth );
});
