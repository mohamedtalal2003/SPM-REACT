import React from 'react'
import InfoCard from './InfoCard'
import Lesson from './Lesson'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/HomeForInstructor/HomeForIstructor.css'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Home/Home.css'
const Lessons = [
  {
    code: 'SE302',
    name: 'Software Project Management',
    // No details yet
    date: '',
    time: '',
    classrooms: [],
  },
  {
    code: 'SE202',
    name: 'Software Design and Architecture',
    date: '12.04.2025',
    time: '11:00',
    classrooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
  },
  {
    code: 'COME104',
    name: 'Discrete Mathematics',
    date: '12.04.2025',
    time: '11:00',
    classrooms: ['A-Nermin Tarhan', 'A-Kuleli', 'D-Ayhan Songar'],
  },
];

function HomeForInstructor() {
  return (
    <>

      <div className="InfoCardsContiner">
        <InfoCard link="/courses" title="All courses" number="23"/>
        <InfoCard link="/courses/AnnouncedCourses" title="unannounsed Courses" number="1"/>
        <InfoCard link="/courses/UnannouncedCourses" title="All Depertment" number="15"/>
      </div>

    
    <section className="LessonsContainer">
    <div className='LessonsContainer'>
      {Lessons.map((lessonItem, idx) => (
        <Lesson key={idx} Lesson={lessonItem} />
      ))}
    </div>
    </section>
    </>
  )
}

export default HomeForInstructor;