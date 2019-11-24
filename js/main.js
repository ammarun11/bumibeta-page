// for sidenvav mobile

const elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems);

const slide = document.querySelectorAll('.slider');
M.Slider.init(slide, {
    indicators: false,
    height: 900,
    duration: 200,
    interval: 6000
});

const paralax = document.querySelectorAll('.parallax');
M.Parallax.init(paralax);

const produk = document.querySelectorAll('.carousel');
M.Carousel.init(produk, {
    // fullWidth: true,
    padding: 200,

})

$(document).ready(function () {
    $(".dropdown-trigger").dropdown({
        inDuration: 300,
        outDuration: 225,
        hover: true, // Activate on hover
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the left of button
    });
});


$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffset: 90,
    });
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
});