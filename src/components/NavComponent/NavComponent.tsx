import React, { FC, useContext } from 'react';
import './NavComponent.scss';
import { Link, NavLink } from 'react-router-dom';
import SearchComponent from '../SearchComponent/SearchComponent';
import { AuthContext } from '../../context/AutorizationContext';
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

  return (
    <nav className='nav'>
      <div className='container nav__container'>
        <NavLink to={'/'}>
          <p className='nav__logo'>LOGO</p>
        </NavLink>
        {!isLoggedIn && (
          <Link to='/registration'>
            <div className='registration__links'>
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
          <button className='nav__btn' onClick={logOut}>
            Log out
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavComponent;
