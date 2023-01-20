import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { images } from "../../constants";

const links = [
  { path: "/CompanyProfile", label: "Company Profile", id: 1 },
  { path: "/ProductandServices", label: "Product and Services", id: 2 },
  { path: "/Projects", label: "Projects", id: 3 },
  { path: "/TechnicalCapabilities", label: "Technical Capabilities", id: 4 },
  { path: "/EquipmentandFacilities", label: "Equipment and Facilities", id: 5 },
  { path: "/Contactus", label: "Contact us", id: 6 },
];

const dropdownMenu = [{ name: "Partners", link: "/option-1" }];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState();

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
          
           {/* <img src={images.logosvg} className="svg"/> */}
            <Link className="labels" to={link.path}>
              {link.label}
            </Link>
            {showDropdown && currentItem === link && link.id === 4 && (
           
              <ul  className="dropdownmenu">
                {dropdownMenu.map((option) => (
                  <li key={option.name}>
            
                    <img src={images.logosvg} className="svg"/>
                    <a className="dropdownitem" href={option.link}>{option.name}</a>
            
                  </li>
                ))}
              </ul>
              
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
