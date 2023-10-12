window.addEventListener("load",fCSS)


function fCSS(){
    let p = document.getElementsByTagName("p")[0]
    console.log("looped")
    p.style.fontSize = "18pt"
    let style = "color:blue;background-color:lightgray"
    let p1 = document.getElementsByTagName("h1")[0]
    p1.setAttribute("style",style)


}