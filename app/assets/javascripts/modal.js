$(function(){

  // let modal = `
  // <div id="item-show-modal"></div>
  // `


  $("#modal-open").on("click",function(){
      $(this).blur();
      if($("#modal-overlay")[0]) return false ;
      // $("body").append(modal);
      $("body").append('<div id="modal-overlay"></div>');
      $("#item-show-modal").fadeIn("slow");
      $("#modal-overlay").fadeIn("slow");
      $("#modal-overlay").on("click",function(){
        this.remove()
        $("#item-show-modal").hide()
      })
      $("#modal-remove").on("click",function(){
        $("#modal-overlay").remove()
        $("#item-show-modal").hide()
      })
    })



})

