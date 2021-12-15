import React from 'react';
import Navbar from './navbar';
import useGlobalContext from './context';
const Header = () => {
  const { alert } = useGlobalContext();

  return (
    <header className='header' id='home'>
      <Navbar />
      <div className='div'>
        <p className={`alert ${alert.state && `${alert.type}`}`}>{alert.msg}</p>
      </div>
      <div className='header-center'>
        <h1>
          welcome to <span className='special'>grandma's</span>
        </h1>
        <a href='#store' className='explore'>
          explore
        </a>
      </div>
    </header>
  );
};

export default Header;
