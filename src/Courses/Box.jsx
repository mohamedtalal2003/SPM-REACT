import React from 'react'
import { Link } from 'react-router-dom'
function Box(props) {


  return (
    <Link to={props.link} className='Box'>
        <p>{props.text}</p>
    </Link>
  )
}

export default Box