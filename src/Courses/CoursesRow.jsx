import React from 'react'

export default function CoursesRow() {
  return (
    <div className="rowoftable" id="rowoftable">
    <div className="cheakboxclassName">
        <input type="checkbox" value="thevalue" />
        <p> course code</p>
    </div>
    <p className="courseName">course name</p>
    <p className="courseInstructor">course instructor</p>
    <time datetime="2025-04-20">April 20, 2025</time>
    <time datetime="10:00">10:00 AM</time>
    <p className="classNameRooms">className rome</p>
    <time datetime="2025-04-20">April 20, 2025</time>
    <p>announcd</p>
    <i className="bi bi-pencil-square"></i>
    <i className="bi bi-trash3-fill"></i>
</div>

  )
}
