import React, { FC } from 'react';
import NavComponent from './NavComponent/NavComponent';
import HeaderComponent from './SearchBlock/SearchBlock';
import { Outlet } from 'react-router';
import Footer from './FooterComponent/Footer';

function Layout() {
  return (
    <div>
      <NavComponent />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
