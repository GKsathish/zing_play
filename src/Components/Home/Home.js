// import React from "react";
// import "./Home.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MagicSliderDots from "react-magic-slider-dots";
// import "react-magic-slider-dots/dist/magic-dots.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       slidesToSlide: 4, // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2, // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 2,
//       slidesToSlide: 2, // optional, default to 1.
//     },
//   };

//   // trending corusel
//   const settings = {
//     dots: true,
//     arrows: true,
//     infinite: true, // Ensure infinite looping is enabled
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 1000, // Set autoplay speed (in milliseconds)
//     appendDots: (dots) => {
//       return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
//     },
//   };
//   return (
//     <div className="container-fluid">
//       <div className="row bg-light border-1 shadow ">
//         <div className="col-12">
//           <section>
//             <figure className="banner">
//               {/* <img src="./Images/att1.jpeg" alt="banner" /> */}
//             </figure>
//             <div className="d-flex justify-content-start">
//               <figure className="m-2 ">
//                 <Link to="/Article">
//                   {" "}
//                   <img
//                     src="./Images/att1.jpeg"
//                     alt="banner"
//                     height="60"
//                     width="60"
//                     className="border border-dark rounded p-1"
//                   />
//                 </Link>
//               </figure>

//               <article className="m-2">
//                 <h1>ServiceName</h1>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   ut felis quis dolor malesuada fermentum. Nullam consectetur
//                   libero
//                 </p>
//               </article>
//             </div>
//           </section>
//           {/* trendinng */}
//           <section className="my-3 mx-2">
//             <h1>New & Trending</h1>

//             <Slider {...settings}>
//               <div className="w-100">
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att1.jpeg" className=" slide-img" />
//                 </Link>
//               </div>

//               <div className="w-100">
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att2.jpeg" className=" slide-img" />
//                 </Link>
//               </div>
//               <div className="w-100">
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att3.jpeg" className=" slide-img" />
//                 </Link>
//               </div>
//               <div className="w-100">
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att4.jpeg" className=" slide-img" />
//                 </Link>
//               </div>
//               <div className="w-100">
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att5.jpeg" className=" slide-img" />
//                 </Link>
//               </div>
//               <div className="w-100">
//                 <Link to="/Article">
//                   <img src="./Images/att6.jpeg" className=" slide-img" />
//                 </Link>
//               </div>
//             </Slider>
//           </section>
//           {/* Suggested */}
//           <sectio className="my-3">
//             <div className="d-flex justify-content-between mx-2 ">
//               <h1>Suggested</h1>

//               <span className="h-40 w-40">
//                 <Link to="/Category">
//                   {" "}
//                   <i class="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//                 </Link>
//               </span>
//             </div>

//             <Carousel
//               swipeable={true} // Enable swipe
//               draggable={true} // Enable drag and drop
//               responsive={responsive}
//               ssr={true}
//               infinite={true}
//               autoPlay={true} // Enable autoplay directly
//               autoPlaySpeed={3000}
//               keyBoardControl={true}
//               customTransition="all .8"
//               transitionDuration={3000}
//               containerClass="carousel-container"
//               removeArrowOnDeviceType={["tablet", "mobile"]}
//               itemClass="carousel-item-padding-40-px"
//             >
//               {[3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5].map((num, index) => (
//                 <div key={index} className="m-2">
//                   <Link to="/Article">
//                     <img
//                       src={`./Images/att${num}.jpeg`}
//                       alt="categoryimage"
//                       className="slide-img1"
//                     />
//                   </Link>
//                 </div>
//               ))}
//             </Carousel>
//           </sectio>
//           {/* Popular */}

//           <section className="my-3">
//             <div className="d-flex justify-content-between mx-2 ">
//               <h1>Popular</h1>

//               <span className="h-40 w-40">
//                 <Link to="/Category">
//                   {" "}
//                   <i class="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//                 </Link>
//               </span>
//             </div>
//             <Carousel
//               swipeable={true} // Enable swipe
//               draggable={true} // Enable drag and drop
//               responsive={responsive}
//               ssr={true}
//               infinite={true}
//               autoPlay={true} // Enable autoplay directly
//               autoPlaySpeed={3000}
//               keyBoardControl={true}
//               customTransition="all .8"
//               transitionDuration={3000}
//               containerClass="carousel-container"
//               removeArrowOnDeviceType={["tablet", "mobile"]}
//               itemClass="carousel-item-padding-40-px"
//             >
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att3.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att4.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att5.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att6.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att3.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att4.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att5.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att6.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att3.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>

//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att4.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att5.jpeg" className=" slide-img2" />
//                 </Link>
//               </div>
//             </Carousel>
//           </section>
//           {/* Explore */}
//           <section className="my-3">
//             <div className="d-flex justify-content-between mx-2 ">
//               <h1>Explore</h1>

//               <span className="h-40 w-40">
//                 <Link to="/Category">
//                   {" "}
//                   <i class="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//                 </Link>
//               </span>
//             </div>
//             <Carousel
//               swipeable={true} // Enable swipe
//               draggable={true} // Enable drag and drop
//               responsive={responsive}
//               ssr={true}
//               infinite={true}
//               autoPlay={true} // Enable autoplay directly
//               autoPlaySpeed={3000}
//               keyBoardControl={true}
//               customTransition="all .8"
//               transitionDuration={3000}
//               containerClass="carousel-container"
//               removeArrowOnDeviceType={["tablet", "mobile"]}
//               itemClass="carousel-item-padding-40-px"
//             >
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att3.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att4.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att5.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att6.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att3.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att4.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att5.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att6.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att3.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>

//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   {" "}
//                   <img src="./Images/att4.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//               <div className="m-2">
//                 {" "}
//                 <Link to="/Article">
//                   <img src="./Images/att5.jpeg" className=" slide-img3" />
//                 </Link>
//               </div>
//             </Carousel>
//           </section>
//           {/* available plans */}
//           <section className="my-2 mx-2">
//             <h1>Available Plans</h1>
//             <div className="banner1 my-1">
//               <div className="d-flex flex-wrap justify-content-around p-2">
//                 <span>
//                   {/* <span className="text-danger"> */}
//                     <i className="bi bi-record2-fill fs-1 text-danger"></i>
          
//                   <small className="text-white fw-1">AED 5 per month</small>
//                 </span>

//                 <aside>
//                   <bold>BUY</bold> <br />
//                   <span className="text-danger">
//                     <i className="bi bi-volume-up-fill fs-2"></i>
//                   </span>
//                 </aside>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// second method


// import React from "react";
// import "./Home.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MagicSliderDots from "react-magic-slider-dots";
// import "react-magic-slider-dots/dist/magic-dots.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";

// Sample API data
// const apiData = {
//   banner: {
//     imageUrl: "./Images/download.jpeg",
//     title: "ServiceName",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis quis dolor malesuada fermentum. Nullam consectetur libero",
//     link: "/Article"
//   },
//   trending: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
   
//   ],
//   suggested: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
 
//   ],
//   explore: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
  
//   ],
//   popular: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
  
//   ],
//   plans: [
//     { price: "AED 9 per month", features: ["Feature 1", "Feature 2", "Feature 3"] }
 
//   ]
// };

// const Home = () => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       slidesToSlide: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 2,
//       slidesToSlide: 2,
//     },
//   };

//   const settings = {
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     appendDots: (dots) => {
//       return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
//     },
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row bg-light border-1 shadow ">
//         <div className="col-12">
//           <section>
//             <figure >
//               <img src={apiData.banner.imageUrl} alt="banner"  className="banner"/>
//             </figure>
//             <div className="d-flex justify-content-start">
//               <figure className="m-2 ">
//                 <Link to={apiData.banner.link}>
//                   <img
//                     src={apiData.banner.imageUrl}
//                     alt="banner"
//                     height="60"
//                     width="60"
//                     className="border border-dark rounded p-1"
//                   />
//                 </Link>
//               </figure>

//               <article className="m-2">
//                 <h1>{apiData.banner.title}</h1>
//                 <p>{apiData.banner.description}</p>
//               </article>
//             </div>
//           </section>
//           {/* Trending */}
//           <section className="my-3 mx-2">
//             <h1>New & Trending</h1>
//             <Slider {...settings}>
//               {apiData.trending.map((item, index) => (
//                 <div key={index} className="w-100">
//                   <Link to={item.link}>
//                     <img src={item.imageUrl} className="slide-img" />
//                   </Link>
//                 </div>
//               ))}
//             </Slider>
//           </section>
//           {/* Suggested */}
//           <section className="my-3">
//             <div className="d-flex justify-content-between mx-2">
//               <h1>Suggested</h1>
//               <span className="h-40 w-40">
//                 <Link to="/Category">
//                   <i className="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//                 </Link>
//               </span>
//             </div>
//             <Carousel
//               swipeable={true}
//               draggable={true}
//               responsive={responsive}
//               ssr={true}
//               infinite={true}
//               autoPlay={true}
//               autoPlaySpeed={3000}
//               keyBoardControl={true}
//               customTransition="all .8"
//               transitionDuration={3000}
//               containerClass="carousel-container"
//               removeArrowOnDeviceType={["tablet", "mobile"]}
//               itemClass="carousel-item-padding-40-px"
//             >
//               {apiData.suggested.map((item, index) => (
//                 <div key={index} className="m-2">
//                   <Link to={item.link}>
//                     <img src={item.imageUrl} alt="categoryimage" className="slide-img1" />
//                   </Link>
//                 </div>
//               ))}
//             </Carousel>
//           </section>
//           {/* Popular */}
//           <section className="my-3">
//             <div className="d-flex justify-content-between mx-2">
//               <h1>Popular</h1>
//               <span className="h-40 w-40">
//                 <Link to="/Category">
//                   <i className="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//                 </Link>
//               </span>
//             </div>
//             <Carousel
//               swipeable={true}
//               draggable={true}
//               responsive={responsive}
//               ssr={true}
//               infinite={true}
//               autoPlay={true}
//               autoPlaySpeed={3000}
//               keyBoardControl={true}
//               customTransition="all .8"
//               transitionDuration={3000}
//               containerClass="carousel-container"
//               removeArrowOnDeviceType={["tablet", "mobile"]}
//               itemClass="carousel-item-padding-40-px"
//             >
//               {apiData.popular.map((item, index) => (
//                 <div key={index} className="m-2">
//                   <Link to={item.link}>
//                     <img src={item.imageUrl} alt="categoryimage" className="slide-img2" />
//                   </Link>
//                 </div>
//               ))}
//             </Carousel>
//           </section>
//           {/* Explore */}
//           <section className="my-3">
//             <div className="d-flex justify-content-between mx-2">
//               <h1>Explore</h1>
//               <span className="h-40 w-40">
//                 <Link to="/Category">
//                   <i className="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//                 </Link>
//               </span>
//             </div>
//             <Carousel
//               swipeable={true}
//               draggable={true}
//               responsive={responsive}
//               ssr={true}
//               infinite={true}
//               autoPlay={true}
//               autoPlaySpeed={3000}
//               keyBoardControl={true}
//               customTransition="all .8"
//               transitionDuration={3000}
//               containerClass="carousel-container"
//               removeArrowOnDeviceType={["tablet", "mobile"]}
//               itemClass="carousel-item-padding-40-px"
//             >
//               {apiData.explore.map((item, index) => (
//                 <div key={index} className="m-2">
//                   <Link to={item.link}>
//                     <img src={item.imageUrl} alt="categoryimage" className="slide-img3" />
//                   </Link>
//                 </div>
//               ))}
//             </Carousel>
//           </section>
//           {/* Available plans */}
//           <section className="my-2 mx-2">
//             <h1>Available Plans</h1>
//             <div className="banner1 my-1">
//               <div className="d-flex flex-wrap justify-content-around p-2">
//                 <span>
//                   <i className="bi bi-record2-fill fs-1 text-danger"></i>
//                   <small className="text-white fw-1">{apiData.plans[0].price}</small>
//                 </span>
//                 <aside>
//                   <bold>BUY</bold> <br />
//                   <span className="text-danger">
//                     <i className="bi bi-volume-up-fill fs-2"></i>
//                   </span>
//                 </aside>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// third method

// import React, { useState } from "react";
// import "./Home.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MagicSliderDots from "react-magic-slider-dots";
// import "react-magic-slider-dots/dist/magic-dots.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";


// let apiData = {
//   banner: {
//     imageUrl: "./Images/download.jpeg",
//     title: "ServiceName",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis quis dolor malesuada fermentum. Nullam consectetur libero",
//     link: "/Article"
//   },
//   newAndTrending: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
//   ],
//   suggested: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
//   ],
//   explore: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
//   ],
//   popular: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
//   ],
//   plans: [
//     { price: "AED 9 per month", features: ["Feature 1", "Feature 2", "Feature 3"] }
//   ]
// };

// const Home = () => {
//   const [categoriesOrder, setCategoriesOrder] = useState([ "suggested", "popular", "explore"]);

//   const responsive = {
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 2 }
//   };

//   const settings = {
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     appendDots: (dots) => {
//       return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
//     }
//   };

//   return (
//     // <div className="container-fluid">
//     //   <div className="row bg-light border-1 shadow ">
//     //     <div className="col-12">
//     //       <section>
//     //         <figure >
//     //           <img src={apiData.banner.imageUrl} alt="banner"  className="banner"/>
//     //         </figure>
//     //         <div className="d-flex justify-content-start">
//     //           <figure className="m-2 ">
//     //             <Link to={apiData.banner.link}>
//     //               <img
//     //                 src={apiData.banner.imageUrl}
//     //                 alt="banner"
//     //                 height="60"
//     //                 width="60"
//     //                 className="border border-dark rounded p-1"
//     //               />
//     //             </Link>
//     //           </figure>

//     //           <article className="m-2">
//     //             <h1>{apiData.banner.title}</h1>
//     //             <p>{apiData.banner.description}</p>
//     //           </article>
//     //         </div>
//     //       </section>

//     //       {/* New & Trending */}
//     //       <section className="my-3 mx-2">
//     //         <h1>New & Trending</h1>
//     //         <Slider {...settings}>
//     //           {apiData.newAndTrending.map((item, index) => (
//     //             <div key={index} className="w-100">
//     //               <Link to={item.link}>
//     //                 <img src={item.imageUrl} className="slide-img" />
//     //               </Link>
//     //             </div>
//     //           ))}
//     //         </Slider>
//     //       </section>

//     //       {/* Render other categories */}
//     //       {categoriesOrder.map((category, index) => (
//     //         <section key={index} className="my-3">
//     //           <div className="d-flex justify-content-between mx-2">
//     //             <h1>{category === "newAndTrending" ? "New & Trending" : category.charAt(0).toUpperCase() + category.slice(1)}</h1>
//     //             <span className="h-40 w-40">
//     //               <Link to="/Category">
//     //                 <i className="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//     //               </Link>
//     //             </span>
//     //           </div>
//     //           <Carousel
//     //             swipeable={true}
//     //             draggable={true}
//     //             responsive={responsive}
//     //             ssr={true}
//     //             infinite={true}
//     //             autoPlay={true}
//     //             autoPlaySpeed={3000}
//     //             keyBoardControl={true}
//     //             customTransition="all .8"
//     //             transitionDuration={3000}
//     //             containerClass="carousel-container"
//     //             removeArrowOnDeviceType={["tablet", "mobile"]}
//     //             itemClass="carousel-item-padding-40-px"
//     //           >
//     //             {apiData[category].map((item, index) => (
//     //               <div key={index} className="m-2">
//     //                 <Link to={item.link}>
//     //                   <img src={item.imageUrl} alt="categoryimage" className={`slide-img${category === "suggested" ? "1" : category === "popular" ? "2" : category === "explore" ? "3" : ""}`} />
//     //                 </Link>
//     //               </div>
//     //             ))}
//     //           </Carousel>
//     //         </section>
//     //       ))}

//     //       {/* Available plans */}
//     //       <section className="my-2 mx-2">
//     //         <h1>Available Plans</h1>
//     //         <div className="banner1 my-1">
//     //           <div className="d-flex flex-wrap justify-content-around p-2">
//     //             <span>
//     //               <i className="bi bi-record2-fill fs-1 text-danger"></i>
//     //               <small className="text-white fw-1">{apiData.plans[0].price}</small>
//     //             </span>
//     //             <aside>
//     //               <bold>BUY</bold> <br />
//     //               <span className="text-danger">
//     //                 <i className="bi bi-volume-up-fill fs-2"></i>
//     //               </span>
//     //             </aside>
//     //           </div>
//     //         </div>
//     //       </section>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="container-fluid">
//       <div className="row bg-light border-1 shadow ">
//         <div className="col-12">
//           <section>
//             <figure >
//               {apiData.banner.videoUrl ? (
//                 <video controls width="100%" height="auto">
//                   <source src={apiData.banner.videoUrl} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               ) : (
//                 <img src={apiData.banner.imageUrl} alt="banner" className="banner" />
//               )}
//             </figure>
//             <div className="d-flex justify-content-start">
//               <figure className="m-2 ">
//                 <Link to={apiData.banner.link}>
//                   {apiData.banner.videoUrl ? (
//                     <video controls width="60" height="60">
//                       <source src={apiData.banner.videoUrl} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : (
//                     <img src={apiData.banner.imageUrl} alt="banner" height="60" width="60" className="border border-dark rounded p-1" />
//                   )}
//                 </Link>
//               </figure>
//               <article className="m-2">
//                 <h1>{apiData.banner.title}</h1>
//                 <p>{apiData.banner.description}</p>
//               </article>
//             </div>
//           </section>

//           {/* New & Trending */}
//           <section className="my-3 mx-2">
//             <h1>New & Trending</h1>
//             <Slider {...settings}>
//               {apiData.newAndTrending.map((item, index) => (
//                 <div key={index} className="w-100">
//                   {item.videoUrl ? (
//                     <video controls width="100%" height="auto">
//                       <source src={item.videoUrl} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : (
//                     <Link to={item.link}>
//                       <img src={item.imageUrl} className="slide-img" />
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </Slider>
//           </section>

//           {/* Render other categories */}
//           {categoriesOrder.map((category, index) => (
//             <section key={index} className="my-3">
//               <div className="d-flex justify-content-between mx-2">
//                 <h1>{category === "newAndTrending" ? "New & Trending" : category.charAt(0).toUpperCase() + category.slice(1)}</h1>
//                 <span className="h-40 w-40">
//                   <Link to="/Category">
//                     <i className="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//                   </Link>
//                 </span>
//               </div>
//               <Carousel
//                 swipeable={true}
//                 draggable={true}
//                 responsive={responsive}
//                 ssr={true}
//                 infinite={true}
//                 autoPlay={true}
//                 autoPlaySpeed={3000}
//                 keyBoardControl={true}
//                 customTransition="all .8"
//                 transitionDuration={3000}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile"]}
//                 itemClass="carousel-item-padding-40-px"
//               >
//                 {apiData[category].map((item, index) => (
//                   <div key={index} className="m-2">
//                     {item.videoUrl ? (
//                       <video controls width="100%" height="auto">
//                         <source src={item.videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     ) : (
//                       <Link to={item.link}>
//                         <img src={item.imageUrl} alt="categoryimage" className={`slide-img${category === "suggested" ? "1" : category === "popular" ? "2" : category === "explore" ? "3" : ""}`} />
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//               </Carousel>
//             </section>
//           ))}

//           {/* Available plans */}
//           <section className="my-2 mx-2">
//             <h1>Available Plans</h1>
//             <div className="banner1 my-1">
//               <div className="d-flex flex-wrap justify-content-around p-2">
//                 <span>
//                   <i className="bi bi-record2-fill fs-1 text-danger"></i>
//                   <small className="text-white fw-1">{apiData.plans[0].price}</small>
//                 </span>
//                 <aside>
//                   <bold>BUY</bold> <br />
//                   <span className="text-danger">
//                     <i className="bi bi-volume-up-fill fs-2"></i>
//                   </span>
//                 </aside>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// fourth method



//  import React, { useState } from "react";
// import "./Home.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MagicSliderDots from "react-magic-slider-dots";
// import "react-magic-slider-dots/dist/magic-dots.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";


// let apiData = {
//   banner: {
//     imageUrl: "./Images/download.jpeg",
//     videoUrl: "", // Add videoUrl for banner
//     title: "ServiceName",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis quis dolor malesuada fermentum. Nullam consectetur libero",
//     link: "/Article"
//   },
//   newAndTrending: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att2.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att3.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att4.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att5.jpeg", link: "/Article" },
//     { imageUrl: "./Images/att6.jpeg", link: "/Article" }
//   ],
//   suggested: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
//     { imageUrl: "./Images/att2.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
//     { imageUrl: "./Images/att3.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
//     { imageUrl: "./Images/att4.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
//     { imageUrl: "./Images/att5.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
//     { imageUrl: "./Images/att6.jpeg", link: "/Article", imageType: "1:1" } // Add imageType
//   ],
//   popular: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
//     { imageUrl: "./Images/att2.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
//     { imageUrl: "./Images/att3.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
//     { imageUrl: "./Images/att4.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
//     { imageUrl: "./Images/att5.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
//     { imageUrl: "./Images/att6.jpeg", link: "/Article", imageType: "16:9" } // Add imageType
//   ],
//   explore: [
//     { imageUrl: "./Images/att1.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
//     { imageUrl: "./Images/att2.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
//     { imageUrl: "./Images/att3.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
//     { imageUrl: "./Images/att4.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
//     { imageUrl: "./Images/att5.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
//     { imageUrl: "./Images/att6.jpeg", link: "/Article", imageType: "9:16" } // Add imageType
//   ],

//   plans: [
//     { price: "AED 9 per month", features: ["Feature 1", "Feature 2", "Feature 3"] }
//   ]
// };

// const Home = () => {
//   const [categoriesOrder] = useState(Object.keys(apiData).filter(key => Array.isArray(apiData[key]) && key !== "plans" && key !== "newAndTrending"));

//   const responsive = {
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 3, slidesToSlide: 3 }
//   };

//   const settings = {
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     appendDots: (dots) => {
//       return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row bg-light border-1 shadow ">
//         <div className="col-12">
//           <section>
//             <figure >
//               {apiData.banner.videoUrl ? (
//                 <video controls width="100%" height="auto">
//                   <source src={apiData.banner.videoUrl} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               ) : (
//                 <img src={apiData.banner.imageUrl} alt="banner" className="banner" />
//               )}
//             </figure>
//             <div className="d-flex justify-content-start">
//               <figure className="m-2 ">
//                 <Link to={apiData.banner.link}>
//                   {apiData.banner.videoUrl ? (
//                     <video controls width="60" height="60">
//                       <source src={apiData.banner.videoUrl} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : (
//                     <img src={apiData.banner.imageUrl} alt="banner" height="60" width="60" className="border border-dark  rounded p-1" />
//                   )}
//                 </Link>
//               </figure>
//               <article className="m-2">
//                 <h1>{apiData.banner.title}</h1>
//                 <p>{apiData.banner.description}</p>
//               </article>
//             </div>
//           </section>

//           {/* New & Trending */}
//           <section className="my-3 mx-2">
//             <h1>New & Trending</h1>
//             <Slider {...settings}>
//               {apiData.newAndTrending.map((item, index) => (
//                 <div key={index} className="w-100">
//                   {item.videoUrl ? (
//                     <video controls width="100%" height="auto">
//                       <source src={item.videoUrl} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : (
//                     <Link to={item.link}>
//                       <img src={item.imageUrl} className="slide-img" />
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </Slider>
//           </section>

//           {/* Render other categories */}
//           {categoriesOrder.map((category, index) => (
//             <section key={index} className="my-3">
//               <div className="d-flex justify-content-between mx-2">
//               <h1>{category === "newAndTrending" ? "New & Trending" : category.charAt(0).toUpperCase() + category.slice(1)}</h1>
//                 <span className="h-40 w-40">
//                   <Link to="/Category">
//                     <i className="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//                   </Link>
//                 </span>
//               </div>
//               <Carousel
//                 swipeable={true}
//                 draggable={true}
//                 responsive={responsive}
//                 ssr={true}
//                 infinite={true}
//                 autoPlay={true}
//                 autoPlaySpeed={3000}
//                 keyBoardControl={true}
//                 customTransition="all .8"
//                 transitionDuration={3000}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile"]}
//                 itemClass="carousel-item-padding-40-px"
//               >
//                 {apiData[category].map((item, index) => (
//                   <div key={index} className="m-2">
//                     {item.videoUrl ? (
//                       <video controls width="100%" height="auto">
//                         <source src={item.videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     ) : (
//                       <Link to={item.link}>
//                         <img src={item.imageUrl} alt="categoryimage" className={`${item.imageType === "1:1" ? " slide-img1" : item.imageType === "16:9" ? " slide-img2" : item.imageType === "9:16" ? " slide-img3" : ""}`} />
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//               </Carousel>
//             </section>
//           ))}

//           {/* Available Plans */}
//           <section className="my-2 mx-2">
//             <h1>Available Plans</h1>
//             <div className="banner1 my-1">
//               <div className="d-flex flex-wrap justify-content-around p-2">
//                 <span>
//                   <i className="bi bi-record2-fill fs-1 text-danger"></i>
//                   <small className="text-white fw-1">{apiData.plans[0].price}</small>
//                 </span>
//                 <aside>
//                   <bold>BUY</bold> <br />
//                   <span className="text-danger">
//                     <i className="bi bi-volume-up-fill fs-2"></i>
//                   </span>
//                 </aside>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// Fifth method
import React, { useState } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


let apiData = {
  banner: {
    imageUrl: "./Images/download.jpeg",
    videoUrl: "", // Add videoUrl for banner
    title: "ServiceName",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis quis dolor malesuada fermentum. Nullam consectetur libero",
    link: "/Article"
  },
  newAndTrending: [
    { imageUrl: "./Images/att1.jpeg", link: "/Article" },
    { imageUrl: "./Images/att2.jpeg", link: "/Article" },
    { imageUrl: "./Images/att3.jpeg", link: "/Article" },
    { imageUrl: "./Images/att4.jpeg", link: "/Article" },
    { imageUrl: "./Images/att5.jpeg", link: "/Article" },
    { imageUrl: "./Images/att6.jpeg", link: "/Article" }
  ],
  suggested: [
    { imageUrl: "./Images/att1.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
    { imageUrl: "./Images/att2.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
    { imageUrl: "./Images/att3.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
    { imageUrl: "./Images/att4.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
    { imageUrl: "./Images/att5.jpeg", link: "/Article", imageType: "1:1" }, // Add imageType
    { imageUrl: "./Images/att6.jpeg", link: "/Article", imageType: "1:1" } // Add imageType
  ],
  popular: [
    { imageUrl: "./Images/att1.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
    { imageUrl: "./Images/att2.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
    { imageUrl: "./Images/att3.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
    { imageUrl: "./Images/att4.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
    { imageUrl: "./Images/att5.jpeg", link: "/Article", imageType: "16:9" }, // Add imageType
    { imageUrl: "./Images/att6.jpeg", link: "/Article", imageType: "16:9" } // Add imageType
  ],
  explore: [
    { imageUrl: "./Images/att1.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
    { imageUrl: "./Images/att2.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
    { imageUrl: "./Images/att3.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
    { imageUrl: "./Images/att4.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
    { imageUrl: "./Images/att5.jpeg", link: "/Article", imageType: "9:16" }, // Add imageType
    { imageUrl: "./Images/att6.jpeg", link: "/Article", imageType: "9:16" } // Add imageType
  ],



  plans: [
    { price: "AED 9 per month", features: ["Feature 1", "Feature 2", "Feature 3"] }
  ]
};

const Home = () => {
  const [categoriesOrder] = useState(Object.keys(apiData).filter(key => Array.isArray(apiData[key]) && key !== "plans" && key !== "newAndTrending"));

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 2 } // Change items to 2 for all categories except explore
  };

  const responsiveForExplore = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3, slidesToSlide: 3 } // Change items to 3 for mobile view for explore
  };

  const getCategoryResponsive = (category) => {
    if (category === "popular") {
      return responsiveForExplore;
    } else {
      return responsive;
    }
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row bg-light border-1 shadow ">
        <div className="col-12">
          <section>
            <figure >
              {apiData.banner.videoUrl ? (
                <video controls width="100%" height="auto">
                  <source src={apiData.banner.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={apiData.banner.imageUrl} alt="banner" className="banner" />
              )}
            </figure>
            <div className="d-flex justify-content-start">
              <figure className="m-2 ">
                <Link to={apiData.banner.link}>
                  {apiData.banner.videoUrl ? (
                    <video controls width="60" height="60">
                      <source src={apiData.banner.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={apiData.banner.imageUrl} alt="banner" height="60" width="60" className="border border-dark  rounded p-1" />
                  )}
                </Link>
              </figure>
              <article className="m-2">
                <h1>{apiData.banner.title}</h1>
                <p>{apiData.banner.description}</p>
              </article>
            </div>
          </section>

          {/* New & Trending */}
          <section className="my-3 mx-2">
            <h1>New & Trending</h1>
            <Slider {...settings}>
              {apiData.newAndTrending.map((item, index) => (
                <div key={index} className="w-100">
                  {item.videoUrl ? (
                    <video controls width="100%" height="auto">
                      <source src={item.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Link to={item.link}>
                      <img src={item.imageUrl} className="slide-img" />
                    </Link>
                  )}
                </div>
              ))}
            </Slider>
          </section>

          {/* Render other categories */}
          {categoriesOrder.map((category, index) => (
            <section key={index} className="my-3">
              <div className="d-flex justify-content-between mx-2">
                <h1>{category === "newAndTrending" ? "New & Trending" : category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <span className="h-40 w-40">
                  <Link to="/Category">
                    <i className="bi bi-arrow-right-circle-fill h-40 w-40"></i>
                  </Link>
                </span>
              </div>
              <Carousel
                swipeable={true}
                draggable={true}
                responsive={getCategoryResponsive(category)} // Apply different responsive settings based on category
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .8"
                transitionDuration={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
              >
                {apiData[category].map((item, index) => (
                  <div key={index} className="m-2">
                    {item.videoUrl ? (
                      <video controls width="100%" height="auto">
                        <source src={item.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Link to={item.link}>
                        <img src={item.imageUrl} alt="categoryimage" className={`${item.imageType === "1:1" ? " slide-img1" : item.imageType === "16:9" ? " slide-img2" : item.imageType === "9:16" ? " slide-img3" : ""}`} />
                      </Link>
                    )}
                  </div>
                ))}
              </Carousel>
            </section>
          ))}

          {/* Available Plans */}
          <section className="my-2 mx-2">
            <h1>Available Plans</h1>
            <div className="banner1 my-1">
              <div className="d-flex flex-wrap justify-content-around p-2">
                <span>
                  <i className="bi bi-record2-fill fs-1 text-danger"></i>
                  <small className="text-white fw-1">{apiData.plans[0].price}</small>
                </span>
                <aside>
                  <bold>BUY</bold> <br />
                  <span className="text-danger">
                    <i className="bi bi-volume-up-fill fs-2"></i>
                  </span>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
