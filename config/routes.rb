Rails.application.routes.draw do
  devise_for :users
  root to: 'items#index'
  resources :signup , only: [:index,:create] do 
    collection do
      post 'registration'
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
