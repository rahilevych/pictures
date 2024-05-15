import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import MainBlockComponent from '../../components/MainBlockComponent/MainBlockComponent';
import NavComponent from '../../components/NavComponent/NavComponent';
import Footer from '../../components/FooterComponent/Footer';

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <div className='wrapper'>
      <NavComponent />
      <HeaderComponent />
      <MainBlockComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
