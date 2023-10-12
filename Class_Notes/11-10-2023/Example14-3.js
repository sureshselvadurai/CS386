window.addEventListener("load",function(){
    document.getElementById("btn").addEventListener("click",fCSSClass)
})

function fCSSClass(){
    let p = document.getElementsByTagName("p")[1]
    p.classList.toggle("emphasize")
}