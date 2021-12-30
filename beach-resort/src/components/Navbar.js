import React from 'react';
import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <nav className='nav-bar'>
      <div className='logo-container'>
        <img src={Logo} alt='logo' />
      </div>
      <button
        className='toggle-btn'
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        {isSideBarOpen ? (
          <span>
            <FaTimes />
          </span>
        ) : (
          <span>
            <FaBars />
          </span>
        )}
      </button>
      <div className={`links-container ${isSideBarOpen && 'open-links'}`}>
        <ul className='links'>
          <li>
            <Link to='/' className='navLink'>
              home
            </Link>
          </li>
          <li>
            <Link to='/rooms' className='navLink'>
              rooms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
