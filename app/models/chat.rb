class Chat < ApplicationRecord
  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :messages,
    dependent: :destroy

  has_many :chat_memberships,
    dependent: :destroy

  has_many :users,
    through: :chat_memberships,
    source: :user
end