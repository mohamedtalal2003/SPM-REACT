import React from 'react'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Home/Home.css'
function RowOfTable(props) {
  return (
    

    <div className="rowoftable" key={props.CourseId} id="rowoftable">
    <div className="cheakboxclass">

      <input type="checkbox" value={props.CourseId} onChange={props.handleCheckboxChange} checked={props.selectedIds.includes(props.CourseId)} />
      <p>{props.courseCode}</p>
    </div>
    <p className="courseName">{props.Name}</p>
    <p className="courseInstructor">{props.Grade}</p>
    <p className="ClassRooms">{props.Letter}</p>
  </div>
  )
}

export default RowOfTable