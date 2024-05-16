import React from 'react';
import './NavComponent.scss';
import { Link } from 'react-router-dom';
type NavComponentProps = {};

const NavComponent = (props: NavComponentProps) => {
  return (
    <nav className='nav'>
      <div className='container nav__container'>
        {' '}
        <p className='nav__logo'>LOGO</p>
        <button className='nav__btn'>
          {' '}
          <Link to='/registration'>Registration</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavComponent;
