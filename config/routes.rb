Rails.application.routes.draw do

  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :users do
        resources :events
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :meditations
    end
  end

  namespace :api do
    namespace :v1 do
      resources :events
    end
  end

  root to: 'application#angular_home'
end
