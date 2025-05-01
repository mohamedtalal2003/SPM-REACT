import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidenav from './Sidenav/Sidenav';
import Navbar from './Navbar/Navbar';

function Layout() {
  return (
    <>
      <Sidenav />
      <Navbar />
      
        <Outlet />
     
    </>
  );
}

export default Layout;
