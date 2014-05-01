$(document).ready(function() {
  $('#posts-carousel').slick({
    dots: false,
    infinite: false,
    arrows: false,
    placeholders: false,
    speed: 500,
    slidesToShow: 3,
    touchMove: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
