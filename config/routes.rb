Rails.application.routes.draw do
  namespace :api do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :edit, :show, :destroy]
  end
  
  root "static_pages#root"
end
