import React, { useState } from "react";

const Serviceedit = () => {
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceLogo: "",
    serviceKey: "",
    serviceOrder: "",
    diplinkLogin: "",
    remarks: "",
    packageName: "",
    hubServiceKey: "",
    subscriptionApiUrl: "",
    diplinkUrl: "",
    languages: "",
    content: "",
    planPage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://zing.speedpayplus.com:22551/api/save-service", {
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
                <label htmlFor="serviceName">Service Name (M):</label>
                <input
                  type="text"
                  name="serviceName"
                  id="serviceName"
                  className="form-control"
                  value={formData.serviceName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-1">
                <label htmlFor="serviceLogo">Service Logo (M):</label>
                <input
                  type="file"
                  name="serviceLogo"
                  id="serviceLogo"
                  className="form-control"
                  value={formData.serviceLogo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-1">
                <label htmlFor="serviceKey">Service Key (M):</label>
                <input
                  type="text"
                  name="serviceKey"
                  id="serviceKey"
                  className="form-control"
                  value={formData.serviceKey}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-1">
                <label htmlFor="serviceOrder">Service Order (M):</label>
                <input
                  type="text"
                  name="serviceOrder"
                  id="serviceOrder"
                  className="form-control"
                  value={formData.serviceOrder}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-1">
                <label htmlFor="diplinkLogin">Diplink Login (M):</label>
                <input
                  type="text"
                  name="diplinkLogin"
                  id="diplinkLogin"
                  className="form-control"
                  value={formData.diplinkLogin}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-1">
                <label htmlFor="remarks">Remarks (M):</label>
                <textarea
                  name="remarks"
                  id="remarks"
                  className="form-control"
                  value={formData.remarks}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-1">
                <label htmlFor="packageName">Package Name (O):</label>
                <input
                  type="text"
                  name="packageName"
                  id="packageName"
                  className="form-control"
                  value={formData.packageName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group m-1">
                <label htmlFor="hubServiceKey">hubServiceKey (O):</label>
                <input
                  type="text"
                  name="hubServiceKey"
                  id="hubServiceKey"
                  className="form-control"
                  value={formData.hubServiceKey}
                  onChange={handleChange}
                />
              </div>{" "}
              <div className="form-group m-1">
                <label htmlFor="subscriptionApiUrl">
                  subscriptionApiUrl (O):
                </label>
                <input
                  type="url"
                  name="subscriptionApiUrl"
                  id="subscriptionApiUrl"
                  className="form-control"
                  value={formData.subscriptionApiUrl}
                  onChange={handleChange}
                />
              </div>{" "}
              <div className="form-group m-1">
                <label htmlFor="diplinkUrl">diplinkUrl (O):</label>
                <input
                  type="url"
                  name="diplinkUrl"
                  id="diplinkUrl"
                  className="form-control"
                  value={formData.diplinkUrl}
                  onChange={handleChange}
                />
              </div>{" "}
              <div className="form-group m-1">
                <label htmlFor="languages">languages (O):</label>
                <input
                  type="text"
                  name="languages"
                  id="languages"
                  className="form-control"
                  value={formData.languages}
                  onChange={handleChange}
                />
              </div>{" "}
              <div className="form-group m-1">
                <label htmlFor="content">Package Name (O):</label>
                <input
                  type="text"
                  name="content"
                  id="content"
                  className="form-control"
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group m-1">
                <label htmlFor="planPage">Package Name (O):</label>
                <input
                  type="text"
                  name="planPage"
                  id="planPage"
                  className="form-control"
                  value={formData.planPage}
                  onChange={handleChange}
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

export default Serviceedit;
