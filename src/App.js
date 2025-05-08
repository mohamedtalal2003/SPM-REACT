import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & main pages
import Layout from './Layout';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import All from './Courses/All';
import AnnouncedCourses from './Courses/AnnouncedCourses';
import UnannouncedCourses from './Courses/UnannouncedCourses';
import Departments from './Departments/Departments';
import HomeForInstructor from './HomeForInstructor/HomeForInstructor';

// Login pages (outside layout)
import FacultySecretary from './Login/FacultySecretary'; // login selection screen
import StudentLogin from './Login/StudentLogin';
import ResitExamEntranceInstructor from './Login/ResitExamEntranceInstructor';
import ResitExam from './Login/ResitExam';
import InstructorLayout from './InstructorLayout';
import LetterGrades from './LetterGrades/LetterGrades'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - No Layout */}
        <Route path="/" element={<ResitExam />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/instructor-login" element={<ResitExamEntranceInstructor />} />
        <Route path="/facultysecretary-login" element={<FacultySecretary />} />

        {/* Protected Routes - With Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route index element={<All />} />
            {/* <Route path='/All' element={<All />} /> */}
            <Route path="AnnouncedCourses" element={<AnnouncedCourses />} />
            <Route path="UnannouncedCourses" element={<UnannouncedCourses />} />
          </Route>
          <Route path="/departments" element={<Departments />} />

        </Route>
        <Route element={<InstructorLayout/>}>
          <Route path="/instructor" element={<HomeForInstructor />} />
          <Route path='/lettergrades' element={<LetterGrades/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
