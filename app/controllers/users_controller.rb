class UsersController < ApplicationController

  def show
    @header_parents = Category.where(ancestry: nil)
    @user = User.includes(:items).find(params[:id])
  end


end
