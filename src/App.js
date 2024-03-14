import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,useParams,useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./Components/Login/Login";
import "./App.css";
import UserCreation from "./Components/Login/UserCreation";
import Home from "./Components/Home/Home";
import Category from "./Components/Home/Category";
import Article from "./Components/Home/Article";
import Dashboard from "./Components/Dashboard/Dashboard";
import Posts from "./Components/Posts/Posts";
import Addpost from "./Components/Posts/AddPost";
import EditPost from "./Components/Posts/EditPost";
import View from "./Components/Posts/View";
import Admin from "./Components/Posts/Admin";
import Sidebar from "./Components/Sidebar/Sidebar";
import Servicecreation from "./Components/ServiceManagement/Servicecreation";
import Serviceedit from "./Components/ServiceManagement/Serviceedit";
import Serviceplan from "./Components/ServiceManagement/Serviceplan";



function App() {

  const [apiData, setApiData] = useState({});
  // const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  // const { serviceid } = useParams(); // Extracting service_id from URL params
console.log(pathname);
const cleanedServiceId = pathname.substring(1);

  // Fetch API data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // "http://151.51.71.71:2026/portal/get-plan-page",
          // "http://151.51.71.71:2026/portal/get-plan-page",
          "https://stochos.speedpayplus.com:1234/paymentv2/zing-planpage",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // service_id: "24"
              service_id: cleanedServiceId
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        setApiData(data.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);
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
    <>
      <div className="d-flex vh-100 p-0 m-0">
      {isLoggedIn && (
      
          <div className={toggleed ? "d-none" : "w-auto h-auto"}>
            <Sidebar/>
           
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
                  <Route path="/servicecreation" element={<Servicecreation />} />
                  <Route path="/serviceedit" element={<Serviceedit />} />
                  <Route path="/serviceplan" element={<Serviceplan/>} />
                  <Route path="/usercreation" element={<UserCreation />} />
                  <Route path="/:serviceid" element={<Home  apiData={apiData} />} />
                  <Route path="/content/:category/:id" element={<Article apiData={apiData} />} />
                  <Route path="/category/:category/:id" element={<Category  apiData={apiData}/>} />
                </>
               ) : (
                <>
                  <Route path="/" element={<Login />} />
                  <Route path="/:serviceid" element={<Home  apiData={apiData} />} />
                  <Route path="/content/:category/:id" element={<Article apiData={apiData} />} />
                  <Route path="/category/:category/:id" element={<Category  apiData={apiData}/>} />
                </>
              
              )} 
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
