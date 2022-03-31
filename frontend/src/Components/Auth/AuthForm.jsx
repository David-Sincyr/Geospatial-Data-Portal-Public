/* This file handles the formatting for the signup system, as well as passing in the text to the other files. */

/* These three imports handle the importations for React and other content. */
import './Auth.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* This function resets the user details (password, vpassword, firstname, lastname, username). */
function AuthForm(props) {
  const { authType, action, error } = props;
  const [details, setDetails] =
    authType === 'login'
      ? React.useState({ username: '', password: '' })
      : React.useState({
          email: '',
          password: '',
          verifypassword: '',
          firstname: '',
          lastname: '',
          username: '',
        });

  /* This submithandle prevents default values on the page and calls the signup function. */
  const submitHandler = i => {
    i.preventDefault();
    action(details);
  };

  /* This information is the formatting and submission areas for the users details (password, email),
    additonally it also handles the signup button. Each of the sorted 'filegroup divisions' handles a
    different value which needs to be parsed. The final variable in the list is the signup button itself. */
  return (
    <form className='auth-form' onSubmit={submitHandler}>
      <div className='auth-inner'>
        <h2>{authType.charAt(0).toUpperCase() + authType.substr(1)}</h2>

        {authType === 'signup' ? (
          <div className='auth-input-container'>
            <label htmlFor='email'>
              Email:
              <input
                type='email'
                name='email'
                className='text-input'
                id='email'
                onChange={i => setDetails({ ...details, email: i.target.value })}
                value={details.email}
              />
            </label>
          </div>
        ) : (
          ''
        )}

        <div className='auth-input-container'>
          <label htmlFor='username'>
            Username:
            <input
              type='username'
              name='username'
              className='text-input'
              id='username'
              onChange={i => setDetails({ ...details, username: i.target.value })}
              value={details.username}
            />
          </label>
        </div>

        <div className='auth-input-container'>
          <label htmlFor='password'>
            Password:
            <input
              type='password'
              name='password'
              className='text-input'
              id='password'
              onChange={i => setDetails({ ...details, password: i.target.value })}
              value={details.password}
            />
          </label>
        </div>

        {authType === 'signup' ? (
          <div className='auth-input-container'>
            <label htmlFor='verifypassword'>
              Verify Password:
              <input
                type='password'
                name='verifypassword'
                className='text-input'
                id='verifypassword'
                onChange={i => setDetails({ ...details, verifypassword: i.target.value })}
                value={details.verifypassword}
              />
            </label>
          </div>
        ) : (
          ''
        )}

        {authType === 'signup' ? (
          <div className='auth-input-container'>
            <label htmlFor='firstname'>
              First name:
              <input
                type='firstname'
                name='firstname'
                className='text-input'
                id='firstname'
                onChange={i => setDetails({ ...details, firstname: i.target.value })}
                value={details.firstname}
              />
            </label>
          </div>
        ) : (
          ''
        )}

        {authType === 'signup' ? (
          <div className='auth-input-container'>
            <label htmlFor='lastname'>
              Last name:
              <input
                type='lastname'
                name='lastname'
                className='text-input'
                id='lastname'
                onChange={i => setDetails({ ...details, lastname: i.target.value })}
                value={details.lastname}
              />
            </label>
          </div>
        ) : (
          ''
        )}

        {error !== '' ? (
          <div className='alert' id='auth-error'>
            {error}
          </div>
        ) : (
          ''
        )}

        <input type='submit' name={authType} id='auth-submit-button' value={authType.toUpperCase()} />

        {authType === 'login' ? (
          <Link className='sign' to='/signup'>
            <input type='button' name='signup' id='sign-up-button' value='SIGNUP' />
          </Link>
        ) : (
          ''
        )}
      </div>
    </form>
  );
}

AuthForm.propTypes = {
  authType: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  error: PropTypes.string,
};

AuthForm.defaultProps = {
  error: 'Error!',
};

export default AuthForm;
