json.extract! user, :id, :firstname, :lastname, :email, :user_url, :bio, :birthday, :sex
if user.profile_photo.attached?
  json.profile_img_url url_for(user.profile_photo)
end
if user.cover_photo.attached?
  json.cover_photo_url url_for(user.cover_photo)
end
json.friendshipData do
  json.friends do
    json.ownId user.id
    user.friends.each { |friend| json.set! friend.id, friend }
  end
  json.requests_to do
    json.ownId user.id
    user.requests_to_friends.each { |request| json.set! request.requested_user_id, request } || {}
  end
  json.requests_from do
    json.ownId user.id
    user.requests_from_friends.each { |request| json.set! request.requesting_user_id, request } || {}
  end
end
