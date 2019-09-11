export const updatePhoto = (form, id) => 
  $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    data: form,
    processData: false,
    contentType: false
  })