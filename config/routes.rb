Rails.application.routes.draw do
  devise_for :users, controllers: {omniauth_callbacks: "users/omniauth_callbacks"}
  root to: 'items#index'

  resources :items, only: [:index, :show, :create, :destroy] do
    collection do
      get 'search'
    end
  end

  resources :categories, only: [:index,:show]

  resources :users, only: [:show]

  resources :users, only: [:update]


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
      get 'myitem'
    end
    member do
      patch "update"
    end
  end

  resources :samples , only: [:index]
  resources :prefectures , only: [:show]

  resources :transactions , only: [:create] do
    collection do
      post 'buying'
    end
  end

  resources :sell ,only: [:index, :new, :create, :edit, :update]do
    collection do
      get 'edit'
      get 'sell'
    end
  end

  
  # namespace :api do
  #   resources :sell, only: :new, defaults: { format: 'json' }
  #   get '/sell/new_delivery', to: 'sell#new_delivery', defaults: { format: 'json' }
  # end

end
