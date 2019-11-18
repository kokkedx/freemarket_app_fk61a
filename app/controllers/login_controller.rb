class LoginController < ApplicationController
  def index
    reset_session
    @user = User.new
  end
end