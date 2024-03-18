import React, { useState } from "react";

const Servicecreation = () => {
  const user=localStorage.getItem('user');
  console.log(user);
  const [formData, setFormData] = useState({
    service_name: "",
    service_logo: "",
    service_key: "",
    service_order: "",
    diplink_login: "",
    remarks: "",
    package_name: "",
    hub_servicekey: "",
    subscription_api_url: "",
    diplink_url: "",
    languages: "",
    content: "",
    plan_page_url: "",
    username:user
    
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log(formData)
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
        throw  new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      alert(result.data)
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="row m-2 ">
        <div className="col ">
          <div className="card  shadow p-5">
            <form onSubmit={handleSubmit}>
           <div className="row m-2">
           <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5  ">

                <label htmlFor="serviceName">Service Name (M):</label>
                <input
                  type="text"
                  name="service_name"
                  id="servicename"
                  className="form-control"
                  value={formData.service_name}
                  onChange={handleChange}
                  placeholder="service name"
                  required
                />
              </div>
              <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

                <label htmlFor="service_logo">Service Logo (M):</label>
                <input
                  type="file"
                  name="service_logo"
                  id="service_logo"
                  className="form-control"
                  value={formData.service_logo}
                  onChange={handleChange}
                  placeholder="servicelogo"
                  required
                />
              </div>
           </div>
            <div className="row m-2">
            <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

                <label htmlFor="service_key">Service Key (M):</label>
                <input
                  type="text"
                  name="service_key"
                  id="service_key"
                  className="form-control col"
                  value={formData.service_key}
                  onChange={handleChange}
                  placeholder="servicekey"
                  required
                />
              </div>
              <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

                <label htmlFor="service_order">Service Order (M):</label>
                <input
                  type="text"
                  name="service_order"
                  id="service_order"
                  className="form-control"
                  value={formData.service_order}
                  onChange={handleChange}
                  placeholder="serviceorder"
                  required
                />
              </div>
            </div>
            <div className="row m-2">
            <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

                <label htmlFor="diplink_login">Diplink Login (M):</label>
                <input
                  type="text"
                  name="diplink_login"
                  id="diplink_login"
                  className="form-control"
                  value={formData.diplink_login}
                  onChange={handleChange}
                  placeholder="diplink login"
                  required
                />
              </div>
              <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

            
                   <label htmlFor="plan_page_url">Plan Page Url (O):</label>
                <input
                  type="text"
                  name="plan_page_url"
                  id="plan_page_url"
                  className="form-control"
                  value={formData.plan_page_url}
                  onChange={handleChange}
                placeholder="planpageurl"
                /> 
              </div>
            </div>
           <div className="row m-2">
           <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

                <label htmlFor="package_name">Package Name (O):</label>
                <input
                  type="text"
                  name="package_name"
                  id="package_name"
                  className="form-control"
                  value={formData.package_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

                <label htmlFor="hub_servicekey">hubSserviceKey (O):</label>
                <input
                  type="text"
                  name="hub_servicekey"
                  id="hub_servicekey"
                  className="form-control"
                  value={formData.hub_servicekey}
                  onChange={handleChange}
                />
              </div>{" "}
           </div>
            <div className="row m-2">
            <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

                <label htmlFor="subscription_api_url">
                  subscriptionApiUrl (O):
                </label>
                <input
                  type="url"
                  name="subscription_api_url"
                  id="subscription_api_url"
                  className="form-control"
                  value={formData.subscription_api_url}
                  onChange={handleChange}
                />
              </div>{" "}
              <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">

                <label htmlFor="diplink_url">diplinkUrl (O):</label>
                <input
                  type="url"
                  name="diplink_url"
                  id="diplink_url"
                  className="form-control"
                  value={formData.diplink_url}
                  onChange={handleChange}
                />
              </div>{" "}
            </div>
             <div className="row m-2">
             <div className="form-group m-auto col-sm-12 col-md-5 col-lg-5 ">
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
              <div className="form-group m-auto col-sm-12 col-md-5  col-lg-5 ">
                <label htmlFor="content">Content (O):</label>
                <input
                  type="text"
                  name="content"
                  id="content"
                  className="form-control"
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>
             </div>
           <div className="row m-2">
           <div className="form-group col-sm-12 col-md-8 col-lg-8 mx-5 ">
                {/* <label htmlFor="plan_page_url">Plan Page Url (O):</label>
                <input
                  type="text"
                  name="plan_page_url"
                  id="plan_page_url"
                  className="form-control"
                  value={formData.plan_page_url}
                  onChange={handleChange}
                /> */}
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
              <div className="my-2  col-12  ">
              <button type="submit" className="btn btn-success px-4 mx-5  ">
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

export default Servicecreation;
