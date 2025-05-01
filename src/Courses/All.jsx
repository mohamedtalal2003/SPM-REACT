import React from 'react'
import Courses from './Courses'
import CoursesRow from './CoursesRow'
import SearchBar from '../Btns/SearchBar'

export default function All() {
  return (
    <div class="theList   theListofcourses right ">
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

    <button class="btn btn-secondary rounded-2">
    <i class="bi bi-pencil-square"></i>

    Button
    </button>
                
    </nav>
    <div class="Thetable Thetableofcourses" id="Thetable">
        <CoursesRow/>

    </div>
  </div>
  )
}
