class SellController < ApplicationController
  def index
    @items = Item.limit(10).order('created_at DESC')
    @category = Category.all
  end

  def new
    @item = Item.new
    @cost = ShipCost.find(1,2)
  end


  def create
    @item = Item.new(item_params)
    @item.size = "ここにサイズの名前が入ります"
    if @item.save
      redirect_to root_path
    else
      @cost = ShipCost.find(1,2)
      render new_sell_path unless @item.valid?
    end
  end

  private
  def item_params
    params.require(:item).permit(:user_id, :name, :description, :state_id, :ship_cost_id,:ship_date_id, :price, :size, :category_id, :prefecture_id, images: [])
    # params.require(:item).permit(:name, :description, :state_id, :price, :category_id, images: [])
  end
end
