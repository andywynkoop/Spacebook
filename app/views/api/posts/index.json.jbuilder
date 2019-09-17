json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.post_comment_map do
  @posts.each do |post|
    json.set! post.id, post.comments.map(&:id)
  end
end

json.comments do
  @posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :author_id, :post_id, :body, :created_at
      end
    end
  end
end

json.users do 
  @posts.each do |post|
    json.partial! 'api/users/user.json.jbuilder', user: post.author
    json.partial! 'api/users/user.json.jbuilder', user: post.wall
    post.comments.each do |comment|
      json.partial! 'api/users/user.json.jbuilder', user: comment.author
    end
  end
end