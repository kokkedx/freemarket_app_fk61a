class SellController < ApplicationController
  def index
    # @items = Item.limit(10).order('created_at DESC')
  end
  
  def new
    @item = Item.new
  end


  def create
    @items = Item.new(item_params)
    if @items.save
      redirect_to root_path
    else
      redirect_to new_sell_path unless @item.valid?
    end
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, images: [])
  end
end
