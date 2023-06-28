$(document).ready(function () {
  $(".banner-slider-wrapper ").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: "<span class='icon-arrow-left'></span>",
    nextArrow: "<span class='icon-arrow-right'></span>",
    fade: true,
    cssEase: 'linear',
  });
});
