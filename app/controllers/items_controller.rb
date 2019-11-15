class ItemsController < ApplicationController
  def index 
    @item = Item.find(1)
  end

  def show
    @item = Item.find(params[:id])
  end

  private
  def item_params
    params.permit(:name, :price, :size, :category_id)
  end
end
