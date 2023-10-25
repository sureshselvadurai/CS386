// Execute the fLoad function
$(function() {
    fLoad();
});

// Function to initialize other functions
function fLoad() {
    fAnimate();

    // Click events
    $("#btn").on("click", fCreateLinks);
    $("#btn").on("click", fAnchorTarget);
}

// Create an animation
function fAnimate() {

    //    console.log(`Animate Function`);
    //alt attribute of the image
    let alt = $("img").attr("alt");

    // animation, and at the end the alert message
    $("img").hide().fadeIn(5000, function() {
        alert(`Alt value : ${alt}`);
    });
}

// Create a list of links
function fCreateLinks() {
    // element with id of linklist, and inside the div element an h1 header with the title: List of Links
    let linkListElement = $('<div id="linkList"><h1>List of Links</h1></div>');

    // Append the linkList to the body
    $("body").append(linkListElement);

    // Clone and append all anchor elements to the linkList div
    $("a").clone().appendTo(linkListElement);

    // Add a horizontal ruler after each anchor link
    $('#linkList a').after('<hr>');
}

// Function to open anchor links in a new tab
function fAnchorTarget() {
    // Set the target attribute of all anchor elements to "_blank"
    $('a').attr('target', '_blank');
}
