$(function(){
    $("p").css("width","50%").css("border","1px solid black")
    let pFontSize = window.getComputedStyle(document.getElementsByTagName("p")[0]).fontSize;
    $("p").click(fclick).hover(fIn,fOut);

    function fclick(){
        $(this).css("background-color","red")
    }
    function fIn(evt){
    $(this).css("fontSize","18pt")
    console.log(`Click position x: ${evt.screenX} y:${evt.screenY}`)
    }
        function fOut(evt){
        $(this).css("fontSize",pFontSize)
        console.log(`Click position x: ${evt.screenX} y:${evt.screenY}`)
        }

})