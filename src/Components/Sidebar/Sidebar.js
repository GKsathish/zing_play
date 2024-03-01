import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setShowSubmenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleSubmenu = (title) => {
    if (activeSubMenu === title) {
      setShowSubmenu(!showSubmenu);
    } else {
      setActiveSubMenu(title);
      setShowSubmenu(true);
    }
  };
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  const sidedata = [
    {
      title: "Dashboard",
      path: "/",
      icon: <i className="bi bi-house mx-2"></i>,
      cName: location.pathname === "/" ? "nav-text active" : "nav-text",
    },
    {
      title: "Home",
      path: "/Home",
      icon: <i className="bi bi-house mx-2"></i>,
      cName: location.pathname === "/Home" ? "nav-text active" : "nav-text",
      submenus: [
        { title: "Category", path: "/Category" },
        { title: "Article", path: "/Article" },
      ],
    },

    {
      title: "User Configuration",
      path: "/UserConfiguration",
      icon: <i className="bi bi-file-earmark-image  mx-2"></i>,
      cName:
        location.pathname === "/UserConfiguration"
          ? "nav-text active"
          : "nav-text",
         
    },
    {
      title: "Service Configuration",
      path: "/ServiceConfiguration",
      icon: <i className="bi bi-camera-video mx-2"></i>,
      cName:
        location.pathname === "/ServiceConfiguration"
          ? "nav-text active"
          : "nav-text",
      submenus: [
        { title: "Service Creation", path: "/Admin" },
        { title: "Permissions", path: "/user-permissions" },
      ],
    },
    {
      title: "Channel Management",
      path: "/ChannelManagement",
      icon: <i className="bi bi-quote mx-2"></i>,
      cName:
        location.pathname === "/ChannelManagement"
          ? "nav-text active"
          : "nav-text",
    },
    {
      title: "Promotion Management",
      path: "/PromotionManagement",
      icon: <i className="bi bi-newspaper mx-2"></i>,
      cName:
        location.pathname === "/PromotionManagement"
          ? "nav-text active"
          : "nav-text",
      submenus: [
        {
          title: "Post",
          path: "/AddPost",
          icon: (
            <i className="bi bi-newspaper mx-2 " style={{ color: "black" }}></i>
          )},
          {
            title: "User Creation",
            path: "/usercreation",
            icon: (
              <i className="bi bi-newspaper mx-2 " style={{ color: "black" }}></i>
            ),
        },
      ],
    },
  ];
  return (
    <div
      className="d-flex justify-content-between flex-column text-black vh-100 pe-5"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="ms-3">
        <Link to="/">
          <img
            src="../ZIN.png"
            style={{ height: "50px", width: "180px" }}
            className=" mt-2  ms-4  "
            alt="CoolBrand"
          />
        </Link>

        {sidedata.map((item, index) => {
          const { title, path, icon, cName, submenus } = item;
          return (
            <React.Fragment key={index}>
              <li
                className={`my-5 ${cName} list-unstyled`}
                onClick={() => toggleSubmenu(title)}
              >
                <Link to={path}>
                  {icon}
                  <span>{title}</span>
                </Link>
                {showSubmenu && activeSubMenu === title && submenus && (
                  <ul className="list-unstyled m-1">
                    {submenus.map((submenu, subIndex) => (
                      <li key={subIndex} className="my-2 mx-5">
                        <Link to={submenu.path}>{submenu.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </div>
      <div className="d-md-none m-3">
        <span className=" text-light text-center" onClick={Logout}>
          <i className="bi bi-people text-center mx-2"></i> Log out
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
