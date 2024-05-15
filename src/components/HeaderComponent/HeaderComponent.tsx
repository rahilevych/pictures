import React from 'react';
import NavComponent from '../NavComponent/NavComponent';
import './HeaderComponent.scss';

type Props = {};

const HeaderComponent = (props: Props) => {
  return (
    <header className='header'>
      <div className='container'>Header</div>
    </header>
  );
};

export default HeaderComponent;
