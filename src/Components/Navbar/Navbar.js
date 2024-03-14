import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const navigate=useNavigate();
  const Logout=()=>{
    localStorage.clear();
    window.location.reload();
    navigate('/');
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light   d-flex justify-content-between "
      style={{ backgroundColor: "rgb(0 0 0 / 96%)" }}
    >
      <div className="container-fluid d-flex justify-content-between">
        <div onClick={toggle} className="bar">
          <span>
          
            <i className="bi bi-list h-100 w-100 text-dark "></i>
          </span>
        </div>
        {/* <div className="d-md-none d-lg-none d-xl-none">
  <img src="./ATSMALL.png" alt="mobilelogo" height='35' width='35'/>
  </div> */}


        <nav className="navbar navbar-expand-lg navbar-light">

        <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav ">
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle  text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="bi bi-person-circle text-dark" ></i>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {/* <Link className="dropdown-item" to="#">Profile</Link> */}
          <span className="dropdown-item" to="/">Change Password</span>
          <div className="dropdown-divider"></div>
          <span className="dropdown-item"  onClick={Logout}>Logout</span>
        </div>
      </li>
    </ul>
         </div>
        </nav>
      </div>
  
    </nav>
  );
};

export default Navbar;

// Navbar.js
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = ({ toggleSidebar }) => {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//     window.location.reload();
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between" style={{ backgroundColor: "rgb(0 0 0 / 96%)" }}>
//       <div className="container-fluid d-flex justify-content-between">
//         <div onClick={toggleSidebar} className="bar">
//           <span>
//             <i className="bi bi-list h-100 w-100 text-dark "></i>
//           </span>
//         </div>

//         <nav className="navbar navbar-expand-lg navbar-light">
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <ul className="navbar-nav">
//               <li className="nav-item dropdown">
//               <div className="dropdown-divider"></div>
//                   <span className="dropdown-item" onClick={logout}>Logout</span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
