import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Posts from "./Components/Posts/Posts";

import Login from "./Components/Login/Login";
import "./App.css";
import Addpost from "./Components/Posts/AddPost";
import EditPost from "./Components/Posts/EditPost";
import View from "./Components/Posts/View";
import Admin from "./Components/Posts/Admin";
import UserCreation from "./Components/Login/UserCreation";
import Home from "./Components/Home/Home";
import Category from "./Components/Home/Category";
import Article from "./Components/Home/Article";

function App() {
  const isLoggedIn = localStorage.getItem("islogin");
  const [toggleed, setToggleed] = useState(false);
  function toggle() {
    setToggleed(!toggleed);
  }

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setToggleed(true);
    }
  }, []);

  return (
    <Router>
      <div className="d-flex vh-100 p-0 m-0">
        {isLoggedIn && (
          <div className={toggleed ? "d-none" : "w-auto h-auto"}>
            <Sidebar />
          </div>
        )}
        <div className="col-lg col-md col-sm overflow-auto position-sticky">
          {isLoggedIn && (
            <div>
              <Navbar toggle={toggle} />
            </div>
          )}
         <div className="content">
            <Routes>
              {isLoggedIn ? (
                <>
                  {/* <Route path="/" element={<Navigate to="/Dashboard" />} /> */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Posts" element={<Posts />} />
                  <Route path="/Addpost" element={<Addpost />} />
                  <Route path="/EditPost" element={<EditPost />} />
                  <Route path="/View" element={<View />} />
                  <Route path="/Admin" element={<Admin />} />
                  <Route path="/usercreation" element={<UserCreation />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path ="/Article" element={<Article />} />
                  <Route path ="/Category" element={<Category />} />
                </>
              ) : (
                <Route path="/" element={<Login />} />
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

