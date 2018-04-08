json.extract! @user, :id, :firstname, :lastname, :email, :user_url, :profile_img_url, :cover_photo_url, :bio, :birthday, :sex
json.friendshipData do
  json.extract! @user, :friends, :friends_requested, :requesting_friends
end
