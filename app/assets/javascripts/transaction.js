$(function(){
  $.js = function(el){
    return $('[data-js=' + el + ']')
  };

  $.js('show-accordion-toggle').on('click', function() {
    $.js('show-accordion-content').slideToggle();
  });


})