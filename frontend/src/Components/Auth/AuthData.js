const baseAPIEndpoint = 'http://127.0.0.1:8000/api';

const loginEndpoint = `${baseAPIEndpoint}/login/`;
const logoutEndpoint = `${baseAPIEndpoint}/logout/`;
const signupEndpoint = `${baseAPIEndpoint}/signup/`;

const errorMessages = {
  login: {
    invalid: 'Username or Password is Incorrect!',
    missingField: 'Please enter your username and password.',
    noResponse: 'Failed to login; server is unavailable.',
  },
  signup: {
    invalid: 'Email or Password/Verified Password is Invalid!',
    missingField: 'Please fill all required fields.',
    noResponse: 'Failed to create account; server is unavailable.',
  },
};

export { errorMessages, loginEndpoint, logoutEndpoint, signupEndpoint };
