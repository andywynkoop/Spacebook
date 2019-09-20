json.results @users.map(&:id)

json.users do
  @users.each do |user|
    json.partial! 'api/users/user.json.jbuilder', user: user
  end
end