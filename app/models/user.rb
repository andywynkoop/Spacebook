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

  def self.demo_users
    demo_emails = [
      "demo_user@email.com", 
      "jesse@email.com", 
      "ashley@email.com", 
      "franka@email.com", 
      "scott@email.com", 
      "warren@email.com"
    ]
    User
    .where(email: demo_emails)
    .with_profile
    .with_cover
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
  has_one_attached :profile_photo
  scope :with_profile, -> { eager_load(profile_photo_attachment: :blob) }
  has_one_attached :cover_photo
  scope :with_cover, -> { eager_load(cover_photo_attachment: :blob) }

  has_many :requests_to,
    foreign_key: :requestor_id,
    class_name: :FriendRequest,
    dependent: :destroy

  has_many :requests_from,
    foreign_key: :requestee_id,
    class_name: :FriendRequest,
    dependent: :destroy

  has_many :friends_asked,
    through: :requests_to,
    source: :requestee

  has_many :asking_friends,
    through: :requests_from,
    source: :requestor

  has_many :friendships,
    foreign_key: :requestor,
    class_name: :Friendship,
    dependent: :destroy

  has_many :friends,
    through: :friendships,
    source: :requestee

  ##End of Friends
  has_many :authored_posts,
    foreign_key: :author_id,
    class_name: :Post,
    dependent: :destroy

  has_many :wall_posts,
    foreign_key: :wall_id,
    class_name: :Post,
    dependent: :destroy

  has_many :authored_comments,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :messages

  has_many :created_chats,
    foreign_key: :creator_id,
    class_name: :Chat
  
  has_many :chat_memberships,
    foreign_key: :user_id,
    class_name: :ChatMembership

  has_many :chats,
    through: :chat_memberships,
    source: :chat
end
