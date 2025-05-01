import React from 'react'
import SearchBar from '../Btns/SearchBar'
import Btn from '../Btns/Btn'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Departments/Departments.css'

function HeadOfDepartments() {
  return (
    <div className='HeadOfDepartments'>
        <h1>Faculty</h1>
        <div className='HeadOfDepartmentsBtns'>
           <SearchBar/>
           <Btn/>
        </div>
    </div>
  )
}

export default HeadOfDepartments