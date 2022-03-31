import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import LogoutButton from '../Auth/LogoutButton';
// import { useAuth } from './use-auth.js';

function Navbar() {
  // const auth = useAuth();

  // This controls the mouse click states
  const [click, setClick] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);

  // This function sets the state for a mouse click
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // This follows accisibility standards for providing alternate interactions
  const handleKeyPress = event => {
    if (event.keycode === 13) handleClick();
  };

  // This handles the dropdown menu mouse over
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  // This handles the dropdown menu mouse over
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className='navbar'>
      {/* This controls the Hamburger menu when the window is small */}
      <div className='menu-icon' onClick={handleClick} onKeyPress={handleKeyPress} role='link' tabIndex={0}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} />
      </div>

      {/* This section starts the NavBar Menu between the logo and to the button
          <ul> lists all the items together
          <li> is a list within the list if needed
        */}
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/homepage' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        {/* This portion controls the dropdown menu */}
        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {/* Creates the user menu item and dropdown caret */}
          <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
            User Menu
            <FontAwesomeIcon icon={faCaretDown} />
          </Link>

          {/* if dropdown function and Const state (mouse) is true then drop menu will appear */}
          {dropdown && <Dropdown />}
        </li>

        <li className='nav-links'>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
