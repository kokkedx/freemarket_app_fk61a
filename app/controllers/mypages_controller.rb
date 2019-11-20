class MypagesController < ApplicationController
  before_action :need_login
  def index
  end
  
  def profile
    @user = User.find(current_user.id)
  end

  def confirm
  end

  def credit
  end

  def logout
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_update_params)
      puts "success"
    else
      puts "failed"
    end
    redirect_to root_path
  end


  private
  def need_login
    redirect_to login_index_path unless user_signed_in?
  end

  def user_update_params
    params.require(:user).permit(:nickname,:introduce)
  end


end
