class SellController < ApplicationController
  def index
    @items = Item.limit(10).order('created_at DESC')
    @category = Categpry.all
  end
  
  def new
    @item = Item.new
  end


  def create
    @item = Item.new(item_params)
    @item.size = 1
    # @item.ship_cost = 1
    # @item.ship_date = 1


    binding.pry
    if @item.save
      redirect_to root_path
    else
      redirect_to new_sell_path unless @item.valid?
    end
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :state_id, :ship_cost,:ship_date, :price, :size, :category_id, images: [])
    # params.require(:item).permit(:name, :description, :state_id, :price, :category_id, images: [])
  end
end
