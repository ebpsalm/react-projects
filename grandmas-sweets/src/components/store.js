import React from 'react';

const contentful = require('contentful');
const client = contentful.createClient({
  space: '4mtgiknsg42p',
  accessToken: 'fRv5pbhzfLcPayBARljEOM32jycjBHe3yTlbtRvKN7I',
});
const Store = () => {
  return <div>store component</div>;
};

export default Store;
