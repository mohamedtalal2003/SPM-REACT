import React from 'react'
import { Link } from 'react-router-dom'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Departments/Departments.css'
function Box(props) {


  return (
    <Link to={props.link} className='DepartmentsBox'>
        <p>{props.text}</p>
    </Link>
  )
}

export default Box