class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      render "api/users/user.json.jbuilder", user: current_user
    else
      render ["Error Creating Friendship"], status: 422
    end
  end

  def update
    @friendship = Friendship.find_by(params[:id])
    @friendship.approved = true
    if @friendship.save
      render "api/users/user.json.jbuilder", user: current_user
    else
      render ["Error Approving Friendship"], status: 422
    end
  end

  def destroy
    @friendship = Friendship.find_by(params[:id])
    @friendship.destroy
    render "api/users/user.json.jbuilder", user: current_user
  end


  def friendship_params
    params.require(:friendship).permit(:requesting_user_id, :requested_user_id)
  end
end
