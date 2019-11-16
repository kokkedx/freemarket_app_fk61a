class ItemsController < ApplicationController
  

  def search
    if params[:l_cat]
      @m_cat = Category.find(params[:l_cat]).children
    elsif
      @s_cat = Category.find(params[:m_cat]).children
    else
      @deliver = DeliveryCost.where(params[:deliver])
    end
    respond_to do |format|
      format.html
      format.json
    end
  end

end