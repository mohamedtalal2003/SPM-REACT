import React from 'react'
import SearchBar from '../Btns/SearchBar'
import Btn from '../Btns/Btn'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Departments/Departments.css'

function HeadOfDepartments() {
  return (
    <div className='HeadOfDepartments'>
        <h3 style={{fontFamily:'fantasy'}}>Faculty</h3>
        <div className='HeadOfDepartmentsBtns'>
           <SearchBar/>
          <button class="btn btn-secondary rounded-2">
               <i class="bi bi-pencil"></i>
              <p> Add new department</p>
        </button>
        </div>
    </div>
  )
}

export default HeadOfDepartments