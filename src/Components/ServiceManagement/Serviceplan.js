import React, { useState } from "react";

const Serviceplan = () => {
  const [formData, setFormData] = useState({
    denomination: "",
    service_id: "",
    plan_desc: "",
    plan_validity: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://zing.speedpayplus.com:22551/api/config-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col ">
          <div className="card  shadow p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group m-1">
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
              <div className="form-group m-1">
                <label htmlFor="service_id">Service ID (M):</label>
                <input
                  type="text"
                  name="service_id"
                  id="service_id"
                  className="form-control"
                  value={formData.service_id}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-1">
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
              <div className="form-group m-1">
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceplan;
