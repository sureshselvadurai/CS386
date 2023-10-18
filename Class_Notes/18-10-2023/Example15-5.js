$(function(){
    $("h2").hover(fHoverIn,fHoverOut)
})

function fHoverIn(){
    $("ul").html("<li>Onion</li> <li>Carrot</li> ")
}
function fHoverOut(){
    $("ul").html("")
}