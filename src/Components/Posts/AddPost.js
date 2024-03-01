

// import React, { useState } from 'react';

// const Addpost = () => {
//   const [files, setFiles] = useState([]);
//   const [formData, setFormData] = useState({
//     categoryName: '',
//     postTitle: '',
//     selectedUser: '',
//     schedulePost: '',
//     selectedLanguage: '',
//     hashtag: '',
//     status: '',
//     description: ''
//   });

//   // Function to handle file selection
//   const handleFileChange = (e) => {
//     const selectedFiles = e.target.files;
//     setFiles([...files, ...selectedFiles]);
//   };

//   // Function to handle form field changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData,files);
//   };

//   const Editfeld=()=>{
//     window.location.href="/EditPost"
//   }

//   return (
//     <div className='container-fluid'>
//       <div className='row'>
//         {/* <div className='d-flex justify-content-between  mt-3'> */}
        
//           {/* <button className='btn btn-warning text-dark'>View Posts</button> */}
//         {/* </div> */}
//         <div className='p-2'>
//           <form className='col-12 h-100 w-100 shadow border-0 p-5' onSubmit={handleSubmit}>
//           <h4 className='text-dark mx-2 text-decoration-underline'>ADD POSTS:</h4>
//           <div className="row my-4">
          
//               <div className="form-group col-lg">
//                 <label htmlFor="formFileMultiple" className="form-label">Select Videos:</label> 
//                 <small className='text-danger'> (upload MP4 format) </small>
//                 <input className="form-control" type="file" id="formFileMultiple" accept="video/*" multiple onChange={handleFileChange} />
//               </div>
//             </div>


//             <div className="row my-4">
//               <div className="form-group col-lg">
//                 <label htmlFor="inputState">Category Name <span className='text-danger'>*</span></label>
//                 <select id="inputState" className="form-control" name="categoryName" onChange={handleFormChange}>
//                   <option value="">Choose...</option>
//                   <option>Trending</option>
//                   <option>Explore</option>
//                   <option>Create New</option>
//                 </select>
//               </div>
//               <div className="form-group col-lg my-4">
                
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Title" name="postTitle" onChange={handleFormChange} />
//               </div>
//             </div>

           
           
//             <div className="row my-4">
          
//           <div className="form-group col-lg">
//             <label htmlFor="formFileMultiple" className="form-label">Preview Image<span className='text-danger'>*</span> </label>
//             <small className='text-danger'> (upload images in jpeg,png,webp only 1:1 or 16:9 or 9:16 ratio) </small>
//             <input className="form-control" type="file" id="formFileMultiple" accept="image/*" multiple onChange={handleFileChange} />
//           </div>
//         </div>
          

//             <div className="row my-4">
//               <div className="form-group col-lg">
//                 <label htmlFor="inputPassword4">Name of Content <span className='text-danger'>*</span></label>
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter content" name="Content" onChange={handleFormChange} />
//               </div>
//               <div className="form-group col-lg">
//                 <label htmlFor="inputPassword4">Language <span className='text-danger'>*</span></label>
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter language" name="Language" onChange={handleFormChange} />
//               </div>
//               <div className="form-group col-lg">
//                 <label htmlFor="inputPassword4">Genre</label>
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter genre" name="Genre" onChange={handleFormChange} />
//               </div>
//               <div className="form-group col-lg">
//                 <label htmlFor="inputPassword4">Year</label>
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter year" name="year" onChange={handleFormChange} />
//               </div>
              
//             </div>
          

//             <div className="row my-4">
//               <div className="form-group col-lg">
//                 <label htmlFor="inputState">Type of Content <span className='text-danger'>*</span></label>
//                 <select id="inputState" className="form-control" name="type_content" onChange={handleFormChange}>
//                   <option value="">Choose...</option>
//                   <option>Movies</option>
//                   <option>series</option>
//                   <option>Create New</option>
//                 </select>
//               </div>
//               <div className="form-group col-lg my-4">
                
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Title" name="postTitle" onChange={handleFormChange} />
//               </div>
//             </div>

//             <div className="row my-4">
//               <div className="form-group col-12 col-md-6">
//                 <label htmlFor="inputPassword4">Description <span className='text-danger'>*</span></label>
//                 <textarea type="text" className="form-control" id="inputPassword4" placeholder="Enter Description" name="description" onChange={handleFormChange} rows="4"  maxLength={300}/>
//               </div>
//             </div>
//             <div className='row my-4'>
//             <div className="form-group col-lg">
//                 <label htmlFor="inputPassword4">Cast </label>
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter cast" name="cast" onChange={handleFormChange} />
//               </div>
//               <div className="form-group col-lg">
//                 <label htmlFor="inputPassword4">Music By </label>
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter music" name="music" onChange={handleFormChange} />
//               </div>
//               <div className="form-group col-lg">
//                 <label htmlFor="inputPassword4">Directed By </label>
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter direct" name="Direct" onChange={handleFormChange} />
//               </div>
//               <div className="form-group col-lg">
//                 <label htmlFor="inputPassword4">Produced By </label>
//                 <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Produced" name="Produced" onChange={handleFormChange} />
//               </div>
              
//             </div>

//             <div>
//               <button type="submit" className="btn btn-danger m-2 ">Cancel</button>
//               {/* <button type="submit" className="btn btn-secondary m-2" onClick={Editfeld}>Edit</button> */}
//               <button type="submit" className="btn btn-primary m-2 text-white">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addpost;
import React, { useState } from 'react';

const AddPost = () => {
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
    console.log('Form submitted:', formData, files);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='p-2'>
          <form className='col-12 h-100 w-100 shadow border-0 p-5' onSubmit={handleSubmit}>
            <h4 className='text-dark mx-2 text-decoration-underline'>ADD POSTS:</h4>
            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="formFileMultiple" className="form-label">Select Videos:</label> 
                <small className='text-danger'> (upload MP4 format) </small>
                <input className="form-control" type="file" id="formFileMultiple" accept="video/*" multiple onChange={handleFileChange} />
              </div>
            </div>
            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="inputState">Category Name <span className='text-danger'>*</span></label>
                <select id="inputState" className="form-control" name="categoryName" onChange={handleFormChange}>
                  <option value="">Choose...</option>
                  <option>Trending</option>
                  <option>Explore</option>
                  <option>Create New</option>
                </select>
              </div>
              <div className="form-group col-lg my-4">
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Title" name="postTitle" onChange={handleFormChange} />
              </div>
            </div>
            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="formFileMultiple" className="form-label">Preview Image<span className='text-danger'>*</span> </label>
                <small className='text-danger'> (upload images in jpeg,png,webp only 1:1 or 16:9 or 9:16 ratio) </small>
                <input className="form-control" type="file" id="formFileMultiple" accept="image/*" multiple onChange={handleFileChange} />
              </div>
            </div>
            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Name of Content <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter content" name="Content" onChange={handleFormChange} />
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Language <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter language" name="Language" onChange={handleFormChange} />
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Genre</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter genre" name="Genre" onChange={handleFormChange} />
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Year</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter year" name="year" onChange={handleFormChange} />
              </div>
            </div>
            <div className="row my-4">
              <div className="form-group col-lg">
                <label htmlFor="inputState">Type of Content <span className='text-danger'>*</span></label>
                <select id="inputState" className="form-control" name="type_content" onChange={handleFormChange}>
                  <option value="">Choose...</option>
                  <option>Movies</option>
                  <option>series</option>
                  <option>Create New</option>
                </select>
              </div>
              <div className="form-group col-lg my-4">
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Title" name="postTitle" onChange={handleFormChange} />
              </div>
            </div>
            <div className="row my-4">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="inputPassword4">Description <span className='text-danger'>*</span></label>
                <textarea type="text" className="form-control" id="inputPassword4" placeholder="Enter Description" name="description" onChange={handleFormChange} rows="4" maxLength={300}/>
              </div>
            </div>
            <div className='row my-4'>
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Cast </label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter cast" name="cast" onChange={handleFormChange} />
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Music By </label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter music" name="music" onChange={handleFormChange} />
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Directed By </label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter direct" name="Direct" onChange={handleFormChange} />
              </div>
              <div className="form-group col-lg">
                <label htmlFor="inputPassword4">Produced By </label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Produced" name="Produced" onChange={handleFormChange} />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-danger m-2 ">Cancel</button>
              <button type="submit" className="btn btn-primary m-2 text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

