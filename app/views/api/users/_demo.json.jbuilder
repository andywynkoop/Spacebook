json.array! users do |user|
  json.extract! user, :id, :firstname, :lastname, :email, :user_url, :bio, :birthday, :sex
  if user.profile_photo.attached?
    json.profile_img_url url_for(user.profile_photo)
  end
  if user.cover_photo.attached?
    json.cover_photo_url url_for(user.cover_photo)
  end
end