require 'faker'

class Api::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      login!(user)
      render json: user
    else
      render json: user.errors.full_messages
    end
  end

  def update
  end

  def show
  end

  def destroy
  end
end
