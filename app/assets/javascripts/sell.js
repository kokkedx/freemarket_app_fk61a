$(function(){
  const uploadItems = '#sell-upload__containar__items';
  const uploadDropBox = '#sell-upload__drop-box';

  // 画像アップロード時プレビュー表示
  $('#item_images').on('change', function(e){
    console.log('発火')
    //ファイルオブジェクトを取得する
    let files = e.target.files;
    $.each(files, function(index, file) {
      let reader = new FileReader();
      //画像でない場合は処理終了
      if(file.type.indexOf("image") < 0){
        alert("画像ファイルを指定してください。");
        return false;
      }
      //アップロードした画像を設定する
      reader.onload = (function(file){
        return function(e){
          let itemLength = $(uploadItems).children('li').length;
          if (itemLength == 10) {
            return false;
          } else {
            $(uploadItems).append(`          
            <li class='sell-upload__containar__image'>
              <figure class='sell-upload__containar__figure'>
                <img src='${e.target.result}'title='${file.name}' class='for-crop-class'>
              </figure>
              <div class='sell-upload__containar__button'>
                <div class='sell-upload__containar__button--edit'>編集</div>
                <div class='sell-upload__containar__button--delete' id="sell-upload__containar__button--delete">削除</div>
              </div>
            </li>
            `);
          $(uploadItems).removeClass().addClass(`sell-upload__containar__items sell-upload__containar__items--have-item-${(itemLength + 1) % 5}`);
          if (itemLength == 9){
            $(uploadDropBox).removeClass().addClass(`sell-upload state-image-number-10`);
          } else{
          $(uploadDropBox).removeClass().addClass(` sell-upload__drop-box sell-upload__drop-box--have-item-${(itemLength + 1) % 5}`);
          }
        }};
      })(file);
      reader.readAsDataURL(file);
    });
  });
});
//画像プレビューから削除
$(document).on('click', '.sell-upload__containar__button--delete', function(){
  $(this).parents('.sell-upload__containar__image').remove();
  let uploadItemLength = $(uploadItems).children('li').length;
  $(uploadItems).removeClass().addClass(`sell-upload__containar__items sell-upload__containar__items--have-item-${uploadItemLength % 5}`);
  $(uploadDropBox).removeClass().addClass(`sell-upload__drop-box sell-upload__drop-box--have-item-${uploadItemLength % 5}`);
});


// $('#sell-upload__containar__button--delete').on('click', function(){
//   $(this).parents('.sell-upload__containar__image').remove();
//   console.log('発火')
//   let uploadItemLength = $(uploadItems).children('ul').length;
//   $(uploadItems).removeClass().addClass(`sell-upload__containar__items sell-upload__containar__items--have-item-${uploadItemLength % 5}`);
//   $(uploadDropBox).removeClass().addClass(`sell-upload__drop-box sell-upload__drop-box--have-item-${uploadItemLength % 5}`);
// });