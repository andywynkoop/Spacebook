friends = user.friends

json.friend_map do
  json.set! user.id, friends.map(&:id)
end

json.friends do
  friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :firstname, :lastname, :user_url
      if friend.profile_photo.attached?
        json.profile_img_url url_for(friend.profile_photo)
      end
    end
  end
end