class ItemsController < ApplicationController
  def index 
    @parents = Category.where(ancestry: nil)
  end

  def show
    @item = Item.find(params[:id])
  end

  def search
    if params[:l_cat]
      @m_cat = Category.find(params[:l_cat]).children
    else
      @s_cat = Category.find(params[:m_cat]).children
    end
    respond_to do |format|
      format.html
      format.json
    end
  end

  private
  def item_params
    params.permit(:name, :price, :size, :category_id)
  end
end
