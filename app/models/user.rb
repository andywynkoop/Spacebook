class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :email, :user_url, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token, :ensure_user_url
  attr_reader :password
  ##Session
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    return user
  end

  def reset_session_token!
    self.session_token = new_token
    self.save
    self.session_token
  end

  def new_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= new_token
  end

  def ensure_user_url
    self.firstname ||= "User"
    self.lastname ||= " "
    self.user_url ||= "#{self.firstname}#{self.lastname}_#{rand(100000)}"
  end
  # End of Session

  #Friends
  #to other users
  has_many :requests_to_friends,
    foreign_key: :requesting_user_id,
    class_name: :Friendship
  #from other users
  has_many :requests_from_friends,
    foreign_key: :requested_user_id,
    class_name: :Friendship

  #friends the user has requested
  has_many :friends_requested,
    through: :requests_to_friends,
    source: :requested_user

  #friends who requested user
  has_many :requesting_friends,
    through: :requests_from_friends,
    source: :requesting_user

  def approved_friends_to
    User.find_by_sql(<<-SQL)
    SELECT
      users.*
    FROM
      users
    JOIN
      friendships ON users.id = friendships.requested_user_id
    WHERE
      friendships.requesting_user_id = #{self.id}
    AND
      friendships.approved = true
    SQL
  end

  def approved_friends_from
    User.find_by_sql(<<-SQL)
    SELECT
      users.*
    FROM
      users
    JOIN
      friendships ON users.id = friendships.requesting_user_id
    WHERE
      friendships.requested_user_id = #{self.id}
    AND
      friendships.approved = true
    SQL
  end

  def friends
    approved_friends_from.concat(approved_friends_to)
  end

  ##End of Friends

end
