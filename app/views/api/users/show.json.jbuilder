json.extract! @user, :id, :firstname, :lastname, :email, :user_url, :profile_img_url, :cover_photo_url, :bio, :birthday, :sex
json.friendshipData do
  json.friends do
    json.ownId @user.id
    @user.friends.each { |friend| json.set! friend.id, friend }
  end
  json.requests_to do
    json.ownId @user.id
    @user.requests_to_friends.each { |request| json.set! request.requested_user_id, request }
  end
  json.requests_from do
    json.ownId @user.id
    @user.requests_from_friends.each { |request| json.set! request.requesting_user_id, request }
  end
end
