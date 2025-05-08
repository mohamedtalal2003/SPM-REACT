import { Button } from 'bootstrap'
import React from 'react'
import RowOfTable from './RowOfTable'
import { useState } from 'react'
import Box from './Box'
import './LetterGrades.css'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/LetterGrades/LetterGrades.css'
const Items = [
    { CourseId: '1',Name:'mohamed', CourseCode: 'Item 1',Grade:'54',Letter:'GG', },
    { CourseId: '2',Name:'ahmed', CourseCode: 'Item 2',Grade:'25',Letter:'GG', },
    { CourseId: '3', Name:'omer',CourseCode: 'Item 3',Grade:'78',Letter:'GG',},
  ]
export default function LetterGrades() {
     const [selectedIds, setSelectedIds] = useState([]);
    
        const handleCheckboxChange = (event) => {
          const id = event.target.value;
          if (event.target.checked) {
            // Add id
            setSelectedIds((prev) => [...prev, id]);
          } else {
            // Remove id
            setSelectedIds((prev) => prev.filter((item) => item !== id));
          }
    
        };
  return (
    <section className='LetterGrades'>
        <div className='BtnContainer'>
            <Box link='' text='announce letter grade'/>
            <Box link='' text='announce new letter grade'/>
        </div>
          <section className='InnerLetterGrades'>
            <div className='BtnContainer'>
              <button></button>
              <button></button>
            </div>
            <div className="Thetable" id="Thetable">
        
        {Items.map((item) => (
          <RowOfTable
            key={`${item.CourseId}-${item.Name}`}
            CourseId={item.CourseId}
            Name={item.Name}
            CourseCode={item.CourseCode} // Adjust if 'courseCode' is meant to be something else
            Grade={item.Grade}
            Letter={item.Letter}
            courseRoom={"N/A"} // Assuming no room is given; replace as needed
            selectedIds={selectedIds}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
  
        </div>
          </section>
    </section>
  )
}
