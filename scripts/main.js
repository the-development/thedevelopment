$(document).ready(function() {
  $('#posts-carousel').slick({
    dots: false,
    infinite: true,
    arrows: false,
    placeholders: true,
    speed: 300,
    slidesToShow: 1,
    touchMove: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  });
});
