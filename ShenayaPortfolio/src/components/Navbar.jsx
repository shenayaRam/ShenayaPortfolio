// import React from "react";
// import "../styles/Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//         <div className="nav-left">
//       <ul>
//         {/* <li><a href="#home">Home</a></li> */}
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#project">Projects</a></li>
//         <li><a href="#marketing">Marketing Portfolio</a></li> 
//       </ul>
// </div>
//     </nav>
//   );
// }

import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#project">Projects</a></li> {/* note "projects" */}
          <li><a href="#marketing">Marketing Portfolio</a></li>
        </ul>
      </div>
    </nav>
  );
}
