$(function() {
    $("div > p").css("border","2px solid red")
    $(".sampleList > li > a").click(function(){
        $(this).css("background-color","red")
    })
})