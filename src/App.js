import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // contains Sidenav and Navbar
import Home from './Home/Home';
import Courses from './Courses/Courses';
import All from './Courses/All';
import AnnouncedCourses from './Courses/AnnouncedCourses'
import UnannouncedCourses from './Courses/UnannouncedCourses';
import Departments from './Departments/Departments';
import HomeForInstructor from './HomeForInstructor/HomeForInstructor';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
              <Route index  element={<All/>} />
              <Route path="AnnouncedCourses" element={<AnnouncedCourses/>} />
              <Route path="UnannouncedCourses" element={<UnannouncedCourses/>} />
          </Route>
          <Route path='/Departments' element={<Departments/>}/>
          <Route path='/inst' element={<HomeForInstructor/>}/>
        </Route> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
