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
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
              <FaFacebook className='link' />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/accounts/login/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram className='link' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter className='link' />
            </a>
          </li>
          <li>
            <a
              href='https://myaccount.google.com/'
              target='_blank'
              rel='noreferrer'
            >
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
