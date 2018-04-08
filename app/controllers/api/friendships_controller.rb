class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      @user = current_user
      render "api/users/show"
    else
      render ["Error Creating Friendship"], status: 422
    end
  end

  def update
    @friendship = Friendship.find(params[:id])
    @friendship.approved = true
    if @friendship.save
      @user = current_user
      render "api/users/show"
    else
      render ["Error Approving Friendship"], status: 422
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    @user = current_user
    render "api/users/show"
  end


  def friendship_params
    params.require(:friendship).permit(:requesting_user_id, :requested_user_id)
  end
end
