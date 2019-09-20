friends = user.friends.with_profile.with_cover

json.friend_map do
  json.set! user.id, friends.map(&:id)
end

json.friends do
  friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :firstname, :lastname, :email, :user_url, :bio, :birthday, :sex
      if friend.profile_photo.attached?
        json.profile_img_url url_for(friend.profile_photo)
      end
      if friend.cover_photo.attached?
        json.cover_photo_url url_for(friend.cover_photo)
      end
    end
  end
end