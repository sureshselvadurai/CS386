window.addEventListener("load",fCompStyle)


function fCompStyle(){
    let p = document.getElementsByTagName("p")[0]
    p.style.fontSize = "18pt"
    p.style.width = "60%"
    console.log(window.getComputedStyle(p).fontSize)
    console.log(window.getComputedStyle(p).width)



}