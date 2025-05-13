import React from 'react'
import CoursesRow from './CoursesRow'
import SearchBar from '../Btns/SearchBar'
import { BsPencilSquare } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import AddManulayForm from './AddManulayForm';
export default function AnnouncedCourses() {
    const [Addmanualyopener, setAddmanualyopener] = useState(false);
      const [selectedIds, setSelectedIds] = useState([]);
      const [coursesListData, setCoursesListData] = useState([]);

          const GetFunc=()=>{
              axios.get('http://localhost:3000/secretary/courses')
              .then(response => {
                // console.log(response.data)
                setCoursesListData(response.data);
               
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              }) ;
             }
  return (
        <div class="theList theListofcourses right">
    <nav class="ControlOfTheList">     
    <button class="btn btn-danger rounded-2">
    <i class="bi bi-trash-fill me-2"></i>
    Button
    </button>
    <button class="btn btn-secondary rounded-2">
    <i class="bi bi-filter"></i>
    Button
    </button>
     <SearchBar/>
    <button onClick={()=>setAddmanualyopener(true)} style={{backgroundColor:'#0b0631'}} class="btn btn-secondary rounded-2">
      <div className="p-4 bg-indigo-950 rounded shadow-md inline-block">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              fill="white" 
              className="bi bi-file-earmark-text" 
              viewBox="0 0 16 16"
            >
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
          </div>
          <span className="text-white">Add new course</span>
    </button>
                
    </nav>
    <div class="Thetable Thetableofcourses" id="Thetable">
        <CoursesRow/>
        <CoursesRow/>
    </div>
     <AddManulayForm Addmanualyopener={Addmanualyopener} setAddmanualyopener={setAddmanualyopener} />
  </div>
  )
}
