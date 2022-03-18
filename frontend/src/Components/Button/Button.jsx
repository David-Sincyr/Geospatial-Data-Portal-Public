import "./Button.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button(props) {
  const { name, link, handleClick } = props;
  if (link) {
    return (
      <Link to={link}>
        <button className="button" onClick={handleClick} type="button">
          {name}
        </button>
      </Link>
    );
  }

  return (
    <button className="button" onClick={handleClick} type="button">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  link: "#",
  handleClick: () => {},
};

export default Button;
