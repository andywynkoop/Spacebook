class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :email, :user_url, presence: true, uniqueness: true
  after_initialize :ensure_session_token, :ensure_user_url
  attr_reader :password

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
    self.firstname ||= "ThoughtSpot User"
    self.lastname ||= " "
    self.user_url ||= "user#{self.firstname}#{self.lastname}"
  end

end
