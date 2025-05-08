import React from 'react'
import Courses from './Courses'
import CoursesRow from './CoursesRow'
import SearchBar from '../Btns/SearchBar'

export default function All() {
  return (
    <div className="theList   theListofcourses right ">
    <nav className="ControlOfTheList">     
    <button  className="btn btn-danger rounded-1">
    <i className="bi bi-trash-fill me-2"></i>
    Button
    </button>
    <button style={{width:'10%'}} className="btn btn-secondary rounded-1">
    <i className="bi bi-filter"></i>
    filter
    </button>
    <SearchBar/>

    <button style={{position:'absolute',right:'0'}} className="btn btn-secondary rounded-1">
    <i className="bi bi-pencil-square"></i>

    Button
    </button>
                
    </nav>
    <div className="Thetable Thetableofcourses" id="Thetable">
        <CoursesRow/>

    </div>
  </div>
  )
}
