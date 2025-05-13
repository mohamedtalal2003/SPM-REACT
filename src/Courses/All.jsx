import React, { useState, useEffect } from 'react';
import CoursesRow from './CoursesRow';
import SearchBar from '../Btns/SearchBar';
import AddManulayForm from './AddManulayForm';
import axios from 'axios';

export default function All() {
  const [Addmanualyopener, setAddmanualyopener] = useState(false);
  const [coursesListData, setCoursesListData] = useState([]); // State to hold course data
   const [onSearchResult, setOnSearchResult] = useState('');

  // Function to fetch course data
  const GetFunc = () => {
    axios
      .get('http://localhost:3000/secretary/courses')
      .then((response) => {
        setCoursesListData(response.data); // Set the fetched data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
   const [selectedIds, setSelectedIds] = useState([]); // State to hold selected course IDs
   const handleCheckboxChange = (event) => {
    const id = event.target.value;
    console.log(id);
    if (event.target.checked) {
      // Add id
      setSelectedIds((prev) => [...prev, id]);
    } else {
      // Remove id
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }}
  // Fetch data when the component mounts
  useEffect(() => {
    GetFunc();
  }, []);

  return (
    <div className="theList theListofcourses right">
      <nav className="ControlOfTheList">
        <button className="btn btn-danger rounded-1">
          <i className="bi bi-trash-fill me-2"></i>
          Button
        </button>
        <button style={{ width: '10%' }} className="btn btn-secondary rounded-1">
          <i className="bi bi-filter"></i>
          filter
        </button>
        <SearchBar List={coursesListData} onSearchResult={setOnSearchResult}/>

        <button
          onClick={() => setAddmanualyopener(true)}
          style={{ backgroundColor: '#0b0631' }}
          className="btn btn-secondary rounded-2"
        >
          <div className="p-4 bg-indigo-950 rounded shadow-md inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-file-earmark-text"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
          </div>
          <span className="text-white">Add new course</span>
        </button>
      </nav>
      <div className="Thetable Thetableofcourses" id="Thetable">
        {/* Iterate over coursesListData */}
     {(Array.isArray(onSearchResult) && onSearchResult.length > 0 ? onSearchResult : coursesListData).map((item) => (
          <CoursesRow
            key={item.id}
            CourseId={item.id}
            courseName={item.name}
            courseInstructor={item.instructor}
            courseRoom={item.room || 'N/A'} // Assuming room is optional
            courseDate={item.date || 'N/A'} // Assuming date is optional
            courseTime={item.time || 'N/A'} // Assuming time is optional
            dateModified={item.dateModified || 'N/A'} // Assuming dateModified is optional
          />
        ))}
      </div>
      <AddManulayForm
        Addmanualyopener={Addmanualyopener}
        setAddmanualyopener={setAddmanualyopener}
      />
    </div>
  );
}