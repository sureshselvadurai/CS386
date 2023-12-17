// script.js

document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname;
    var links = document.querySelectorAll('.navbar-center a');
    links.forEach(function (link) {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        }
    });
});