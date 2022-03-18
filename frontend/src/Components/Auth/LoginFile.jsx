import "./Auth.css";
import React from "react";
import PropTypes from "prop-types";

function LoginFile(props) {
  const { Login, error } = props;

  const [details, setDetails] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = (i) => {
    i.preventDefault();
    Login(details);
  };

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <div className="file-inner">
        <h2>Login</h2>

        {error !== "" ? <div className="Error">{error}</div> : ""}

        <div className="file-group">
          <label htmlFor="username">
            Username:
            <input
              type="username"
              name="name"
              id="username"
              onChange={(i) =>
                setDetails({ ...details, username: i.target.value })
              }
              value={details.username}
            />
          </label>
        </div>

        <div className="file-group">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              onChange={(i) =>
                setDetails({ ...details, email: i.target.value })
              }
              value={details.email}
            />
          </label>
        </div>

        <div className="file-group">
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              onChange={(i) =>
                setDetails({ ...details, password: i.target.value })
              }
              value={details.password}
            />
          </label>
        </div>

        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

LoginFile.propTypes = {
  Login: PropTypes.func.isRequired,
  error: PropTypes.string,
};

LoginFile.defaultProps = {
  error: "Error!",
};

export default LoginFile;
