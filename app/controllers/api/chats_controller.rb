class Api::ChatsController < ApplicationController
  def index
    @chats = current_user.chats.includes(:messages)
  end
end
