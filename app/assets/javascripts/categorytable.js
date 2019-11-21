$(function(){
  function buildHTML1(res){
    let html1 = res.map(function(data){return `<li class="child-menu" data-category="${data.id}"><a href="/categories/${data.id}"><div class="child">${data.name}</div></a></li>`});
    return html1
  }
  function buildHTML2(res){
    let html2 = res.map(function(data){return `<li data-category="${data.id}"><a  class="grandchild-menu" href="/categories/${data.id}">${data.name}</a></li>`});
    return html2
  }

  $(".category-menu").on("mouseover",function(){
    $(".category-menus").css({display: 'flex'});
  }).on("mouseout",function(){
    if($(".child-list")[0]){
    }else{
    $(".category-menus").hide();
    $(".child-list").hide()
    }
  })

  $(".parent-list").on("mouseover",function(){
    let category = $(this).data("category")
    if ($(".grandchild-list")[0]){
      $(".grandchild-list").remove()
    }

    $.ajax({
      url: "/items/show_children",
      method: "POST",
      data: {category: category},
      dataType:"json"
    })
    .done(function(res){
      if ($(".child-list")[0]){
        $(".child-list").show()
        $(".child-list").empty()
      }
      else{
        $(".category-menus").append("<ul class='child-list'></ul>")
        $(".child-list").show();
      };
      html = buildHTML1(res);
      $(".child-list").append(html);

      $(".child-menu").on("mouseover",function(){
        let child = $(this).data("category");
        $.ajax({
          url: "/items/show_grandchildren",
          method: "POST",
          data: {category: child},
          dataType:"json"
        })
        .done(function(res){
          if ($(".grandchild-list")[0]){
            $(".grandchild-list").show()
            $(".grandchild-list").empty()
          }
          else{
            $(".category-menus").append("<ul class='grandchild-list'></ul>")
            $(".grandchild-list").show();
          };
          html2 = buildHTML2(res);
          $(".grandchild-list").append(html2);
        })
        .fail(function(){
          console.log("grandchildren-failed");
        });
      });
    })
    .fail(function(){
      console.log("failed")
    })
  })


})