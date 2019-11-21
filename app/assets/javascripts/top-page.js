$(function () {

  //ブランドメニュー
  $(".brands-menu").on("mouseover", function() {
    $(".brand-menu").show();
    $(".header-brands").css({"color": "#0099FF"});
  });
  $(".brands-menu").on("mouseout", function() {
    $(".brand-menu").hide();
    $(".header-brands").css({"color": "black"});
  });
  //いいね一覧
  $(".like-list").on("mouseover", function() {
    $(".like-list").css({"color": "#0099FF"});
  });
  $(".like-list").on("mouseout", function() {
    $(".like-list").css({"color": "black"});
  });
  //お知らせメニュー
  $(".notice-menu").on("mouseover", function() {
    $(".news-box").show();
    $(".notice-menu").css({"color": "#0099FF"});
  });
  $(".notice-menu").on("mouseout", function() {
    $(".news-box").hide();
    $(".notice-menu").css({"color": "black"});
  });
  //やることリスト
  $(".to-do-menu").on("mouseover", function() {
    $(".doing-list").show();
    $(".to-do-menu").css({"color": "#0099FF"});
  });
  $(".to-do-menu").on("mouseout", function() {
    $(".doing-list").hide();
    $(".to-do-menu").css({"color": "black"});
  });
  //マイページ
  $(".mypage-list").on("mouseover", function() {
    $(".top-mypage").show();
    $(".mypage-list").css({"color": "#0099FF"});
  });
  $(".mypage-list").on("mouseout", function() {
    $(".top-mypage").hide();
    $(".mypage-list").css({"color": "black"});
  });

});