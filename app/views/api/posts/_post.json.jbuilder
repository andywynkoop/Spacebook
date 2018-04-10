json.extract! post, :id, :author_id, :wall_id, :body, :created_at
json.author post.author
json.wall post.wall
