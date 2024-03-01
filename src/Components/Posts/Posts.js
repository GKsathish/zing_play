import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
// import CSVExport from 'react-json-to-csv';


const Posts = () => {
  const samplePosts = [
    {
      postid: 1,
      categoryname: 'Sample Category 1',
      posttitle: 'Sample Post 1',
      rssname: 'Sample RSS 1',
      status: 'Publish',
      created_at: '2023-09-21 10:30:00',
      published_date: '2023-09-21 11:45:00',
      updated_at: '2023-09-21 12:15:00',
      postlink: 'sample-post-1',
    },
    {
      postid: 2,
      categoryname: 'Sample Category 2',
      posttitle: 'Sample Post 2',
      rssname: 'Sample RSS 2',
      status: 'Pending',
      created_at: '2023-09-20 09:15:00',
      published_date: '2023-09-21 12:15:00',
      updated_at: '2023-09-20 10:30:00',
      postlink: 'sample-post-2',
    },
    {
      postid: 3,
      categoryname: 'Sample Category 2',
      posttitle: 'Sample Post 2',
      rssname: 'Sample RSS 2',
      status: 'Pending',
      created_at: '2023-09-20 09:15:00',
      published_date: '2023-09-21 12:15:00',
      updated_at: '2023-09-20 10:30:00',
      postlink: 'sample-post-2',
    },
    {
      postid: 4,
      categoryname: 'Sample Category 2',
      posttitle: 'Sample Post 2',
      rssname: 'Sample RSS 2',
      status: 'Pending',
      created_at: '2023-09-20 09:15:00',
      published_date: '2023-09-21 12:15:00',
      updated_at: '2023-09-20 10:30:00',
      postlink: 'sample-post-2',
    },
    {
      postid: 5,
      categoryname: 'Sample Category 2',
      posttitle: 'Sample Post 2',
      rssname: 'Sample RSS 2',
      status: 'Pending',
      created_at: '2023-09-20 09:15:00',
      published_date: '2023-09-21 12:15:00',
      updated_at: '2023-09-20 10:30:00',
      postlink: 'sample-post-2',
    },
    {
      postid: 6,
      categoryname: 'Sample Category 2',
      posttitle: 'Sample Post 2',
      rssname: 'Sample RSS 2',
      status: 'pending',
      created_at: '2023-09-20 09:15:00',
      published_date: '2023-09-21 12:15:00',
      updated_at: '2023-09-20 10:30:00',
      postlink: 'sample-post-2',
    },

    // Add more sample data as needed
  ];

  const columns = [
    {
      Header: 'S.No',
      accessor: 'postid',
    },
    {
      Header: 'Category Name',
      accessor: 'categoryname',
    },
    {
      Header: 'Post Title',
      accessor: 'posttitle',
    },
    {
      Header: 'RSS Name',
      accessor: 'rssname',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => (
        <div className={`badge   ${value === 'Publish' ? 'bg-success' : 'bg-danger'}`}>
        {value}
        </div>
      ),
    },
    {
      Header: 'Received on',
      accessor: 'created_at',
    },
    {
      Header: 'Published on',
      accessor: 'published_date',
    },
    {
      Header: 'Edited on',
      accessor: 'updated_at',
    },
    {
      Header: 'View',
  accessor: 'postlink',
  Cell: ({ value }) => (
   
     <i class="bi bi-eye-slash"></i>
   
  ),
    },
    {
      Header: 'Action',
      accessor: 'postid',
  
        Cell: ({ value }) => (
          <div>
            <button className="btn  me-2" ><i class="bi bi-pencil-square"></i></button>
            <button className="btn  me-2" ><i class="bi bi-trash3"></i></button>
          </div>
    
      ),
    },
  ];


  const redirectotAdds =() =>{
         window.location.href="/AddPost"
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between mt-5 px-4">
          <h4>Posts</h4>
          <button className="btn btn-info text-light" onClick={redirectotAdds}>Add New</button>
        </div>

        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="page-title-box pt-2">
                {/* ... (page title and buttons) */}
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row bg-info p-2 my-2">
                        <div className="col">
                          <h5 className="text-center">Filters:</h5>
                        </div>
                        <div className="form-group col">
                          <select id="inputState1" className="form-control">
                            <option selected>Choose...</option>
                            <option>Fashion</option>
                          </select>
                        </div>

                        <div className="col form-group">srav
                          <select id="inputState2" className="form-control">
                            <option selected>Choose...</option>
                            <option>Fashion</option>
                          </select>
                        </div>

                        <div className="col form-group">
                          <select id="inputState3" className="form-control">
                            <option selected>Choose...</option>
                            <option>Fashion</option>
                          </select>
                        </div>

                        <button className="btn btn-warning text-dark col">Submit</button>
                      </div>


                      <div className="row my-3">
        <div className="col-md-6">
          <button className="btn btn-info text-light">
            <i className="fas fa-file-csv"></i> Export CSV
          </button>
        </div>
        <div className="col-md-4  text-right">
          <div className="form-group">
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
              // Implement search functionality here
            />
          </div>
        </div>
      </div>
                      <div className="postsrow">
        <ReactTable
          data={samplePosts}
          columns={columns}
          pageSizeOptions={[5, 10, 20, 25, 50]}
          defaultPageSize={5}
          // filterable={true}
          className="-striped -highlight"
        />
       
      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
