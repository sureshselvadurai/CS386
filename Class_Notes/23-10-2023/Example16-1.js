$(function(){
    $("btn").click(fAfterDoc)
})

function fAfterDoc(){
    $("h2").each(function(index,elt){
        console.log(`Inner Element ${index} - ${elt.innerHTML}`)
        elt.replaceWith(`<h3> </h3>`)
    }
    }
}