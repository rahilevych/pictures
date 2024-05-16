import React from 'react';
import './NavComponent.scss';
import { Link } from 'react-router-dom';
type NavComponentProps = {};

const NavComponent = (props: NavComponentProps) => {
  return (
    <nav className='nav'>
      <div className='container nav__container'>
        <p className='nav__logo'>LOGO</p>
        <Link to='/registration'>
          <button className='nav__btn'>Log in</button>{' '}
        </Link>
      </div>
    </nav>
  );
};

export default NavComponent;
