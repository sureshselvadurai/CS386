window.addEventListener("load",fLoopDOM);
function fLoopDOM(){
    let b = document.body;
    let len = b.childNodes.length;
    for(let i =0; i < b.childNodes.length;i++){
        console.log(i+ " : "+b.childNodes[i].nodeName);
    }
}


function fLoopDOM1(){
    let b = document.body;
    let len = b.childNodes.length;
    for(let i =0; i < b.children.length;i++){
        console.log(i+ " : "+b.children[i].tagName);
    }
}
