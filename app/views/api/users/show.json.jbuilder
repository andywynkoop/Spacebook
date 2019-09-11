json.user do
  json.partial! 'api/users/user', user: @user
end

json.user_friendships do
  json.partial! 'api/users/user_friendships', user: @user
end