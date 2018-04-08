Rails.application.routes.draw do
  namespace :api do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update, :show, :destroy]
    resources :friendships, only: [:create, :update, :destroy]
  end

  root "static_pages#root"
end
