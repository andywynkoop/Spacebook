class Post < ApplicationRecord
  validates :author_id, :wall_id, presence: true
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :wall,
    foreign_key: :wall_id,
    class_name: :User

  def self.find_by_wall_id(id)
    Post.all.where(wall_id: id)
  end

  def self.find_by_friends_of_user(id)
    user = User.find(id)
    friend_ids = user.friends.map { |friend| friend.id }
    friend_ids << user.id
    id_string = "(#{friend_ids.join(', ')})"
    Post.find_by_sql(<<-SQL)
      SELECT
        posts.*
      FROM
        posts
      WHERE
        posts.author_id IN #{id_string}
      OR
        posts.wall_id IN #{id_string}
    SQL
  end
end
