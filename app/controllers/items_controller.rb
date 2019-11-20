class ItemsController < ApplicationController
  def index 
    @items = Item.all

    lady = Category.find(1)
    men = Category.find(200)
    elect = Category.find(898) 
    good = Category.find(346)
    # category_ids = Category.where(category_id: )
  
    @ladys_category = Item.where(category_id: [1] + lady.subtree)
    @mens_category = Item.where(category_id: [200] + men.subtree)
    @elect_category = Item.where(category_id: [898] + elect.subtree)
    @goods_category = Item.where(category_id: [346] + good.subtree)
  end
  
  def show
    @item = Item.find(params[:id])
  end

  def destroy
    @item = Item.find(params[:id])
    if @item.user.id = current_user.id
      @item.destroy
      puts "destroyed"
    else
      puts "you cannot destroy other user's file"
    end
    redirect_to root_path
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
    params.require(:item).permit(:name, :description, :price, :size, :state_id, :category_id, :ship_cost_id, :ship_date_id, :prefecture_id, :user_id, :ship_delivery_id,)
  end
end
