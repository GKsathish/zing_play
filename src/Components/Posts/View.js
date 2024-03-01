import React from "react";
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

const View = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <div className="row m-1">
        <div className="col">
          <div className=" card rounded">
            <img src="./Images/att2.jpeg" alt="mainimage" className="mainimg" />
            <div className="p-2">
            <h5 className="my-3">
              Attrangi <span>|</span> <span>Language</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              felis quis dolor malesuada fermentum. Nullam consectetur libero
              vel nisl malesuada, nec sagittis mauris fermentum. Integer ac
              consequat purus. Maecenas eget nunc nec quam vestibulum interdum
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-2">
        <div className="col">
          <div className="d-flex justify-content-between px-3">
          <h4 className="mx-1">Suggested Posts</h4>
          <span >Next</span>
          </div>
       
          <Slider className="d-flex  justify-content-between " {...settings}>
            <div className="card ">
              <img src="./Images/att3.jpeg" alt="image"  className="rounded"/>
            </div>
            <div className="card ">
              <img src="./Images/att4.jpeg" alt="image"  className="rounded"/>
            </div> 
            <div className="card">
              <img src="./Images/att5.jpeg" alt="image" className="rounded" />
            </div> 
            <div className="card  ">
              <img src="./Images/att6.jpeg" alt="image" className="rounded" />
          </div>
          <div className="card ">
              <img src="./Images/att1.jpeg" alt="image" className="rounded" />
          </div>
          
          </Slider>
        
         
        </div>
      </div>
    </div>
  //   <div className="container-fluid">
  //   <div className="row m-1">
  //     <div className="col">
  //       <div className=" card col-sm-6rounded">
  //         {/* Replace image tag with video tag */}
  //         <video src="./Videos/att2.mp4" controls className="mainvideo" />
  //         <div className="p-2">
  //           <h5 className="my-3">
  //             Attrangi <span>|</span> <span>Language</span>
  //           </h5>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
  //             felis quis dolor malesuada fermentum. Nullam consectetur libero
  //             vel nisl malesuada, nec sagittis mauris fermentum. Integer ac
  //             consequat purus. Maecenas eget nunc nec quam vestibulum interdum
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="row mt-5 mx-2">
  //     <div className="col">
  //       <h4 className="mx-1">Suggested Videos</h4>
  //       <div className="d-flex flex-wrap justify-content-evenly ">
  //         <div className=" card col-sm-6p-1">
  //           <video src="./Videos/att3.mp4" controls className="rounded" />
  //         </div>
  //         <div className=" card col-sm-6p-1 ">
  //           <video src="./Videos/att4.mp4" controls className="rounded" />
  //         </div> 
  //         <div className="card">
  //           <video src="./Videos/att5.mp4" controls className="rounded" />
  //         </div> 
  //         <div className=" card col-sm-6 ">
  //           <video src="./Videos/att6.mp4" controls className="rounded" />
  //         </div>
  //         <div className=" card col-sm-6 ">
  //           <video src="./Videos/att1.mp4" controls className="rounded" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // slider type
  // <div className="container-fluid">
  //     <div className="row m-1">
  //       <div className="col">
  //         <div className=" card col-sm-6rounded">
  //           <img src="./Images/att2.jpeg" alt="mainimage" className="mainimg" />
  //           <div className="p-2">
  //             <h5 className="my-3">
  //               Attrangi <span>|</span> <span>Language</span>
  //             </h5>
  //             <p>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
  //               felis quis dolor malesuada fermentum. Nullam consectetur libero
  //               vel nisl malesuada, nec sagittis mauris fermentum. Integer ac
  //               consequat purus. Maecenas eget nunc nec quam vestibulum interdum
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="row mt-5 mx-2">
  //       <div className="col">
  //         <div className="d-flex justify-content-between px-3 align-items-center">
  //           <h4 className="mx-1">Suggested Posts</h4>
  //           <span>Next</span>
            
  //         </div>
  //         <Slider {...settings}>
          
  //               <div className="d-flex flex-wrap justify-content-around">
  //                 <div className="card">
  //                   <img src="./Images/att3.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                 <div className="card">
  //                   <img src="./Images/att4.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                 <div className="card">
  //                   <img src="./Images/att5.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                 <div className="card">
  //                   <img src="./Images/att6.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                 <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                 <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div> 
  //                 <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                  <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div> 
  //                 <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                  <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div> 
  //                 <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                  <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div> 
  //                 <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div> 
  //                 <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div> 
  //                 <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div>
  //                  <div className="card">
  //                   <img src="./Images/att1.jpeg" alt="image" className="rounded" />
  //                 </div>

  //               </div>
  //               </Slider>
        
  //       </div>
  //     </div>
  //   </div>
  );
};

export default View;
