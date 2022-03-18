/* These athe react and file imports for the file. */
import "./Button.css";
import React from "react";
import { Link } from "react-router-dom";

/* This function creates the button and registers when a user clicks on it. */
function Button(props) {
  const link = props.link;
  if (link) {
    return (
      <Link to={link}>
        <button className="button" onClick={props.handleClick}>
          {props.name}
        </button>
      </Link>
    );
  }

  /* This is the return after the button clicks. */
  return (
    <button className="button" onClick={props.handleClick}>
      {props.name}
    </button>
  );
}

export default Button;
