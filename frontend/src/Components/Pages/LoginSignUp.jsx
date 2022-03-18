import "./Pages.css";
import "../Auth/Auth.css";
import React from "react";
import LoginFile from "../Auth/LoginFile";

function LoginSignup() {
  /* This is the admin user account. */
  const adminUser = {
    username: "joe",
    email: "joe@joe.com",
    password: "joe123",
  };

  /* These are the entrance values for the values. */
  const [user, setUser] = React.useState({ username: "", email: "" });
  const [error, setError] = React.useState("");

  /* These are the constant login/logout calls. */
  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password &&
      details.username === adminUser.username
    ) {
      console.log("Logged in!");
      setUser({
        username: details.username,
        email: details.email,
      });
    } else {
      console.log("Details do not match.");
      setError("Your email, password, username was incorrect!");
    }
  };

  const Logout = () => {
    setUser({ username: "", email: "" });
    console.log("Logout");
  };

  /* This portion is the returned frontend */
  return (
    <h1 className="page login-signup">
      {user.email !== "" ? (
        <div className="welcome-inner">
          <h2>
            Welcome, <span>{user.username}</span>
          </h2>

          <button onClick={Logout} type="button">
            Logout
          </button>
        </div>
      ) : (
        <LoginFile Login={Login} error={error} />
      )}
    </h1>
  );
}

export default LoginSignup;
