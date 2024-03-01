

import React, { useState } from 'react';

const Editpost = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    categoryName: '',
    postTitle: '',
    selectedUser: '',
    schedulePost: '',
    selectedLanguage: '',
    hashtag: '',
    status: '',
    description: ''
  });

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles([...files, ...selectedFiles]);
  };

  // Function to handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData,files);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-flex justify-content-between  mt-3'>
          <h4>Add Posts</h4>
          <button className='btn btn-warning text-dark'>View Posts</button>
        </div>
        <div className='p-2'>
          <form className='col-12 h-100 w-100 shadow p-5' onSubmit={handleSubmit}>

            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="inputState">Category Name</label>
                <select id="inputState" className="form-control" name="categoryName" onChange={handleFormChange}>
                  <option value="">Choose...</option>
                  <option>Fashion</option>
                </select>
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Post Title</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Title" name="postTitle" onChange={handleFormChange} />
              </div>
            </div>

            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="inputState">Users</label>
                <select id="inputState" className="form-control" name="selectedUser" onChange={handleFormChange}>
                  <option value="">Choose...</option>
                  <option>infomasala@gmail.com</option>
                </select>
              </div>
              <div className="form-group col-lg">
                <label htmlFor="formFileMultiple" className="form-label">Select Images or Videos</label>
                <input className="form-control" type="file" id="formFileMultiple" accept="image/*,video/*" multiple onChange={handleFileChange} />
              </div>
            </div>

            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="inputState">Schedule Post</label>
                <select id="inputState" className="form-control" name="schedulePost" onChange={handleFormChange}>
                  <option value="">Choose...</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputState">Select Language</label>
                <select id="inputState" className="form-control" name="selectedLanguage" onChange={handleFormChange}>
                  <option value="">Choose...</option>
                  <option>EN</option>
                </select>
              </div>
            </div>

            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">HashTag</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Hashtag" name="hashtag" onChange={handleFormChange} />
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputState">Status</label>
                <select id="inputState" className="form-control" name="status" onChange={handleFormChange}>
                  <option value="">Choose...</option>
                  <option>Publish</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>

            <div className="row my-4">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="inputPassword4">Description</label>
                <textarea type="text" className="form-control" id="inputPassword4" placeholder="Enter Description" name="description" onChange={handleFormChange} rows="4" />
              </div>
            </div>

            <div>
             
              <button type="submit" className="btn btn-secondary m-2">Update</button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editpost;
