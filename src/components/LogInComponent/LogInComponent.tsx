import React from 'react';

import './LogInComponent.scss';

const LogInComponent = () => {
  return (
    <div className='login'>
      <form action=''>
        <label htmlFor='email-username'>Email/Username:</label>
        <input type='text' id='email-username' name='email-username' />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' />

        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default LogInComponent;
