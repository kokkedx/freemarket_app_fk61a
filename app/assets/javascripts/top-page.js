$(function () {
  //マウスオーバー、マウスアウト(カテゴリー)
  $(".ladies").on("mouseover", function(){
    $(".ladies").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".ladies").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".mens").on("mouseover", function(){
    $(".mens").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".mens").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".baybes").on("mouseover", function(){
    $(".baybes").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".baybes").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".houses").on("mouseover", function(){
    $(".houses").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".houses").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".books").on("mouseover", function(){
    $(".books").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".books").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".goods").on("mouseover", function(){
    $(".goods").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".goods").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".perfumes").on("mouseover", function(){
    $(".perfumes").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".perfumes").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".elects").on("mouseover", function(){
    $(".elects").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".elects").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".sports").on("mouseover", function(){
    $(".sports").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".sports").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".hands").on("mouseover", function(){
    $(".hands").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".hands").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".tickets").on("mouseover", function(){
    $(".tickets").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".tickets").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".automshine").on("mouseover", function(){
    $(".automashine").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".automashine").css({"background-color": "#FFFFFF", "color": "black"});
  })
  $(".other").on("mouseover", function(){
    $(".other").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".other").css({"background-color": "#FFFFFF", "color": "black"});
  })

  $(".category-mode").on("mouseover", function(){
    $(".category-mode").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".category-mode").css({"background-color": "#FFFFFF", "color": "black"});
  })
  
  //シャネル
  $(".shanels").on("mouseover", function(){
    $(".shanels").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".shanels").css({"background-color": "#FFFFFF", "color": "black"});
  })

  //ナイキ
  $(".naikis").on("mouseover", function(){
    $(".naikis").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".naikis").css({"background-color": "#FFFFFF", "color": "black"});
  })

  //ヴィトン
  $(".vitons").on("mouseover", function(){
    $(".vitons").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".vitons").css({"background-color": "#FFFFFF", "color": "black"});
  })
  //シュプリーム
  $(".suprimes").on("mouseover", function(){
    $(".suprimes").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".suprimes").css({"background-color": "#FFFFFF", "color": "black"});
  })

  //ヴィトン
  $(".adidas").on("mouseover", function(){
    $(".adidas").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".adidas").css({"background-color": "#FFFFFF", "color": "black"});
  })
  //シュプリーム
  $(".brands").on("mouseover", function(){
    $(".brands").css({"background-color": "red", "color": "white"});
  }).on("mouseout",function(){
    $(".brands").css({"background-color": "#FFFFFF", "color": "black"});
  })



  //カテゴリメニュー
  $(".category-menu").on("mouseover", function() {
    $(".category-menus").show();
    $(".header-category").css({"color": "#0099FF"});
  });
  $(".category-menu").on("mouseout", function() {
    $(".category-menus").hide();
    $(".header-category").css({"color": "black"});
  });
  //ブランドメニュー
  $(".brands-menu").on("mouseover", function() {
    $(".brand-menu").show();
    $(".header-brands").css({"color": "#0099FF"});
  });
  $(".brands-menu").on("mouseout", function() {
    $(".brand-menu").hide();
    $(".header-brands").css({"color": "black"});
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