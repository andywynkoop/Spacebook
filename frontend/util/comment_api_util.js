export const addComment = comment =>
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  });

