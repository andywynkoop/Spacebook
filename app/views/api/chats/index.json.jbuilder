json.chats do
  @chats.each do |chat|
    json.partial! '/api/chats/chat.json', chat: chat
  end
end

json.chat_friend_map do
  @chats.each do |chat|
    friend_id = chat.users.where.not(id: current_user.id).pluck(:id).first
    json.set! friend_id, chat.id
  end
end

json.messages do
  @chats.each do |chat|
    json.partial! '/api/messages/index.json', messages: chat.messages
  end
end

json.message_chat_map do
  @chats.each do |chat|
    json.set! chat.id, chat.messages.map(&:id)
  end
end