import React from 'react';
import { Outlet } from 'react-router-dom';
import SidenavForInstructor from './SidenavForInstructor/SidenavForInstructor';
import NavbarForInstructor from './NavbarForInstructor/NavbarForInstructor';

const InstructorLayout = () => (
  <>
    <SidenavForInstructor />
    <NavbarForInstructor />
    <>
      <Outlet />
    </>
  </>
);

export default InstructorLayout;
