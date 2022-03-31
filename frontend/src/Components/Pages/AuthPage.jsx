/* Importing react, jwt_decode, authentication and navigation tools. */
import '../Auth/Auth.css';
import React from 'react';
import PropTypes from 'prop-types';
import AuthForm from '../Auth/AuthForm';
import LogoutButton from '../Auth/LogoutButton';
import { AuthConsumer } from '../Auth/AuthContext';
import { errorMessages, loginEndpoint, signupEndpoint } from '../Auth/AuthData';

/* body function for the signup functionality. */
function AuthPage(props) {
  const { authType } = props;

  // Error is for the errorstate, success captures if signup functions.
  const [error, setError] = React.useState('');

  /* Login and signup functionality. */
  const apiAction = async (details, updateState) => {
    let response = null;
    if (authType === 'login') {
      response = await fetch(loginEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: details.username,
          password: details.password,
        }),
      }).catch(fetchError => {
        console.error('Error:', fetchError);
        return { status: 503 };
      });
    } else if (authType === 'signup') {
      response = await fetch(signupEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: details.email,
          password: details.password,
          password2: details.verifypassword,
          username: details.username,
          profile: {
            first_name: details.firstname,
            last_name: details.lastname,
          },
        }),
      }).catch(fetchError => {
        console.error('Error:', fetchError.status);
        return { status: 503 };
      });
    }

    // This checks the reponse, letting the user login/signup if its correct or errorstate if its incorrect.
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      updateState(1);
      console.log('Auth success');
    } else {
      console.log(`Auth failure, error code: ${response.status}`);
      if (response.status === 400) {
        setError(authType === 'login' ? errorMessages.login.missingField : errorMessages.signup.missingField);
      } else if (response.status === 401) {
        setError(authType === 'login' ? errorMessages.login.invalid : errorMessages.signup.invalid);
      } else {
        setError(authType === 'login' ? errorMessages.login.noResponse : errorMessages.signup.noResponse);
      }
    }
    return response;
  };

  /* This portion is the returned frontend. */
  if (authType === 'login') {
    return (
      <AuthConsumer>
        {({ isLoggedIn, setIsLoggedIn }) => (
          <h1 className='page auth-page auth-login'>
            {isLoggedIn === 0 ? (
              <AuthForm authType={authType} action={details => apiAction(details, setIsLoggedIn)} error={error} />
            ) : (
              <div className='welcome-container'>
                <h2>Welcome, you have successfully logged in!</h2>
                <LogoutButton />
              </div>
            )}
          </h1>
        )}
      </AuthConsumer>
    );
  }
  if (authType === 'signup') {
    return (
      <AuthConsumer>
        {({ isLoggedIn, setIsLoggedIn }) => (
          <h1 className='page auth-page auth-signup'>
            {isLoggedIn === 0 ? (
              <AuthForm authType={authType} action={details => apiAction(details, setIsLoggedIn)} error={error} />
            ) : (
              <div className='welcome-container'>
                <h2>Welcome, you have successfully signed up!</h2>
              </div>
            )}
          </h1>
        )}
      </AuthConsumer>
    );
  }
}

AuthPage.propTypes = {
  authType: PropTypes.string.isRequired,
};

export default AuthPage;
