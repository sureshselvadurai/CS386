window.setInterval(fDisplay,1000)

function fDisplay(){
    let clock = document.getElementById("clock")
    let dt = new Date()
    clock.innerHTML = dt.toLocaleTimeString();
}