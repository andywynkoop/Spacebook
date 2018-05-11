export const addPhoto = file => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: file
  })
}

export const getPhoto = id => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
}