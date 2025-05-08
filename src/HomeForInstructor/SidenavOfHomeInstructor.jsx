import React from 'react'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/HomeForInstructor/HomeForIstructor.css'
export default function SidenavOfHomeInstructor() {
  return (
    <div className='SidenavOfHomeInstructor' >
      <div className='InstructorBoxContiner'>
        <div className='SidenavOfHomeInstructorBox'>
        <i className="bi bi-circle"></i><span style={{position:'relative',left:'-15px'}}>A+</span>
        </div>
        <p>annonce letter grade</p>
      </div>
      <div className='InstructorBoxContiner'>
        <div className='SidenavOfHomeInstructorBox'>
        <i className="bi bi-trash-fill me-2"></i>
        </div>
        <p>annonce letter grade</p>
      </div>
      <div className='InstructorBoxContiner'>
        <div className='SidenavOfHomeInstructorBox'>
        <i className="bi bi-trash-fill me-2"></i>
        </div>
        <p>annonce letter grade</p>
      </div>
      <div className='InstructorBoxContiner'>
        <div className='SidenavOfHomeInstructorBox'>
        <i className="bi bi-trash-fill me-2"></i>
        </div>
        <p>annonce letter grade</p>
      </div>
    </div>
  )
}
