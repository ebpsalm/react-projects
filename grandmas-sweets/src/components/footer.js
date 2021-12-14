import React from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaGooglePlus,
  FaAddressBook,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-socials'>
        <h2 className='special'>grandma's</h2>
        <ul>
          <li>
            <a href='#'>
              <FaFacebook className='link' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaInstagram className='link' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitter className='link' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaGooglePlus className='link' />
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-contacts'>
        <h3>contacts</h3>
        <div>
          <p>
            <FaAddressBook /> 123 robert mugabe road
          </p>
          <p>
            <BsTelephoneFill /> +25678084789
          </p>
          <p>
            <FiMail /> ebpsalm@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
