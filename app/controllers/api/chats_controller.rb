class Api::ChatsController < ApplicationController
  def index
    @chats = current_user.chats
  end

  def create
    @chat = current_user.chats.new(chat_params)
    if @chat.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ChatSerializer.new(@chat)
      ).serializable_hash
      ActionCable.server.broadcast 'chats_channel', serialized_data
      head :ok
    else
      render json: @chats.errors.full_messagess
    end
  end

  def chat_params
    params.require(:chat).permit(:name)
  end
end
