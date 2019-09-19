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
    @user = current_user
    profile, cover = params[:photo], params[:cover]
    if profile
      @user.update(profile_photo: profile)
    elsif cover
      @user.update(cover_photo: cover)
    end
    render :show
  end

  def show
    @user = User.find_by(user_url: params[:id])
    if @user
      render :show
    else
      render json: ["User not found"], status: 422
    end
  end

  def index
    query = params[:query]
    search = <<-SQL
      SELECT * 
      FROM users
      WHERE LOWER(firstname) LIKE '%#{query}%'
      OR LOWER(lastname) LIKE '%#{query}%'
      OR LOWER(email) LIKE '%#{query}%'
    SQL
    @users = User
      .includes(:with_attached_profile_photo, :with_attached_cover_photo)
      .find_by_sql(search)
      .take(20)
  end

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :birthday, :sex)
  end
end
