// $(".sell-content__input-default").on("keyup", function() {
//   let writeText = '';

//   $(".input-default").map(function (index, element) {
//   let val = $(this).val();
//     if(val){
//       writeText += val;
//     }
//   });

//   $(".input-default").text(writeText);
// });

$(function(){
  $.js = function(el){
    return $('[data-js=' + el + ']')
  };
  

  $.js('price-imput').on('keyup', function() {
    let price = $(this).val();
    let tesuryo = price / 10;
    let goukei = price - tesuryo;
    $.js('tesuryo')[0].innerHTML = tesuryo;
    $.js('goukei')[0].innerHTML = goukei

    $.js('price-input').each(function(){
      addAuto($(this));
    });

    function addAuto(input){
      let arry = input.$(this).val();
      arry = $(this).split(',');
      arry = arry[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      $.js('tesuryo')[0].innerHTML = tesuryo.arry;
      $.js('goukei')[0].innerHTML = goukei.arry
    }
  });

})