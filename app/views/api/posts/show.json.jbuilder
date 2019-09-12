json.post do
  json.partial! 'api/posts/post', post: @post
end

json.post_comment_map do
  json.set! @post.id, @post.comments.map(&:id)
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :author_id, :post_id, :body, :created_at
    end
  end
end
