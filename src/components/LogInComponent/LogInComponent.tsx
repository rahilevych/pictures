import React, { useContext, useState } from 'react';

import './LogInComponent.scss';
import { AuthContext } from '../../context/AutorizationContext';
import { auth } from '../../config/firebase';
import { Navigate } from 'react-router';
import toast from 'react-hot-toast';

const LogInComponent = () => {
  const { signIn, setPassword, setEmail, email, password, isLoggedIn } =
    useContext(AuthContext);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInputChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(value),
    }));
  };

  const handleInputChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setPassword(e.target.value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: validatePassword(e.target.value),
      }));
    }
  };

  const validateEmail = (email: string) => {
    if (!email) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'invalid  email';
    }
  };
  const validatePassword = (password: string) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password is too short';
    }
    return '';
  };

  console.log(auth.currentUser);
  const notify = () => toast('You are logged succesfully');
  if (isLoggedIn) {
    notify();
    return <Navigate to={'/'} replace={true} />;
  }

  return (
    <div className='login'>
      <form onSubmit={submitForm}>
        <div className='login__input'>
          <label htmlFor='email-username'>Email:</label>
          <input
            type='text'
            id='email-username'
            name='email-username'
            onChange={handleInputChangeEmail}
          />
          {errors.email && <div className='error'>{errors.email}</div>}
        </div>
        <div className='login__input'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={handleInputChangePass}
          />
          {errors.password && <div className='error'>{errors.password}</div>}
        </div>
        <button onClick={signIn}>Log In</button>
      </form>
    </div>
  );
};

export default LogInComponent;
