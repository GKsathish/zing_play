import SidebarItem from "./SidebarItem";
import items from "./Data/sidebar";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  //   const location = useLocation();
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="m-3">
        <Link to="/">
          <img
             src="../ZingPlay.png"
            // src="../zin.png"
            style={{ height: "50px", width: "200px" }}
            className="   mb-3 mx-3  "
            alt="CoolBrand"
          />
        </Link>
      </div>
      <div className="my-2">
        {/* <i className="bi bi-x-circle-fill text-right text-danger mx-2 d-flex justify-content-end  fs-2"></i> */}
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>

      <div className="d-md-none m-3">
        <span className=" text-light text-center" onClick={Logout}>
          <i className="bi bi-people text-center mx-2"></i> Log out
        </span>
      </div>
    </div>
  );
}
// Sidebar.js
// import React from "react";
// import { Link } from "react-router-dom";
// import SidebarItem from "./SidebarItem";
// import items from "./Data/sidebar";

// const Sidebar = () => {
//   return (
//     <div className="sidebar" style={{ position: "fixed", zIndex: "999", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
//       <div className="ms-3" style={{ paddingTop: "50px" }}>
//         <Link to="/">
//           <img src="../ZIN.png" style={{ height: "50px", width: "180px" }} className=" mt-2  ms-4" alt="CoolBrand" />
//         </Link>
//       </div>
//       <div className="m-3">
//         {items.map((item, index) => (
//           <SidebarItem key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
