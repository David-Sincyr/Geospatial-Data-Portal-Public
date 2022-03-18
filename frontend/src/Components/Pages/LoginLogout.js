/* Importing react, jwt_decode, authentication and navigation tools. */
import React, { useState } from 'react';
import '../Auth/auth.css';
import LoginFile from '../Auth/LoginFile';

/* body function for the login functionality. */
export default function LoginLogout() 
{
  // Error is for the errorstate, success captures if login functions.
  let success = 0;
  const [error, setError] = useState("");

  /* Login functionality, used for login page. */
  const Login = async (details ) => 
  {
    // This sends the input to the post.
    const response = await fetch('http://127.0.0.1:8000/api/login/', 
    {
    method: "POST", headers: {'Content-Type':'application/json'},
    body:JSON.stringify({"username": details.username, "password" : details.password})
    })

    // This checks the reponse, letting the user login if its correct or errorstate if its incorrect.
    if(response.status === 200)
    {
      localStorage.setItem('authTokens', JSON.stringify(response.token))
      console.log("user has logged in!");
      window.success = 1;
    } else
      {
        console.log("User has attempted login, credentials did not match.");
        setError("Incorrect email or password!");
      }
  }

  /* Logout functionality, used for both logout buttons. */
  let Logout = () => {
    localStorage.removeItem('authTokens');
  }

  /* This portion is the returned frontend/ */
  return (
    <h1 className = "login-logout">
      {(success !== 0) ? (
        <div className = "welcome-inner">
          <h2>Welcome, you have successfully logged in!</h2>
          <button onClick ={Logout}>Logout</button>
        </div>
      ) : (<LoginFile Login={Login} error = {error}/>)}
    </h1>
  )
}