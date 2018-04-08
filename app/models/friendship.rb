class Friendship < ApplicationRecord
  validates :requested_user_id, :requesting_user_id, presence: true
  validates :requested_user_id, uniqueness: { scope: :requesting_user_id }
  belongs_to :requested_user,
    foreign_key: :requested_user_id,
    class_name: :User

  belongs_to :requesting_user,
    foreign_key: :requesting_user_id,
    class_name: :User

  def approve_request
    self.approved = true
    self.save
  end
end
