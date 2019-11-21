// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(function() {

  $(".image-for").slick({
    dots: true,
    slidesToShow: 1,

    customPaging: function(slider, i) {
      let thumbSrc = $(slider.$slides[i]).find('img').attr('src');
      return '<img src="' + thumbSrc + '">';
    }
  });

  $(".image-for").on("mouseover", ".slick-dots > li", function() {
    $(this).click();
  });
});