class Post < ApplicationRecord
  validates :author_id, :wall_id, presence: true
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  scope :with_stuff, -> { 
    eager_load(:author, :wall, [comments: :author]) 
  }

  belongs_to :wall,
    foreign_key: :wall_id,
    class_name: :User

  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment,
    dependent: :destroy

  def self.find_by_wall_id(id)
    Post.with_stuff.where(wall_id: id)
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

  # def self.authors_of_posts(relation = Post)
  #   relation ||= Post
  #   User.where(id: relation.map { |p| p.author.id }).with_profile.with_cover
  # end

  # def self.walls_of_posts(relation = Post)
  #   User.where(id: relation.map { |p| p.wall.id }).with_profile.with_cover
  # end

  # def self.comments_on_posts(relation = Post)
  #   ids = relation.reduce([]) do |all_comments, post| 
  #     all_comments.concat(post.comments.map(&:id))
  #   end
  #   Comment.includes(:author).where(id: ids)
  # end

  def self.all_relevant_users(posts)
    return [] if posts.empty?
    all_ids = posts.map(&:id).join(', ')
    authors = User.find_by_sql(<<-SQL)
      SELECT
        users.*
      FROM 
        posts
      JOIN
        users ON users.id = posts.author_id
      WHERE 
        posts.id IN (#{all_ids})
    SQL

    walls = User.find_by_sql(<<-SQL)
      SELECT
        users.*
      FROM 
        posts
      JOIN
        users ON users.id = posts.wall_id
      WHERE 
        posts.id IN (#{all_ids})
    SQL

    comment_authors = User.find_by_sql(<<-SQL)
      SELECT
        users.*
      FROM 
        posts
      JOIN
        comments ON comments.post_id = posts.id
      JOIN
        users ON users.id = comments.author_id
      WHERE 
        posts.id IN (#{all_ids})
    SQL

    all_users = (authors + walls + comment_authors).uniq
    relation = User.where(id: all_users.map(&:id)).with_profile.with_cover
  end
end
