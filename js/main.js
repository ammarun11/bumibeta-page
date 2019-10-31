// for sidenvav mobile

const elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems);

const slide = document.querySelectorAll('.slider');
M.Slider.init(slide, {
    indicators: false,
    height: 900,
    duration: 198,
    interval: 6000
});

const paralax = document.querySelectorAll('.parallax');
M.Parallax.init(paralax);

const produk = document.querySelectorAll('.carousel');
M.Carousel.init(produk, {
    // fullWidth: true,
    padding: 200,

})

$(".dropdown-trigger").dropdown();

$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffset: 90,
    });
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
});