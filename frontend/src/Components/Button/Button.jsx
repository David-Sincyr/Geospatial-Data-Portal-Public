/* These athe react and file imports for the file. */
import './Button.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* This function creates the button and registers when a user clicks on it. */

function Button(props) {
  const { link, handleClick, name } = props;
  if (link) {
    return (
      <Link to={link}>
        <button type='button' className='button' onClick={handleClick}>
          {name}
        </button>
      </Link>
    );
  }

  /* This is the return after the button clicks. */
  return (
    <button type='button' className='button' onClick={handleClick}>
      {name}
    </button>
  );
}

Button.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  link: '#',
  handleClick: () => {},
};
export default Button;
