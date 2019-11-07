// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){
  // html上で「data-js = "hoge"」って書いたら、その要素を $.js('hoge')でDOMに指定できるようにする
  $.js = function(el){
    return $('[data-js=' + el + ']')
  };
  
  // クレカ登録「カード裏面の番号とは？」で参照画面をつけたり消したりする
  $.js('show-tips-toggle').on('click', function() {
    $.js('show-tips-content').toggleClass("is_show");
  });

})