window.addEventListener("load",function(){
    let btnProp = document.getElementById("btnProp");
    let btnAddEvt = document.getElementById("btnAddEvt");
    btnProp.onclick = fProp;
    btnProp.onclick = fAddEvt;

    function fProp(){}{
    alert("Registered")
    }
        function fAddEvt(){}{
        alert("Raised")
        }

})