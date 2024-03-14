

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
      <div className="ms-3">
        <Link to="/">
          <img
            src="../ZIN.png"
            style={{ height: "50px", width: "180px" }}
            className=" mt-2  ms-4  "
            alt="CoolBrand"
          />
        </Link>
      </div>
      <div className="m-3">
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
