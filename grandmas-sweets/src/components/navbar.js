import React from 'react';
import links from '../supports/links';
import logo from '../img/logo.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-query'>
        <img src={logo} alt='logo' />

        <FaBars className='bars-icon btn' />
      </div>
      <div className='links-container'>
        <ul className='links'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <span className='tel'>
        <BsFillTelephoneFill /> +25678084789
      </span>
      <div className='cart-toggle'>
        <FaShoppingCart />
        <p>
          <span className='cart-count'>0</span> items-
          <span className='cart-total'>$0</span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
