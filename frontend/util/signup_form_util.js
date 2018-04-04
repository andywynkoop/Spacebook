export const createUserFromState = state => {
  const {
    firstname,
    lastname,
    email,
    password,
    birthdayMonth: month,
    birthdayDay: day,
    birthdayYear: year,
    sex
  } = state;

  const userData = {
    firstname,
    lastname,
    email,
    password,
    birthday: new Date(year, month, day),
    sex
  };

  return userData;
};

export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
