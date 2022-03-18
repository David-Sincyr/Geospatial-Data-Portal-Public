/* This file handles the formatting for the login system, as well as passing in the text to the other files. */

/* These three imports handle the importations for react and the other content. */
import React, {useState} from 'react';
import './auth.css';
import { Link } from "react-router-dom";

/* This function resets the user details (password, username). */
function LoginFile({Login, error}) {
    const [details, setDetails] = useState({username: "", password: ""});
    
    /* This submithandle prevents default values on the page and calls the login function. */
    const submitHandler = i => {
        i.preventDefault();
        Login(details);
    }

    /* This information is the formatting and submission areas for the users details (password, username),
       additonally it also handles the signup and login buttons. The username division handles that 
       file-group and information, while the password division handles that file-group. */
    return (
    <form onSubmit = {submitHandler}> 
        <div className = "file-inner">
            <h2>Login</h2>
            {(error !== "") ? (<div className = "Error">{error}</div>) : ""}
            <div className = "file-group">
                <label For="username">username:</label>
                <input type = "text" name = "username" id = "username" onChange = 
                {i => setDetails({...details, username: i.target.value})} value = {details.username}/>
            </div>
            <div className = "file-group">
                <label htmlFor="password">Password:</label>
                <input type = "password" name = "password" id = "password" onChange = 
                {i => setDetails({...details, password: i.target.value})} value = {details.password}/>
            </div>
            <input type = "submit" value = "LOGIN"/>
            <Link className = "sign" to = {"/signup"}>
                <input type = "signup" value = "SIGNUP"/>
            </Link>
        </div>
    </form>   
    )
}

export default LoginFile;