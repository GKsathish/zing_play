import React, { useState } from "react";

const Serviceplan = () => {
  const [formData, setFormData] = useState({
    service_name: " ",
    denomination: " ",
    service_id: " ",
    plan_desc: " ",
    plan_validity: " ",
    plan_logo: "",
    plan_type: " "
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();
    try {
      const response = await fetch(
        "https://zing.speedpayplus.com:22551/api/save-planByServiceId",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      alert(result.data);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col ">
          <div className="card   shadow p-5 m-5 ">
            <form onSubmit={handleSubmit}>
               <div className="row  "> 
                <div className="form-group col-sm-12 col-md-5 col-lg-5 m-auto p-2 ">
                  <label htmlFor="service_name">Service Name (M):</label>
                  <input
                    type="text"
                    name="service_name"
                    value={formData.service_name}
                    placeholder="Service Name"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-sm-12 col-md-5 col-lg-5 m-auto p-2">
                  <label htmlFor="denomination">Denomination (M):</label>
                  <input
                    type="text"
                    name="denomination"
                    id="denomination"
                    className="form-control"
                    value={formData.denomination}
                    onChange={handleChange}
                    required
                  />
                </div>
              {/* </div> */}
              {/* <div className="row justify-content-center"> */}
              <div className="form-group col-sm-12 col-md-5 col-lg-5 m-auto p-2 ">
                  <label htmlFor="service_id">Service ID (M):</label>
                  <input
                    type="number"
                    name="service_id"
                    id="service_id"
                    className="form-control"
                    value={formData.service_id}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-sm-12 col-md-5 col-lg-5 m-auto p-2 ">
                  <label htmlFor="plan_desc">Plan Description (M):</label>
                  <input
                    type="text"
                    name="plan_desc"
                    id="plan_desc"
                    className="form-control"
                    value={formData.plan_desc}
                    onChange={handleChange}
                    required
                  />
                </div>
         
              <div className="form-group col-sm-12 col-md-5 col-lg-5 m-auto p-2">
                  <label htmlFor="plan_validity">Plan Validity (M):</label>
                  <input
                    type="text"
                    name="plan_validity"
                    id="plan_validity"
                    className="form-control"
                    value={formData.plan_validity}
                    onChange={handleChange}
                    required
                  />
                </div>
               
                <div className="form-group col-sm-12 col-md-5 col-lg-5 m-auto p-2">
                <label htmlFor="plan_type">Plan Type (M):</label>
                {/* Input field for plan_type */}
                <input
                  type="text"
                  name="plan_type"
                  value={formData.plan_type}
                  onChange={handleChange}
                  placeholder="Plan Type"
                  className="form-control"
                  required
                />
              </div>
              {/* </div> */}
              {/* <div className="row justify-content-center"> */}
            
              <div className="form-group col-sm-12 col-md-5 col-lg-5 m-auto p-2">
                  <label htmlFor="plan_logo">Plan Logo (M):</label>
                  <input
                    type="file"
                    name="plan_logo"
                    value={formData.plan_logo}
                    onChange={handleChange}
                    placeholder="Plan Logo"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-5 col-sm-12 m-auto p-4">
            <button type="submit" className="btn btn-success  m-auto   ">
                Submit
              </button>
            </div>
              </div> 
           
            
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceplan;
