import React from 'react'
import RowOfTable from './RowOfTable'
import InfoCard from './InfoCard' 
import { useState,useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Home/Home.css'
import axios from 'axios';

const Items = [
  { CourseId: '1', courseName: 'Item 1',courseCode:'courseCode',courseInstructor:'instructor',courseRoom:'A212', },
  { CourseId: '2', courseName: 'Item 2',courseCode:'courseCode',courseInstructor:'instructor',courseRoom:'A212', },
  { CourseId: '3', courseName: 'Item 3',courseCode:'courseCode',courseInstructor:'instructor',courseRoom:'A212', },
]

export default function Home() {
  const [selectedIds, setSelectedIds] = useState([]);

    const handleCheckboxChange = (event) => {
      const id = event.target.value;
    
      if (event.target.checked) {
        // Add id
        setSelectedIds((prev) => [...prev, id]);
      } else {
        // Remove id
        setSelectedIds((prev) => prev.filter((item) => item !== id));
      }
    };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>

      <div className="InfoCardsContiner">
        <InfoCard link="/courses" title="All courses" number="23"/>
        <InfoCard link="/courses/AnnouncedCourses" title="unannounsed Courses" number="1"/>
        <InfoCard link="/courses/UnannouncedCourses" title="All Depertment" number="15"/>
      </div>

    
    <section className="theList">
      <nav className="ControlOfTheList">
        <button className="btn btn-secondary rounded-1">
          <i className="bi bi-filetype-pdf"></i>
          Export as Pdf
        </button>
        <button className="btn btn-secondary rounded-1">
          <i className="bi bi-filetype-xlsx"></i>
          Export as Exel
        </button>
        <button className="btn btn-danger rounded-1">
          <i className="bi bi-trash-fill me-2"></i>
          Delete
        </button>
        <button style={{marginLeft:"10%"}} className="btn btn-secondary rounded-1">
          <i className="bi bi-filter"></i>
          Filter
        </button>
        <div className="searchbar">
          <input type="search" />
          <i className="bi bi-search"></i>
        </div>

        <button style={{backgroundColor:'#090029'}} className="btn btn-secondary rounded-1">
        <i class="bi bi-upload"></i>
          Upload file
        </button>
        <button style={{backgroundColor:'#2b1e1b'}} className="btn btn-secondary rounded-1">
        <i class="bi bi-pencil-square"></i>
          Add Manulay
        </button>
      </nav>

      <div className="Thetable" id="Thetable">
        
      {Items.map((item)=>( <RowOfTable key={item.CourseId} CourseId={item.CourseId} courseName={item.courseName} courseCode={item.courseCode} courseInstructor={item.courseInstructor} courseRoom={item.courseRoom} selectedIds={selectedIds}
           handleCheckboxChange={handleCheckboxChange} />))};
      </div>
    </section>
    </>
  )
}
