import React, { useContext, useState } from 'react';
import './SignUpComponent.scss';

import { AuthContext } from '../../context/AutorizationContext.tsx';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router';

const SignUpComponent = () => {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const { register, setEmail, setPassword, user } = useContext(AuthContext);
  const signup = () => toast.success('You are signed up !');
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
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  if (user) {
    signup();
    return <Navigate to={'/'} replace={true} />;
  }

  return (
    <div className='signup'>
      <form onSubmit={submitForm}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleInputChangeEmail}
        />
        {errors.email && <div className='error'>{errors.email}</div>}
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          onChange={handleInputChangePass}
        />
        {errors.password && <div className='error'>{errors.password}</div>}
        <button onClick={register}>Join</button>
      </form>
    </div>
  );
};

export default SignUpComponent;
