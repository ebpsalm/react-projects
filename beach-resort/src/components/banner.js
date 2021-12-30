import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import StyledBanner from '../styled-components/styledBanner';

const Banner = ({ children, utils }) => {
  return (
    <StyledBanner image={utils.img}>
      <article className='banner'>
        <Title title={utils.title} />
        {children}
        <Link to={utils.path} className='banner-link'>
          {utils.text}
        </Link>
      </article>
    </StyledBanner>
  );
};

export default Banner;
