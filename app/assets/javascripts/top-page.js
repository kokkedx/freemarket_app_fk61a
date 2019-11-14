$(function () {
  //カテゴリメニュー
  $(".category-menu").on("mouseover", function() {
    $(".category-menus").show();
  });
  $(".category-menu").on("mouseout", function() {
    $(".category-menus").hide();
  });
  //ブランドメニュー
  $(".brands-menu").on("mouseover", function() {
    $(".brand-menu").show();
  });
  $(".brands-menu").on("mouseout", function() {
    $(".brand-menu").hide();
  });
  //お知らせメニュー
  $(".notice-menu").on("mouseover", function() {
    $(".news-box").show();
  });
  $(".notice-menu").on("mouseout", function() {
    $(".news-box").hide();
  });
  //やることリスト
  $(".to-do-menu").on("mouseover", function() {
    $(".doing-list").show();
  });
  $(".to-do-menu").on("mouseout", function() {
    $(".doing-list").hide();
  });
});