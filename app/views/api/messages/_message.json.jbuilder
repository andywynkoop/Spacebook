json.set! message.id do
  json.extract! message, :id, :body, :user_id, :chat_id, :created_at
end