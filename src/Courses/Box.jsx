import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Courses/Courses.css'
function Box(props) {


  return (
    <NavLink to={props.link} className='Box'>
        <p>{props.text}</p>
    </NavLink>
  )
}

export default Box