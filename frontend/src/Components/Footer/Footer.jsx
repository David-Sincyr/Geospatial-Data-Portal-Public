/* Style document imports. */
import './Footer.css';

/* External component imports. */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  /* This controls the mouse click states. */
  const [setClick] = React.useState(false);

  /* This sets the state for a mouse click. */
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='footer'>
      {/* This controls the logo at the bottom of the screen. */}
      <div className='logo'>
        <Link to='/about' className='navbar-logo' onClick={closeMobileMenu}>
          Blue Marble Geographics Web Portal
          <FontAwesomeIcon icon={faEarthAmericas} />
        </Link>
      </div>
    </nav>
  );
}

export default Footer;
