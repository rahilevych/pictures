import React from 'react';
import './SignUpComponent.scss';

const SignUpComponent = () => {
  return (
    <div className='signup'>
      <form action=''>
        <label htmlFor='username'>*User Name:</label>
        <input type='text' id='username' name='username' />

        <label htmlFor='email'>*Email:</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='password'>*Password:</label>
        <input type='password' id='password' name='password' />

        <button type='submit'>Join</button>
      </form>
    </div>
  );
};

export default SignUpComponent;
