require 'faker'

class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    user.firstname ||= Faker::Name.first_name
    user.lastname ||= Faker::Name.last_name
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
