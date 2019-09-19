class ChatsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "chats_channel"
    user = User.find(params[:user_id])
    stream_for user
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
