import './Dropdown.css';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

function Dropdown() {
  return (
    <>
      {/* This handles the click status of the dropdown menu  */}
      <ul className='dropdown-menu'>
        {/* This maps/loops the menu items array from Menuitems.js and
            returns the name, path and title to the page in the dropdown  */}
        {MenuItems.map(item => (
          <li key={item.id}>
            <Link className={item.cName} to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;
