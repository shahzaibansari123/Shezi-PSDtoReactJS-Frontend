import React from 'react'
import './Navbar.css'

import {images} from '../../constants'


const Navbar = () => {
  return (
    <nav className="app__navbar">
    <div className="app__navbar-logo">
    <img className="logo" src={images.logo} alt="logo" />
   
  </div>
  <ul className="app__navbar-links">
    {["Company Profile", "Product and Services", "Projects", "Technical Capabilities" , "Equipments and Facilities", "Contact us"].map((item) => (
      <li className="lmn" key={`link-${item}`}>
        <a className="abc" href={`${item}`}>{item}</a>
      </li>
    ))}
  </ul>
  </nav>
  )
}

export default Navbar
