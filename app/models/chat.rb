class Chat < ApplicationRecord
  validates :name, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :messages

  has_many :chat_memberships

  has_many :users,
    through: :chat_memberships,
    source: :user
end