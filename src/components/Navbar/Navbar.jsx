import React, { useState } from "react";
import { Link  } from "react-router-dom";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";
import "./Navbar.css";

const links = [
  { path: "/CompanyProfile", label: "Company Profile", id: 1 },
  { path: "/ProductandServices", label: "Product and Services", id: 2 },
  { path: "/Projects", label: "Projects", id: 3 },
  { path: "/TechnicalCapabilities", label: "Technical Capabilities", id: 4 },
  { path: "/EquipmentandFacilities", label: "Equipment and Facilities", id: 5 },
  { path: "/Contactus", label: "Contact us", id: 6 },
];

const dropdownMenu = [{ name: "Partners", link: "/Partners" }];

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  const [toggle, setToggle] = useState(false);

  const handleMouseEnter = (item) => {
    setCurrentItem(item);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo" src={images.logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li
            className="links"
            key={link.path}
            onMouseEnter={() => handleMouseEnter(link)}
            onMouseLeave={handleMouseLeave}
          >
           
            <Link className="labels" to={link.path}>
              {link.label}
            </Link>

         
            {showDropdown && currentItem === link && link.id === 4 && (
              <ul className="dropdown-menu">
                {dropdownMenu.map((option) => (
                  <li key={option.name}>
                    <img src={images.logosvg} alt="svg" className="svg" />
                    {/* you can sure add another partneship component and then navogate on it  */}
                    <a className="dropdown-item" href={option.link}>
                      {option.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar-toggle">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <div className="toggle-div">
            <HiX onClick={() => setToggle(false)} />
            <ul className="toggle-menu">
              {links.map((link) => (
                <li className="togglemenu-links" key={link.path}>
                  <Link className="togglemenu-labels" to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
