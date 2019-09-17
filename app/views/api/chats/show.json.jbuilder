json.chat do
  json.partial! '/api/chats/chat', chat: @chat
end

json.chat_friend_map do
  json.sender_id current_user.id
  json.receiver_id @friend.id
  json.chat_id @chat.id
end

json.messages do
  json.partial! '/api/messages/index', messages: @chat.messages
end

json.message_chat_map do
  json.set! @chat.id, @chat.messages.map(&:id)
end
