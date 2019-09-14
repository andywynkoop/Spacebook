json.requests_to do
  user.requests_to.each do |request|
    json.set! request.requestee_id do
      json.extract! request, :id, :requestee_id, :requestor_id
    end
  end
end

json.requests_from do
  user.requests_from.each do |request|
    json.set! request.requestor_id do
      json.extract! request, :id, :requestee_id, :requestor_id
    end
  end
end

json.users do
  user.friends_asked.each do |friend|
    json.partial! 'api/users/user.json.jbuilder', user: friend
  end
  user.asking_friends.each do |friend|
    json.partial! 'api/users/user.json.jbuilder', user: friend
  end
end