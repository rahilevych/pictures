import React, { FC, useContext } from 'react';
import './NavComponent.scss';
import { Link, NavLink, Navigate } from 'react-router-dom';
import SearchComponent from '../SearchComponent/SearchComponent';
import { AuthContext } from '../../context/AutorizationContext';
import toast from 'react-hot-toast';
type NavComponentProps = {
  input: React.ChangeEventHandler<HTMLInputElement>;
};

function NavComponent() {
  const { isLoggedIn, logOut, setLoginPressed, setSignUpPressed } =
    useContext(AuthContext);
  console.log(isLoggedIn);

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLoginPressed(false);
    setSignUpPressed(true);
  };
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLoginPressed(true);
    setSignUpPressed(false);
  };
  const notify = () => toast('You are logged out ');
  // if (!isLoggedIn) {
  //   notify();

  //   return <Navigate to={'/'} />;
  // }
  return (
    <nav className='nav'>
      <div className='container nav__container'>
        <NavLink to={'/'} className='nav__link nav__logo-block'>
          <i className='ph ph-camera'></i>
          <p className='nav__logo'>Pictures</p>
        </NavLink>
        {!isLoggedIn && (
          <Link to='/registration'>
            <div className='nav__links'>
              <button className='nav__btn' onClick={handleLogin}>
                Log in
              </button>
              <button className='nav__btn' onClick={handleSignUp}>
                Sign up
              </button>
            </div>
          </Link>
        )}
        {isLoggedIn && (
          <div className='nav__links'>
            <NavLink to={'/saved'} className='nav__link'>
              <i className='ph ph-bookmark-simple  nav__link'></i>
            </NavLink>
            <i className='ph ph-sign-out nav__link' onClick={logOut}></i>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavComponent;
