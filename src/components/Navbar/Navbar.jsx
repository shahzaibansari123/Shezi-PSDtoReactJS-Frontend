import React , {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

import {images} from '../../constants'

const items = [
  { name: 'Company Profile', id: 1 },
  { name: 'Product and Services', id: 2 },
  { name: 'Pojects', id: 3 },
  { name: 'Technical Capabilities', id: 4 },
  { name: 'Equipment and Facilities', id: 5 },
  { name: 'Contact us', id: 6 },
];

  
  const dropdownMenu = [
    { name: 'Partners', link: '/option-1' },
  
  ];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState();


  const handleMouseEnter = (item) => {
    setCurrentItem(item);
    setShowDropdown(true);
  }

  const handleMouseLeave = () => {
    setShowDropdown(false);
  }


  return (
    <nav className="app__navbar">
    <div className="app__navbar-logo">
    <img className="logo" src={images.logo} alt="logo" />
   
  </div>
  <ul className="app__navbar-links">
   
{items.map((item) => (
        <li className='lmn' key={item.id} 
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}>
          <a className="abc" href={item.name}>{item.name}</a>
    
          {showDropdown && currentItem === item && item.id === 4 && (
            <ul>
              {dropdownMenu.map((option) => (
                <li className="dropdown" key={option.name}>
                  <a href={option.link}>{option.name}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
  </ul>



  
  </nav>
  )
}

export default Navbar
