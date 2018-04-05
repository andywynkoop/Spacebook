class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if user
      login(user)
      render json: user
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    puts "logging out"
    puts "logging out"
    puts "logging out"
    puts "logging out"
    puts "logging out"
    puts "logging out"
    puts "logging out"
    puts "logging out"
    logout! if current_user
    render json: ["Logged out"], status: 200
  end
end
