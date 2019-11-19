class MypagesController < ApplicationController
  before_action :need_login
  def index
  end
  
  def profile
  end

  def confirm
  end

  def credit
  end

  def logout
  end

  private
  def need_login
    redirect_to login_index_path unless user_signed_in?
  end

end
