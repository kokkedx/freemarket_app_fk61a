class CategoriesController < ApplicationController

  def index
    @parents = Category.where(ancestry: nil)
  end

  def show
    @category = Category.find(params[:id])
    # 今の時点では、「レディース」ならば「レディース」のみが表示されるが、将来的には、子カテゴリ以下すべてのものを表示したい
    @items = Item.where(category_id: params[:id])
  end
end
