class LoginController < ApplicationController
before_action :return_to_root

  def index
    reset_session
    @user = User.new
  end

  private
  def return_to_root
    redirect_to root_path if user_signed_in?
  end

end