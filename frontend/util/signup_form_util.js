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

export const errorMessages = {
  firstname: "What's your name?",
  lastname: "What's your name?",
  email:
    "You'll use this when you log in and if you ever need to reset your password.",
  password:
    'Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).',
  birthdayMonth: 'Select your birthday. You can change who can see this later.',
  birthdayDay: 'Select your birthday. You can change who can see this later.',
  birthdayYear: 'Select your birthday. You can change who can see this later.',
  sex: 'Please choose a gender. You can change who can see this later.'
};

export const validateUser = ({
  firstname,
  lastname,
  email,
  password,
  birthdayMonth,
  birthdayDay,
  birthdayYear,
  sex
}) => {
  //create an errors object that returns any errors with fields
  //All front-end validation happens here
  const errors = {};
  if (!firstname) errors.firstname = errorMessages.firstname;
  if (!lastname) errors.lastname = errorMessages.lastname;
  if (!email) errors.email = errorMessages.email;
  if (!password) errors.password = errorMessages.password;
  if (birthdayMonth === 'Month') errors.birthday = errorMessages.birthdayMonth;
  if (birthdayDay === 'Day') errors.birthday = errorMessages.birthdayDay;
  if (birthdayYear === 'Year') errors.birthday = errorMessages.birthdayYear;
  if (!sex) errors.sex = errorMessages.sex;

  return errors;
};

export const getYPositionOfErrorModal = field => {
  switch (field) {
    case 'firstname':
      return 80;
    case 'lastname':
      return 80;
    case 'email':
      return 130;
    case 'password':
      return 180;
    case 'sex':
      return 280;
    default:
      return 245;
  }
};

export const getXPositionOfErrorModal = field => {
  switch (field) {
    case 'firstname':
      return -160;
    case 'lastname':
      return -160;
    case 'email':
      return -450;
    case 'password':
      return -520;
    case 'sex':
      return -400;
    default:
      return -370;
  }
};
