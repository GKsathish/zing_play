import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://stochos.speedpayplus.com:1234/api/portal-user-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          service: "ZINGPLAY",
        }),
      });
      const res = await response.json()
     
      if (res.errorCode == 200) {
        localStorage.setItem("islogin", true);
        localStorage.setItem("user", res.data.username);
        // window.location.reload();
        navigate("/");
      } else {
        // Handle invalid login credentials or other errors
        console.error("Login failed");
        window.location.reload();
        // localStorage.setItem("islogin", true);
       
        alert("login failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      window.location.reload();
      // localStorage.setItem("islogin", true);
      alert("login failed");

    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center align-content-center ">
          <div className="row d-flex flex-column justify-content-center align-items-center ">
            <div className="col-md-6 text-center mt-5 mb-3 ">
              <img
                // src="./ZIN.png"
                src="./ZingPlay.png"
                alt="image"
                style={{ height: "90px", width: "200px" }}
              />
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-xl-5 col-12">
            <div
              className="login-wrap p-5 p-md-5"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            >
              <h6 className="text-center">Welcome to <span className="text-warning">ZING PLAY!</span></h6>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group m-3">
                  <label htmlFor="user" className="m-1">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group m-3">
                  <label htmlFor="password" className="m-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-left"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group d-md-flex justify-content-between m-3">
                  <div>
                    <input type="checkbox" />
                    <span className="checkmark "></span>
                    <label className="checkbox-wrap checkbox-primary p-2">
                      Remember Me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded px-4 py-1 loginbtn"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="text-center m-1 p-4">© 2024 ATRANGI</p>
      </div>
    </section>
  );
};

export default Login;

