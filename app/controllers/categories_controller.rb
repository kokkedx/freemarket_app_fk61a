class CategoriesController < ApplicationController

  def index
    @parents = Category.where(ancestry: nil)
    @children = Category.where(name: "#{params[:parent_name]}", ancestry: 2)
  end

  def show
  end
  
end
