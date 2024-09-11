import { useContext } from 'react';
import './NavComponent.scss';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/AutorizationContext';

function NavComponent() {
  const { isLoggedIn, logOut, setLoginPressed, setSignUpPressed } =
    useContext(AuthContext);
  console.log(isLoggedIn);

  const handleSignUp = () => {
    setLoginPressed(false);
    setSignUpPressed(true);
  };
  const handleLogin = () => {
    setLoginPressed(true);
    setSignUpPressed(false);
  };

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
