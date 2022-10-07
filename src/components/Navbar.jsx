import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

import "./NavbarStyles.css";

const Navbar = () => {
  
    const [ click , setClick ] = useState(false);

    const handleClick = () => setClick(!click);
   
    return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburguer" onClick={handleClick}>
          
            {click ? (<FaTimes style={{color: '#ffff'}} size={30}/>) : (<FaBars style={{ color: "#ffff" }} size={30} />)}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;