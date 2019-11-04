Rails.application.routes.draw do
  devise_for :users
  root to: 'samples#index'
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

end
