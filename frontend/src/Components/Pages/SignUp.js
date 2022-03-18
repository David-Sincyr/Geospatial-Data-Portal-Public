/* Importing react, jwt_decode, authentication and navigation tools. */
import React, { useState } from 'react';
import '../Auth/sign.css';
import SignFile from '../Auth/SignFile';

/* body function for the signup functionality. */
export default function SignUp() 
{
  // Error is for the errorstate, success captures if signup functions.
  let success = 0;
  const [error, setError] = useState("");

  /* Signup functionality, used for signup page. */
  const Sign = async (details ) => 
  {
    // This sends the input to the post.
    const response = await fetch('http://127.0.0.1:8000/api/signup/', 
    {
    method: "POST", headers: {'Content-Type':'application/json'},
    body:JSON.stringify({'email': details.email, 
                         'password' :details.password, 
                         'password2':details.verifypassword,
                         'username':details.username,
                         'profile': {
                          'first_name':details.firstname,
                          'last_name':details.lastname,
                         }})
    })

    // This checks the reponse, letting the user signup if its correct or errorstate if its incorrect.
    if(response.status === 200)
    {
      localStorage.setItem('authTokens', JSON.stringify(response.token))
      console.log("user has signed up!");
      success = 1;
    } else
      {
        console.log("User has attempted signup, credentials did not match.");
        setError("Email or Password/Verified Password is Incorrect");
      }
  }

  /* This portion is the returned frontend/ */
  return (
    <h1 className = "sign-up">
      {(success !== 0) ? (
        <div className = "welcome-inner">
          <h2>Welcome, you have successfully signed up!</h2>
        </div>
      ) : (<SignFile Sign={Sign} error = {error}/>)}
    </h1>
  )
}