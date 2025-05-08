import React from 'react'
import CoursesRow from './CoursesRow'
import SearchBar from '../Btns/SearchBar'

function UnannouncedCourses() {
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
    <button style={{backgroundColor:'#090029'}} className="btn btn-secondary rounded-1">
        <i class="bi bi-upload"></i>
          Upload file
        </button>
        <button style={{backgroundColor:'#2b1e1b'}} className="btn btn-secondary rounded-1">
        <i class="bi bi-pencil-square"></i>
          Add Manulay
        </button>
    <SearchBar/>

    <button class="btn btn-secondary rounded-2">
    <i class="bi bi-pencil-square"></i>

    Button
    </button>
                
    </nav>
    <div class="Thetable Thetableofcourses" id="Thetable">
        <CoursesRow/>
        <CoursesRow/>
        <CoursesRow/>
        <CoursesRow/>
    </div>
  </div>
  )
}

export default UnannouncedCourses