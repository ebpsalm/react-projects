import React from 'react';
import useGlobalContext from './context';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cart, total, isCartOpen, removeItem, clearCart, displayCart } =
    useGlobalContext();
  return (
    <section className={`cart ${isCartOpen && 'show-cart'}`}>
      <div className='cart-items'>
        {cart.map((item) => {
          return (
            <article key={item.id}>
              <div className='cart-img'>
                <img src={item.url} alt={item.name} />
              </div>
              <div className='description'>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
              <FaTrash className='btn' onClick={() => removeItem(item.id)} />
            </article>
          );
        })}
      </div>
      <p>
        total <span className='cart-total'>$ {total}</span>
      </p>
      {cart.length > 0 ? (
        <div className='cart-btns'>
          <button className='btn' onClick={clearCart}>
            clear cart
          </button>
          <button className='btn' onClick={displayCart}>
            checkout
          </button>
        </div>
      ) : (
        <p>cart is empty</p>
      )}
    </section>
  );
};

export default Cart;
