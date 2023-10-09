window.addEventListener("load",fSelCells);

function fSelCells() {
    console.log(`Table`)
    let table = document.getElementsByTagName("table")[0]
    let tds =      table.getElementsByTagName("td")
    for(let i=0;i<tds.length;i++){
        console.log(`Cell Value : ${tds[i].innerHTML}`)
    }
}
