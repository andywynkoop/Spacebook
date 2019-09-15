class Api::MessagesController < ApplicationController
  def create
    @message = current_user.messages.new(message_params)
    chat = Chat.find(message_params[:chat_id])
    if @message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(@message)
      ).serializable_hash
      MessagesChannel.broadcast_to chat, serialized_data
      head :ok
    end
  end
  
  private
  
  def message_params
    params.require(:message).permit(:body, :chat_id)
  end
end
