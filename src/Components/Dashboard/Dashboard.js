import React from "react";
import Barchart from "../Charts/Barchart";
import Linechart from "../Charts/Linechart";
import Piechart from "../Charts/Piechart";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row shadow  m-2">
        
      
          <div className="rounded-2  text-light shadow m-3  p-5 col-12 col-lg col-md bg-warning d-flex justify-content-around">
            <img
              src="../01.png"
              alt="log"
              style={{ height: "50px", width: "50px" }}
            />
            <div>
              <h4 className="text-center">ZING</h4>
              <h5 className="text-center">2917</h5>
            </div>
          </div>

          <div className="rounded-2  text-light shadow m-3   p-5  col-12 col-lg col-md bg-success d-flex justify-content-around">
            <img
              src="../02.png"
              alt="logo"
              style={{ height: "50px", width: "50px" }}
            />
            <div>
              <h4 className="text-center">ATRANGI</h4>
              <h5 className="text-center">11</h5>
            </div>
          </div>

          <div className="rounded-2  text-light shadow m-3  col-12 p-5 col-lg col-md bg-info d-flex justify-content-around">
            <img
              src="../02.png"
              alt="logo"
              style={{ height: "50px", width: "50px" }}
            />
            <div>
              <h4 className="text-center">STOCHOS</h4>
              <h5 className="text-center">143 </h5>
            </div>
          </div>

          <div className="rounded-2  text-light shadow m-3 p-5  col-12 col-lg col-md bg-danger d-flex justify-content-around ">
            <img
              src="../02.png"
              alt="logo"
              style={{ height: "50px", width: "50px" }}
            />
            <div>
              <h4 className="text-center">SPEEDPAY</h4>
              <h5 className="text-center">23</h5>
            </div>
          </div>
         </div>
        
        <div div className="row  m-2">
          <div className="col card ">
            <Barchart />
          </div>
        </div>
          <div className="row m-2">
            <div className="col d-flex card shadow m-1">
              <Piechart />
            </div>
            <div className="col d-flex card shadow m-1">
              <Piechart />
            </div>
          </div>
          <div className="row m-2">
            <div className="col card  m-1">
              <Linechart />
            </div>
            </div>
       
      </div>
    </>
  );
};

export default Dashboard;
