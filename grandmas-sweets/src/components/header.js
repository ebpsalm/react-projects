import React from 'react';
import Navbar from './navbar';
import Cart from './cart';
import useGlobalContext from './context';
const Header = () => {
  const data = useGlobalContext();

  return <div>header component</div>;
};

export default Header;
