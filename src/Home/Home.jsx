import React from 'react'
import RowOfTable from './RowOfTable'
import InfoCard from './InfoCard' 
import { useState,useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Home/Home.css'
import axios from 'axios';

const Items = [
  { CourseId: '1', courseName: 'Item 1',resitExamId:'courseCode1',courseInstructor:'instructor',courseRoom:'A212', },
  { CourseId: '2', courseName: 'Item 2',resitExamId:'courseCode2',courseInstructor:'instructor',courseRoom:'A212', },
  { CourseId: '3', courseName: 'Item 3',resitExamId:'courseCode3',courseInstructor:'instructor',courseRoom:'A212', },
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
  const [CoursesData, setCoursesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/secretary/courses')
      .then(response => {
        console.log(response.data)
        setCoursesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }) ;
  }, []);
   
    // let id;
    // for (item in selectedIds) {
    //   id =item.id
    //   axios.delete(`http://localhost:3000/secretary/courses/${id}`)
    //   .then(response => {
    //     setCoursesData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
      
    // }
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
        <i className="bi bi-upload"></i>
          Upload file
        </button>
        <button style={{backgroundColor:'#2b1e1b'}} className="btn btn-secondary rounded-1">
        <i className="bi bi-pencil-square"></i>
          Add Manulay
        </button>
      </nav>

      <div className="Thetable" id="Thetable">
        
      {Items.map((item) => (
        <RowOfTable
          key={`${item.CourseId}-${item.resitExamId}`}
          CourseId={item.CourseId}
          courseName={item.courseName}
          courseCode={item.resitExamId} // Adjust if 'courseCode' is meant to be something else
          courseInstructor={item.instructor}
          courseRoom={"N/A"} // Assuming no room is given; replace as needed
          selectedIds={selectedIds}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}

      </div>
      <form className='AddManulay' >
        <h6> Add an new item</h6>
        <label htmlFor="CourseCode">Course Code</label>
        <input type='text' id='CourseCode' name='CourseCode' />
        <label htmlFor="CourseName">Course Name</label>
        <input type='text' id='CourseName' name='CourseName' />
        <label htmlFor="Lecture">Lecture</label>
        <input type='text' id='Lecture' name='Lecture' />
        <label htmlFor="Date">Date</label>
        <input type='text' id='Date' name='Date' />
        <label htmlFor="Time">Time</label>
        <input type='text' id='Time' name='Time' />
        <label htmlFor="ClassRoom">Class Room</label>
        <input type='text' id='ClassRoom' name='ClassRoom' />
        <label htmlFor="Department">Course Code</label>
        <input type='text' id='Department' name='Department' />
        <button>Cancel</button>
        <button>Next </button>
         <button type='submit'></button>
      </form>
    </section>
    </>
  )
}
