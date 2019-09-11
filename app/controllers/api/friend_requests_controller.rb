class Api::FriendRequestsController < ApplicationController
  def create
    prev_request = FriendRequest.previous_request(
      params[:requestee_id], 
      current_user.id
    )

    if prev_request
      prev_request.approve
      @user = current_user
      render 'api/users/show'
    else
      @friend_request = FriendRequest.new(
        requestee_id: params[:requestee_id], 
        requestor: current_user
      )
      if @friend_request.save
        @user = current_user
        render 'api/users/show'
      else
        render @friend_request.errors.full_messages, status: 422
      end
    end
  end

  def update
    @friend_request = FriendRequest.find(params[:id])
    if @friend_request.requestee == current_user
      @friend_request.approve
      @user = current_user
      render "api/users/show"
    else
      render json: {}, status: 401
    end
  end

  def destroy
    @friend_request = FriendRequest.find(params[:id])
    if @friend_request.requestee == current_user
      @friend_request.deny
      @user = current_user
      render 'api/users/show'
    else
      render json: {}, status: 401
    end
  end
end
