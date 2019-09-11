class Friendship < ApplicationRecord
  belongs_to :requestor,
    foreign_key: :requestor_id,
    class_name: :User

  belongs_to :requestee,
    foreign_key: :requestee_id,
    class_name: :User
end