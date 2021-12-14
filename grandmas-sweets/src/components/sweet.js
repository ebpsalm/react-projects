import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
const Sweet = ({ name, price, url }) => {
  return (
    <article className='sweet'>
      <div className='store-img'>
        <img src={url} alt={name} />
        <button className='cart-icon btn'>
          <FaShoppingCart />
        </button>
      </div>
      <div className='store-footer'>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </article>
  );
};

export default Sweet;
