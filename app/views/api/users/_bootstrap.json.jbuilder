json.user do
  json.partial! 'api/users/user.json.jbuilder', user: user 
end

json.user_friendships do
  json.partial! 'api/users/user_friendships.json.jbuilder',  user: user 
end

json.friend_requests do
  json.partial! 'api/users/friend_requests.json.jbuilder', user: current_user
end