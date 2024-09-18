// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Git_Project from '../pages/Git_Project'
// import Git_Workflow from '../pages/Git_Workflow'


// export default function NavInfo() {
//   return (
//     <>
//       <div>Rishabh Jain - Git Knowledge</div>
//       <Routes>
//         <Route path='/git-project-start' element={<Git_Project />}></Route>
//         <Route path='/git-project-workflow' element={<Git_Workflow />}></Route>
//       </Routes>
//       <div className="">contact</div>
//       <div className="">github</div>
//     </>
//   )
// }

import React from 'react';
import '../css/Navbar.css'; // Import the CSS file for styling

const NavInfo = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Company Name</h1>
      </div>
      <div className="navbar-links">
        <a href="#contact" className="navbar-btn">
          Contact
        </a>
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="navbar-btn">
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default NavInfo;
