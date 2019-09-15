class ChatSerializer < ActiveModel::Serializer
  attributes :id, :creator_id, :name
  has_many :messages
end
