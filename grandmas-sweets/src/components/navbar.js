import React from 'react';
import links from '../supports/links';
import logo from '../img/logo.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import useGlobalContext from './context';

const Navbar = () => {
  const { displayCart, handleLinks, navBar } = useGlobalContext();
  return (
    <nav className='navbar' ref={navBar}>
      <div className='nav-query'>
        <img src={logo} alt='logo' />

        <FaBars className='bars-icon btn' onClick={displayCart} />
      </div>
      <div className='links-container'>
        <ul className='links'>
          {links.map((link, index) => {
            return (
              <li key={link.id} key={index}>
                <a href={link.url} data-id={link.url} onClick={handleLinks}>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <span className='tel'>
        <BsFillTelephoneFill /> +25678084789
      </span>
      <div className='cart-toggle' onClick={displayCart}>
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
