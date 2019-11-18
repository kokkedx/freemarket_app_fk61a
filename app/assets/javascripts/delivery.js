// $(function(){  

//   const shipCostWrap = '#sell-content__form-group--delivery-cost';
//   const deliveryCharge = '#item_ship_cost_id';
//   const shipDeliveryWrap = '#sell-content__form-group--delivery-way';

//   function appendShipDelivery(){
//     const shipDeliveryHTML = `
//     <div class="sell-content__form-group" id="sell-content__form-group--delivery-way">
//       <label class="sell-content__form-group--text">発送の方法
//         <span class="sell-content__form-group__status sell-content__form-group__status--require">必須</span>
//       </label>
//       <div class="sell-content__select-wrap">
//         <i class="fa fa-angle-down icon"></i>
//         <select class="select-default" name="item[ship_dekivery_id]" id="item_ship_delivery_id">
//           <option value="">--</option>
//         </select>
//       </div>
//     </div>
//     `
//     $(shipCostWrap).after(shipDeliveryHTML);
//   }

//   // 配送方法選択内容の追加
//   function appendShipDeliveryOption(shipDelivery, appendWrap){
//     let shipDeliveryOptionHTML =`<option value="${shipDelivery.id}">${shipDelivery.name}</option>`;
//     $(appendWrap).find('select').append(shipDeliveryOptionHTML);
//   }

//   // 配送料選択時、配送方法表示
//   $(deliveryCharge).on('change',function(){
    
//     let deliveryChargeId = $(this).val()
//     console.log(deliveryChargeId)
//     $.ajax({
//       type: "GET",
//       url: '/api/sell/new_delivery',
//       data: { charge: deliveryChargeId },
//       dataType: 'json'
//     })

//     .done(function(shipDeliverys){
//       $(shipDeliveryWrap).remove();
//       if(deliveryChargeId != '' && shipDeliverys[0]){
//         appendShipDelivery();
//         shipDeliverys.forEach(function(shipDelivery){
//           appendShipDeliveryOption(shipDelivery, shipDeliveryWrap);
//         });
//       }
//     })
//     .fail(function(){
//       alert('カテゴリー検索に失敗しました');
//     });
//   });
// })
