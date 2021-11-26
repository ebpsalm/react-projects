import React from 'react';
import { useGlobalContext } from './context';

import { IoSendSharp } from 'react-icons/io5';
const Form = () => {
  const { amount, item, controlledInputs, submit, editFlag } =
    useGlobalContext();
  return (
    <form className='budget-form' onSubmit={submit}>
      <div className='form-input'>
        <div className='input'>
          <label htmlFor='item'>item</label>
          <input
            type='text'
            id='item'
            name='item'
            placeholder='e.g rent'
            value={item}
            onChange={controlledInputs}
          />
          <hr />
        </div>
        <div className='input'>
          <label htmlFor='amount'>amount</label>
          <input
            type='tel'
            id='amount'
            name='amount'
            placeholder='e.g 100'
            value={amount}
            onChange={controlledInputs}
          />
          <hr />
        </div>
      </div>
      <button type='submit' className='submit-btn'>
        {editFlag ? 'edit' : 'submit'}
        <IoSendSharp className='icon' />
      </button>
    </form>
  );
};

export default Form;
