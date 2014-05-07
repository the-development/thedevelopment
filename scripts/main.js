$(document).ready(function() {
  $('#posts-carousel').slick({
    dots: false,
    infinite: true,
    arrows: false,
    placeholders: true,
    speed: 500,
    slidesToShow: 1,
    touchMove: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
