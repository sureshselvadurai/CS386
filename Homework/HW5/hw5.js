$(document).ready(function() {
    $('.delete').click(fDeleteRow);
    $('.delete').mouseover(fMousePointer);
    $('#even, #odd').change(fAlternateRow);
});

//Delete button
function fDeleteRow() {
    //    console.log("fMousePointer Function")
    var tr = $(this).closest('tr');
    tr.fadeOut(2000, function() {
    tr.remove();
    fAlternateRow();
    });
}

//color rows
function fAlternateRow() {
//    console.log("fAlternateRow function")
    $('#tblData tbody tr:even').css('background-color', $('#even').val());
    $('#tblData tbody tr:odd').css('background-color', $('#odd').val());
}

//pointer
function fMousePointer() {
//    console.log("fMousePointer Function")
    $(this).css('cursor', 'pointer');
}