import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import MainBlockComponent from '../../components/MainBlockComponent/MainBlockComponent';
import NavComponent from '../../components/NavComponent/NavComponent';

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <div className='wrapper'>
      <NavComponent />
      <HeaderComponent />
      <MainBlockComponent />
    </div>
  );
};

export default HomePage;
