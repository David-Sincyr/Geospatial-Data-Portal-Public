/* This file handles the formatting for the signup system, as well as passing in the text to the other files. */

/* These three imports handle the importations for react and the other content. */
import React, {useState} from 'react';
import './sign.css';

/* This function resets the user details (password, vpassword, firstname, lastname, username). */
function SignFile({Sign, error}) {
    const [details, setDetails] = useState({email: "", 
                                            password: "", 
                                            verifypassword: "", 
                                            firstname: "", 
                                            lastname: "",
                                            username: ""});
                                            
    /* This submithandle prevents default values on the page and calls the signup function. */
    const submitHandler = i => {
        i.preventDefault();
        Sign(details);
    }

    /* This information is the formatting and submission areas for the users details (password, email),
    additonally it also handles the signup button. Each of the sorted "filegroup divisions" handles a
    different value which needs to be parsed. The final variable in the list is the signup button itself.*/
    return (
    <form onSubmit = {submitHandler}> 
        <div className = "file-inner">
            <h2>Signup</h2>
            {(error !== "") ? (<div className = "Error">{error}</div>) : ""}
            <div className = "file-group">
                <label htmlFor="email">Email:</label>
                <input type = "email" name = "email" id = "email" onChange = 
                {i => setDetails({...details, email: i.target.value})} value = {details.email}/>
            </div>
            <div className = "file-group">
                <label htmlFor="password">Password:</label>
                <input type = "password" name = "password" id = "password" onChange = 
                {i => setDetails({...details, password: i.target.value})} value = {details.password}/>
            </div>
            <div className = "file-group">
                <label htmlFor="verifypassword">Verify Password:</label>
                <input type = "password" name = "verifypassword" id = "verifypassword" onChange = 
                {i => setDetails({...details, verifypassword: i.target.value})} value = {details.verifypassword}/>
            </div>
            <div className = "file-group">
                <label htmlFor="firstname">First name:</label>
                <input type = "firstname" name = "firstname" id = "firstname" onChange = 
                {i => setDetails({...details, firstname: i.target.value})} value = {details.firstname}/>
            </div>
            <div className = "file-group">
                <label htmlFor="lastname">Last name:</label>
                <input type = "lastname" name = "lastname" id = "lastname" onChange = 
                {i => setDetails({...details, lastname: i.target.value})} value = {details.lastname}/>
            </div>
            <div className = "file-group">
                <label htmlFor="username">Username:</label>
                <input type = "username" name = "username" id = "username" onChange = 
                {i => setDetails({...details, username: i.target.value})} value = {details.username}/>
            </div>
            <input type = "submit" value = "SIGNUP"/>
            
        </div>
    </form>   
    )
}

export default SignFile;