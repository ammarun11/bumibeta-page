// for sidenvav mobile

const elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems);

const slide = document.querySelectorAll('.slider');
M.Slider.init(slide, {
    indicators: false,
    height: 800,
    duration: 900,
    interval: 5000
});

const paralax = document.querySelectorAll('.parallax');
M.Parallax.init(paralax);

const produk = document.querySelectorAll('.carousel');
M.Carousel.init(produk)

$(".dropdown-trigger").dropdown();

$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffset: 90,
    });
});