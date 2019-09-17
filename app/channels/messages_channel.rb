class MessagesChannel < ApplicationCable::Channel
  def subscribed
    chat = Chat.find(params[:chat])
    stream_for chat
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
