import React from 'react'
import Logo from 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Sidenav/22405fa43d89aeb0ddf96d741a2776df38abbdfe.png'
import LogoOut from 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Sidenav/image.png'
import 'C:/Users/lolo/Documents/SPM-REACT/spm/src/Sidenav/Sidenav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function SidenavForInstructor() {
  return (
    <nav id="SideNav" className="SideNav sidebar">
    <div className="upperOfSideNav">
      <img src={Logo} className="iconOfScool" alt="School Icon" />
      <p>RexEdu</p>
    </div>
    <ul>
      <li>
        <i className="bi bi-grid-fill"></i>
        <Link to="/instructor" >Home</Link>
      </li>
      <li>
      <i className="bi bi-circle"></i><span style={{position:'relative',left:'-15px'}}>A+</span>
        <Link to="/lettergrades" >Letter Grade</Link>
      </li>
      <li>
        <i className="bi bi-clipboard-check"></i>
        <Link to="/approvals" >Approvel</Link>
      </li>
      <li>
        <i className="bi bi-clipboard-check"></i>
        <Link to="/Inbox" >Inbox</Link>
      </li>

    </ul>
    <div className="logoutdiv">
      <a href="*">
        <img src={LogoOut} alt="Logout Icon" />
        <p style={{ margin: 0 }}>log out</p>
      </a>
    </div>
  </nav>
  )
}

export default SidenavForInstructor