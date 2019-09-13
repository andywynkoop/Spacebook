export const search = query =>
  $.ajax({
    method: "GET",
    url: `/api/users?query=${query}`
  });