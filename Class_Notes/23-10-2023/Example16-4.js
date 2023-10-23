$(function(){
    $("img").css("click","none")
    $("btn").click(fAnimation)
}
)

function fAnimation(){
    $("img").fadeIn(3000,fComplete);
}

function fComplete(){
    $("p").append("Animation Complete")
}