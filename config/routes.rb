Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update, :show, :index, :destroy]
    resources :friendships, only: [:create, :update, :destroy]
    resources :posts, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :update, :destroy]

    # Fetch posts on a user's wall
    get '/users/:id/wall', to: 'posts#index_wall'
    #Fetch posts from a user's friends
    get '/feed', to: 'posts#index_feed'
    #Get all coments for a post
    get '/posts/:id/comments', to: 'comments#index'
  end

  root "static_pages#root"
end
