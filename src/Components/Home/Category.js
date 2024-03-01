// import React from "react";
// import "./Home.css";

// const Category = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col ">
//           <div className="d-flex justify-content-start my-2  ">
//             <span className="h-40 w-40 ms-4">
//               <i class="bi bi-arrow-left-circle-fill h-40 w-40 me-3"></i>
//             </span>
//             <h1>Suggested</h1>
//           </div>
//           <div className="d-flex  justify-content-evenly  flex-wrap">
//             <figure className="m-2">
//               <img
//                 src="./Images/att1.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>
//             <figure className="m-2">
//               <img
//                 src="./Images/att2.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>{" "}
//             <figure className="m-2">
//               <img
//                 src="./Images/att3.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>{" "}
//             <figure className="m-2">
//               <img
//                 src="./Images/att4.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>{" "}
//             <figure className="m-2">
//               <img
//                 src="./Images/att5.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>
//             <figure className="m-2">
//               <img
//                 src="./Images/att6.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>
//             <figure className="m-2">
//               <img
//                 src="./Images/att1.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>
//             <figure className="m-2">
//               <img
//                 src="./Images/att2.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>{" "}
//             <figure className="m-2">
//               <img
//                 src="./Images/att3.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>{" "}
//             <figure className="m-2">
//               <img
//                 src="./Images/att4.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>{" "}
//             <figure className="m-2">
//               <img
//                 src="./Images/att5.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>
//             <figure className="m-2">
//               <img
//                 src="./Images/att6.jpeg"
//                 alt="categoryimage"
//                 className="p-1 "
//               />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;

import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";

const Category = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col ">
        <section>
            <figure className="cbanner mb-3">
             {/* <img src="./Images/att1.jpeg" alt="banner" /> */}
            </figure>
        </section>
          <div className="d-flex justify-content-start my-2">
            <span className="h-40 w-40 ms-2">
             <Link to="/Home"><i className="bi bi-arrow-left-circle-fill h-40 w-40 mx-2"></i></Link> 
            </span>
            <h1>Suggested</h1>
          </div>
          <div className="d-flex justify-content-evenly flex-wrap">
            {Array.from({ length: 20 }, (_, index) => (
              <figure key={index}  style={{ maxWidth: "50%" }}>
                <img
                  src={`./Images/att${(index % 6) + 1}.jpeg`}
                  alt="categoryimage"
                  className="p-1"
                  style={{ width: "100%" }}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
