class MessageSerializer < ActiveModel::Serializer
  attributes :id, :chat_id, :user_id, :body, :created_at
end
