$(document).ready(function() {

    let hamberger = document.querySelector('.hamberger');
    let i = document.querySelector('.times');

    let mobileNav = document.querySelector(".mobile-nav")

    hamberger.addEventListener('click', function() {
        mobileNav.classList.add("open")
    });

    i.addEventListener('click', function() {
        mobileNav.classList.remove("open")
    });
});