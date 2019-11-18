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
    let tesuryo = Math.floor(price / 10);
    let goukei = price - tesuryo;

    $.js('tesuryo')[0].innerHTML = tesuryo;
    $.js('goukei')[0].innerHTML = goukei
  });
})