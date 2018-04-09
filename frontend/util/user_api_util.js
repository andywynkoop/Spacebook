export const fetchUser = userUrl =>
  $.ajax({
    method: 'GET',
    url: `api/users/userUrl`,
    data: { userUrl }
  });

export const fetchAllUsers = () =>
  $.ajax({
    method: 'GET',
    url: 'api/users/'
  });

