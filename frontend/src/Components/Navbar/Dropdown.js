import "./Dropdown.css";
import React from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function Dropdown() {
  // This controls the mouse click states
  const [click, setClick] = React.useState(false);

  // This toggles the state for a mouse click
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* This handles the click status of the dropdown menu*/}
      <ul onClick={handleClick} className="dropdown-menu">
        {/* This maps/loops the menu items array from Menuitems.js and
            returns the name, path and title to the page in the dropdown*/}
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
