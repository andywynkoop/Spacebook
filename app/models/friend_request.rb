class FriendRequest < ApplicationRecord
  validates :requestor_id, uniqueness: { scope: :requestee_id }

  belongs_to :requestor,
    foreign_key: :requestor_id,
    class_name: :User

  belongs_to :requestee,
    foreign_key: :requestee_id,
    class_name: :User

  def approve
    Friendship.create!(requestor: self.requestor, requestee: self.requestee)
    Friendship.create!(requestor: self.requestee, requestee: self.requestor)
    self.destroy!
  end

  def deny
    self.destroy!
  end

  def self.previous_request(requestor_id, requestee_id)
    FriendRequest.find_by(requestor_id: requestor_id, requestee_id: requestee_id)
  end
end
