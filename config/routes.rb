Rails.application.routes.draw do
  devise_for :users, controllers: {omniauth_callbacks: "users/omniauth_callbacks"}
  root to: 'items#index'

  resources :items, only: [:index, :show, :create] do
    collection do
      get 'search'
    end
  end

  resources :categories, only: [:index, :new, :show]


  resources :login , only: [:index]
  resources :signup , only: [:index,:create] do 
    collection do
      post 'registration'
      get 'registration_sns'
      post 'sms_confirmation'
      post 'sms'
      post 'address'
      post 'payment'
      get 'finish'
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

  resources :samples , only: [:index]
  resources :transactions , only: [:new, :create]
  resources :sell do
  end
end
