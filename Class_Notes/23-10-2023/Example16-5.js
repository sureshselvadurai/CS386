$(function(){
console.log("check1")
    $("img").css("display","none")
    $("#btn").click(fAnimation)
}
)

function fAnimation(){
    console.log("check")
    $("img").fadeIn(3000,fComplete);

}

function fComplete(){
    $("p").append("Animation Complete")
}