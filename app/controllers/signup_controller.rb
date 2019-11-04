class SignupController < ApplicationController

  def index
  end

  def registration
    @user = User.new
  end

  def sms_confirmation
    birthday =  Date.new(user_params["birthday(1i)"].to_i,
                        user_params["birthday(2i)"].to_i,
                        user_params["birthday(3i)"].to_i)
    session[:nickname] = user_params[:nickname]
    session[:email] = user_params[:email]
    session[:password] = user_params[:password]
    session[:password_confirmation] = user_params[:password_confirmation]
    session[:last_name] = user_params[:last_name]
    session[:first_name] = user_params[:first_name]
    session[:last_name_kana] = user_params[:last_name_kana]
    session[:first_name_kana] = user_params[:first_name_kana]
    session[:birthday] = birthday
    @user = User.new
  end

  def sms
    session[:phone_number] = user_params[:phone_number]
    # 取得した電話番号をもとに、認証番号を発行する機能を導入する
    # twilio api(under construction)
    @user = User.new
  end

  def address
    # 認証番号がOKかどうかのバリデーションを行う
    @user = User.new
  end

  def payment
    session[:address_last_name] = user_params[:address_last_name]
    session[:address_first_name] = user_params[:address_first_name]
    session[:address_last_name_kana] = user_params[:address_last_name_kana]
    session[:address_first_name_kana] = user_params[:address_first_name_kana]
    session[:address_number] = user_params[:address_number]
    session[:prefecture_id] = user_params[:prefecture_id]
    session[:address_name] = user_params[:address_name]
    session[:address_block] = user_params[:address_block]
    session[:address_building] = user_params[:address_building]
    session[:address_phone_number] = user_params[:address_phone_number]
    @user = User.new
  end

  def create
    @user = User.new(
      nickname: session[:nickname],
      email: session[:email],
      password: session[:password],
      password_confirmation: session[:password_confirmation],
      last_name: session[:last_name], 
      first_name: session[:first_name], 
      last_name_kana: session[:last_name_kana], 
      first_name_kana: session[:first_name_kana], 
      birthday: session[:birthday],
      phone_number: session[:phone_number],
      address_last_name: session[:address_last_name],
      address_first_name: session[:address_first_name],
      address_last_name_kana: session[:address_last_name_kana],
      address_first_name_kana: session[:address_first_name_kana],
      address_number: session[:address_number],
      prefecture_id: session[:prefecture_id],
      address_name: session[:address_name],
      address_block: session[:address_block],
      address_building: session[:address_building],
      address_phone_number: session[:address_phone_number]
    )
    if @user.save
      session[:id] = @user.id
      redirect_to finish_signup_index_path
    else
      redirect_to root_path
    end
  end


  def finish
    sign_in User.find(session[:id]) unless user_signed_in?
  end

  private
    def user_params
      params.require(:user).permit(
        :nickname, 
        :email, 
        :password, 
        :password_confirmation, 
        :last_name, 
        :first_name, 
        :last_name_kana, 
        :first_name_kana, 
        :"birthday(1i)",
        :"birthday(2i)",
        :"birthday(3i)",
        :phone_number,
        :address_last_name,
        :address_first_name,
        :address_last_name_kana,
        :address_first_name_kana,
        :address_number,
        :prefecture_id,
        :address_name,
        :address_block,
        :address_building,
        :address_phone_number
        )
    end










end
