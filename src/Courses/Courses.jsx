import React from 'react'
import {Outlet} from 'react-router-dom';
import Box from './Box';
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Courses/Courses.css'
export default function Courses() {
  return (
    <section className='courses'>
        <div className='BoxContinar'>
           <Box link="/courses" text='All' />
           <Box link="/courses/AnnouncedCourses" text='Announced Courses' />
           <Box link="/courses/UnannouncedCourses" text='Unannounced Courses' />
        </div>
      
       <Outlet/>
    </section>
  )
}
