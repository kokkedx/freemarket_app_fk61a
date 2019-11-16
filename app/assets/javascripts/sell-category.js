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
  
  function afterDeliver(childNum){
    var html = `
    <div class="sell-content__form-group">
      <label class="sell-content__form-group--text" for="item_ship_cost_id">発送の方法
        <span class="sell-content__form-group__status sell-content__form-group__status--require">必須</span>
      </label>
      <div class="sell-content__select-wrap">
        <i class="fa fa-angle-down icon"></i>
        <select class="select-default" name="item[ship_cost_id]" id="item_ship_cost_id">
          <option value="1">--</option>
          <option value="2">未定</option>
          <option value="5">クロネコヤマト</option>
          <option value="6">ゆうパック</option>
          <option value="7">ゆうメール</option>
        </select>
      </div>
    </div>
    `
    add_del.after(html)
  }

  function afterMethod(childNum){
    var html = `
    <div class="sell-content__form-group">
      <label class="sell-content__form-group--text" for="item_ship_cost_id">発送の方法
        <span class="sell-content__form-group__status sell-content__form-group__status--require">必須</span>
      </label>
      <div class="sell-content__select-wrap">
        <i class="fa fa-angle-down icon"></i>
        <select class="select-default" name="item[ship_cost_id]" id="item_ship_cost_id">
          <option value="1">--</option>
          <option value="2">未定</option>
          <option value="8">らくらくメルカリ便</option>
          <option value="7">ゆうメール</option>
          <option value="9">レターパック</option>
          <option value="10">普通郵便(定形、定形外)</option>
          <option value="5">クロネコヤマ</option>
          <option value="6">ゆうパック</option> 
          <option value="12">クリックポスト</option>
          <option value="13">ゆうパケット</option>
        </select>
      </div>
    </div>
    `
    add_del.after(html)
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

  $("#deliver-form").on("change",function(){
    deliver = $(this).val()
    if(deliver == 1) {
      $(".items-sell__delivery__right__method").remove()
  
      $.ajax({
        url: '/items/search',
        type: "GET",
        data: {deliver: deliver},
        dataType: 'json'
      })
  
      .done(function(del){
        var childNum = 4
        console.log(del)
        afterDeliver(childNum)
        del.forEach(function(del){
          appendCat(del,childNum)
        })
      })
    } else if(deliver == 2) {
      $(".items-sell__delivery__right__method").remove()
  
      $.ajax({
        url: '/items/search',
        type: "GET",
        data: {deliver: deliver},
        dataType: 'json'
      })
  
      .done(function(del){
        var childNum = 4
        console.log(del)
        afterMethod(childNum)
      
      })
    } else {
      $(".items-sell__delivery__right__method").remove()
    }
  })

});