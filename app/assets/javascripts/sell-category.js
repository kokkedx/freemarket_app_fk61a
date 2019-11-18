$(function(){
  
  var add_box = $(".buid-js");
  var add_del = $(".items-sell__delivery__right__burden");

  function appendSelect(childNum){
    if(childNum == 1){
      var select_id = `child-form`
      var select_class = `child-frame`
    } else if(childNum == 2) {
      var select_id = `granchild-form`
      var select_class = `granchild-frame`
    } 
    var html = `
      </label><div class="sell-content__select-wrap ${select_class}">
      <i class="fa fa-angle-down icon"></i>
      <select class="select-default" name="item[state_id]" id="${select_id}"><option value="">--</option>
      </select>`
    add_box.append(html)
  }
  
  

  function appendCat(catOption,catNum){
    if(catNum == 1) {
      var appendId = $("#child-form")
    } else if (catNum == 2){
      var appendId = $("#granchild-form")
    } 
    appendId.append(
      $("<option>")
        .val($(catOption).attr('id'))
        .text($(catOption).attr('name'))
    )
  }
//親カテゴリ選択時のアクション
  $("#parent-form").on("change",function(){
    l_cat = $(this).val()
    $("#child-form,#granchild-form,.child-frame,.granchild-frame").remove()

    $.ajax({
      url: '/items/search',
      type: "GET",
      data: {l_cat: l_cat},
      dataType: 'json'
    })
    
    .done(function(child){
      var childNum = 1
      appendSelect(childNum)
      child.forEach(function(child){
        appendCat(child,childNum)
      })
    })
    // .else 
    // alert("画像ファイルを指定してください。");
  })

  $(document).on('change', "#child-form", function() {
    m_cat = $(this).val()
    $("#granchild-form,.granchild-frame").remove()

    $.ajax({
      url: '/items/search',
      type: "GET",
      data: {m_cat: m_cat},
      dataType: 'json'
    })

    .done(function(granchild) {
      var childNum = 2
      appendSelect(childNum)
      granchild.forEach(function(granchild) {
        appendCat(granchild, childNum)
      })
    })
  })

  

});