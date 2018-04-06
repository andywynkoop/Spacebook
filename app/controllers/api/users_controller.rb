class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def update
  end

  def show
    @user = User.find_by(user_url: params[:userUrl])
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :birthday, :sex)
  end
end
