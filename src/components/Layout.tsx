import NavComponent from './NavComponent/NavComponent';

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
