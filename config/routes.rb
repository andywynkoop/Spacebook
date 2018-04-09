Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update, :show, :index, :destroy]
    resources :friendships, only: [:create, :update, :destroy]
  end

  root "static_pages#root"
end
