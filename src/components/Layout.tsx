import React, { FC } from 'react';
import NavComponent from './NavComponent/NavComponent';
import HeaderComponent from './SearchBlock/SearchBlock';
import { Outlet } from 'react-router';
import Footer from './FooterComponent/Footer';
type LayoutProps = {
  input: React.ChangeEventHandler<HTMLInputElement>;
};
const Layout: FC<LayoutProps> = ({ input }) => {
  return (
    <div>
      <NavComponent input={input} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
