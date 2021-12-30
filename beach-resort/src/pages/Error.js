import React from 'react';
import Banner from '../components/banner';

const Error = () => {
  return (
    <>
      <Banner utils={{ path: '/', text: 'back home', title: '404' }}>
        page not found
      </Banner>
    </>
  );
};

export default Error;
