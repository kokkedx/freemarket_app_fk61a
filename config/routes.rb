Rails.application.routes.draw do
  devise_for :users, controllers: {omniauth_callbacks: "users/omniauth_callbacks"}
  root to: 'items#index'

  resources :login , only: [:index]
  resources :signup , only: [:index,:create] do 
    collection do
      post 'registration'
      get 'registration_sns'
      post 'sms_confirmation'
      post 'sms'
      post 'address'
      post 'payment' # ここで、入力の全てが終了する
      get 'finish' # 登録完了後のページ
    end
  end

  resources :mypages, only: [:index] do
    collection do
      get 'profile'
      get 'confirm'
      get 'credit'
      get 'logout'
    end
  end
end
