import React from 'react';
import './NavComponent.scss';
type NavComponentProps = {};

const NavComponent = (props: NavComponentProps) => {
  return (
    <nav className='nav'>
      <div className='container'>
        {' '}
        <p className='nav__logo'>LOGO</p>
        <button className='nav__btn'>Registration</button>
      </div>
    </nav>
  );
};

export default NavComponent;
