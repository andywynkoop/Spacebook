class MessagesChannel < ApplicationCable::Channel
  def subscribed
    chat = Chat.find(params[:chat_id])
    stream_for "chats_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
