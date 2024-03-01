import React, { useState } from "react";

const Admin = () => {
  const [files, setFiles] = useState([]);
  const [bannerPreview, setBannerPreview] = useState(""); // State for banner preview image
  const [logoPreview, setLogoPreview] = useState(""); // State for logo preview image
  const [formData, setFormData] = useState({
    categoryName: "",
    postTitle: "",
    selectedUser: "",
    schedulePost: "",
    selectedLanguage: "",
    hashtag: "",
    status: "",
    description: "",
  });

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles([...files, ...selectedFiles]);

    // Set preview images if files are selected
    if (selectedFiles.length > 0) {
      // Assuming first file is banner and second is logo
      setBannerPreview(URL.createObjectURL(selectedFiles[0]));
      setLogoPreview(URL.createObjectURL(selectedFiles[1]));
    }
  };

  // Function to handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData, files);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="p-2">
          <form
            className="col-12 h-100 w-100 shadow border-0 p-5"
            onSubmit={handleSubmit}
          >
            <h4 className="text-dark mx-2 text-decoration-underline">
              SERVICE CREATION:
            </h4>

            <div className="row my-4">
              <div className="d-flex flex-column justify-content-center col-6">
                <div className="form-group col-lg m-2">
                  <label htmlFor="formFileMultiple" className="form-label">
                    Banner<span className="text-danger">*</span>{" "}
                  </label>
                  <small className="text-danger">
                    {" "}
                    (upload images in jpeg,png,webp only 1:1 or 16:9 or 9:16
                    ratio){" "}
                  </small>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>
                <div className="form-group col-lg m-2">
                  <label htmlFor="formFileMultiple" className="form-label">
                    LOGO<span className="text-danger">*</span>{" "}
                  </label>
                  <small className="text-danger">
                    {" "}
                    (upload images in jpeg,png,webp only 1:1){" "}
                  </small>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>
                <div className="form-group col-lg m-2">
                  <label htmlFor="inputState">
                    Type of Content <span className="text-danger">*</span>
                  </label>
                  <select
                    id="inputState"
                    className="form-control"
                    name="type_content"
                    onChange={handleFormChange}
                  >
                    <option value="">Choose...</option>
                    <option>Movies</option>
                    <option>series</option>
                    <option>Create New</option>
                  </select>
                </div>
                <div className="form-group col-md-6 m-2">
                  <label htmlFor="inputPassword4">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Enter Description"
                    name="description"
                    onChange={handleFormChange}
                    rows="4"
                    maxLength={300}
                  />
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center col-6 border card shadow ">
                <div className="form-group col-lg">
                  <img src={bannerPreview} alt="preview-banner" className="h-100 w-100"/>
                </div>
                <div className="form-group col-lg d-flex justify-content-between">
                  <img
                    src={logoPreview}
                    alt="preview-logo"
                    className="m-2 border-1 border-secondary-subtle"
                    height="100"
                    width="100"
                  /> 
                  <div className="m-2">
                    <h1>{formData.postTitle}</h1>
                    {/* <p>{formData.categoryName}</p> */}
                    <p className="text-overflow"> {formData.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-danger m-2 ">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary m-2 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
