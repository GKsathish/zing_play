import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://172.22.9.85:8080/user-api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          service: "ZINGPLAY",
        }),
      });
      const res = await response.json()
     
      if (res.errorCode === "200") {
        localStorage.setItem("islogin", true);
        window.location.reload();
        navigate("/Dashboard");
      } else {
        // Handle invalid login credentials or other errors
        console.error("Login failed");
        window.location.reload();
        localStorage.setItem("islogin", true);
        navigate('/Dashboard');
      }
    } catch (error) {
      console.error("Error occurred:", error);
      window.location.reload();
      localStorage.setItem("islogin", true);
      navigate('/Dashboard');
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center align-content-center ">
          <div className="row d-flex flex-column justify-content-center align-items-center ">
            <div className="col-md-6 text-center mt-5 mb-3 ">
              <img
                src="./ZIN.png"
                alt="image"
                style={{ height: "140px", width: "200px" }}
              />
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-xl-5 col-12">
            <div
              className="login-wrap p-5 p-md-5"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            >
              <h6 className="text-center">Welcome to <span className="text-warning">ZING PLAY!</span></h6>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group m-3">
                  <label htmlFor="user" className="m-1">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group m-3">
                  <label htmlFor="password" className="m-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-left"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group d-md-flex justify-content-between m-3">
                  <div>
                    <input type="checkbox" />
                    <span className="checkmark "></span>
                    <label className="checkbox-wrap checkbox-primary p-2">
                      Remember Me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded px-4 py-1 loginbtn"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="text-center m-1 p-4">© 2024 ATRANGI</p>
      </div>
    </section>
  );
};

export default Login;

// import React, { useState,useEffect } from "react";
// import "./Home.css";


// import "react-magic-slider-dots/dist/magic-dots.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
 
// import MagicSliderDots from 'react-magic-slider-dots';
// import 'react-magic-slider-dots/dist/magic-dots.css';
// import { Link } from "react-router-dom";

// const Home = () => {;
//   const [apiData,setApiData]=useState({});
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace 'YOUR_API_ENDPOINT_HERE' with your actual API endpoint
//         const response = await fetch("http://151.51.71.71:2026/portal/get-plan-page",{
//           method:"POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(
//             {
//               "service_id":"24"
//           })
          
//         }
      
//        );
//         const data = await response;
//         console.log(data);
//         setApiData(data);
//       } catch (error) {
//         console.error("Error fetching API data:", error);
//       }
//     };
//     console.log(apiData);

//     fetchData();
//   }, [])
  // let apiData = {
  //   statusCode: 200,
  //   description: "Successfull",
  //   data: {
  //     service_id: 24,
  //     service_name: "Atrangii +1 ",
  //     service_logo:
  //       "https://intl.speedpayplus.com/SPI/ZingPlayImages/Recent_Purchase_Category_icon/Atrangiiicon.png",
  //     service_key: "ENT_ATRG_KEY",
  //     remarks:
  //       "Watch shows & movies in Hindi & Korean, Turkish & Russian series dubbed in Hindi. Action, Drama, Horror & Comedy series.",
  //     languages: "Hindi, Dubbed Korean & Turkish series",
  //     contenet: "Drama,Comedy",
  //     service_order: "3",
  //     purchase_service_logo:
  //       "https://intl.speedpayplus.com/SPI/ZingPlayImages/Recent_Purchase_Category_icon/AtrangiiGIftcard.png",
  //     categoryList: [
  //         {
  //           category_id: 2,
  //           category_name: "Trending Now",
  //           category_logo:
  //             "https://intl.speedpayplus.com/SPI/ZingPlayImages/Category_Icons_Dynamic/Deals.png",
  //           category_key: "TRENDING_KEY",
  //           category_layout: "Trending",
  //           category_order: "1",
  //           contentList: [
  //             {
  //               id: 1,
  //               name: "Test - News & Trending",
  //               content_type: "Movies",
  //               previewImage:
  //                 "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Testpreviews/Square-1.jpg",
  //               typeOfContent: "VDO",
  //               videoLink:
  //                 "https://s3.ap-south-1.amazonaws.com/out.zingplay-content/Atrangi-out/HaraSindoor.m3u8",
  //               videoType: "hls",
  //               language: "Hindi,English",
  //               genre: "Movies",
  //               directedBy: "ABC",
  //               musicBy: "ABC",
  //               producedBy: "ABC",
  //               description:
  //                 "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //               status: 0,
  //               insertedUserId: 0,
  //               updatedUserId: 0,
  //             },
  //           ],
  //         },
  //       {
  //         category_id: 3,
  //         category_name: "Explore",
  //         category_logo:
  //           "https://intl.speedpayplus.com/SPI/ZingPlayImages/Category_Icons_Dynamic/Parachute.png",
  //         category_key: "EXPLORE_KEY",
  //         category_layout: "small_square",
  //         category_order: "4",
  //         contentList: [
  //           {
  //             id: 9,
  //             name: "Test  -  Explore 1",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Bongo/DinTheDay.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 10,
  //             name: "Test  -  Explore 2",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Bongo/Gulail.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 11,
  //             name: "Test  -  Explore 3",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Bongo/HotelRelax.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 12,
  //             name: "Test  -  Explore 4",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Atrangipreviews/Hara+Sindoor.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 13,
  //             name: "Test  -  Explore 5",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Atrangipreviews/Johri.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 14,
  //             name: "Test  -  Explore 6",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Atrangipreviews/Kasak.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //         ],
  //       },
  //       {
  //         category_id: 11,
  //         category_name: "Suggested",
  //         category_logo:
  //           "https://intl.speedpayplus.com/SPI/ZingPlayImages/Category_Icons_Dynamic/Parachute.png",
  //         category_key: "SUGGESTED_KEY",
  //         category_layout: "Rectangle",
  //         category_order: "2",
  //         contentList: [
  //           {
  //             id: 2,
  //             name: "Test - Suggested-1",
  //             content_type: "Drama",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Testpreviews/Square-2.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 3,
  //             name: "Test - Suggested-2",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Testpreviews/Square-3.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 4,
  //             name: "Test - Suggested-3",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Testpreviews/Square-4.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //         ],
  //       },
  //       {
  //         category_id: 12,
  //         category_name: "Popular",
  //         category_logo:
  //           "https://intl.speedpayplus.com/SPI/ZingPlayImages/Category_Icons_Dynamic/Parachute.png",
  //         category_key: "POPULAR_KEY",
  //         category_layout: "square",
  //         category_order: "3",
  //         contentList: [
  //           {
  //             id: 5,
  //             name: "Test - Popular 1",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Testpreviews/9-16.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 6,
  //             name: "Test - Popular 2",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Testpreviews/9-16-1.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 7,
  //             name: "Test - Popular 3",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Testpreviews/9-16-2.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //           {
  //             id: 8,
  //             name: "Test - Popular 4",
  //             content_type: "Shows",
  //             previewImage:
  //               "https://d3fn5rm3qk8k6v.cloudfront.net/songs/audio/Testpreviews/9-16-3.jpg",
  //             typeOfContent: "IMG",
  //             language: "Hindi,English",
  //             genre: "Drama",
  //             directedBy: "ABC",
  //             musicBy: "ABC",
  //             producedBy: "ABC",
  //             description:
  //               "    Description of the Video or Series with a certain limit to the number of characters.. A clumsy guy Aryan meets a most amazing girl named Sifra somewhere in a foriegn land. But winning Sirfa¿s heart wouldn¿t be easy. Aryan kept making silly mistakes and getting into funny trouble.",
  //             status: 0,
  //             insertedUserId: 0,
  //             updatedUserId: 0,
  //           },
  //         ],
  //       },
  //     ],
  //     planList: [
  //       {
  //         plan_id: 25,
  //         src_denomination: 7.99,
  //         plan_desc: "AED 7.99 per month",
  //         validity: "1 MONTH",
  //         status: 0,
  //         service_id: 24,
  //         countryId: 1,
  //         rechargeType: "Subscription",
  //         logo: "https://intl.speedpayplus.com/SPI/ZingPlayImages/PlanImages/atrangi_GIFT.jpg",
  //       },
  //     ],
  //   },
  // };
  // const [categoriesOrder] = useState(
  //   apiData ? Object.keys(apiData.data.categoryList) : []
  // );

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //     slidesToSlide: 4,
  //   },
  //   tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
  //   mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 2 },
  // };

  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   appendDots: (dots) => {
  //     return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
  //   },
  // };
  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000, // Change this value to a higher number, like 3000 (3 seconds)
  //   appendDots: (dots) => {
  //     return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
  //   },
  // };
  


//   return (
//     <div className="container-fluid">
//       <div className="row bg-light border-1 shadow ">
//         <div className="col-12">
//           <section>
//             <figure>
//               <img
//                 src={apiData.data.purchase_service_logo}
//                 alt="banner"
//                 className="banner"
//               />
//             </figure>
//             <div className="d-flex justify-content-start">
//               <figure className="m-2 ">
//                 <Link to={apiData.data.service_id}>
//                   <img
//                     src={apiData.data.service_logo}
//                     alt="banner"
//                     height="60"
//                     width="60"
//                     className="border border-dark  rounded p-1"
//                   />
//                 </Link>
//               </figure>
//               <article className="m-2">
//                 <h1>{apiData.data.service_name}</h1>
//                 <p>{apiData.data.remarks}</p>
//               </article>
//             </div>
//           </section>
//           {apiData &&
//   apiData.data.categoryList.map((category, index) => (
//     <section key={index} className="my-3">
//       <div>
//         <div className="d-flex justify-content-between mx-2">
//           <h1>{category.category_name}</h1>
//           <span className="h-40 w-40">
//             <Link to={`/category/${category.category_id}`}>
//               <i className="bi bi-arrow-right-circle-fill h-40 w-40"></i>
//             </Link>
//           </span>
//         </div>
//         {category.category_name === "Trending Now" && (
//   <div>
//     {/* {console.log(category.contentList)} */}
//     <Slider {...settings}>
//       {category.contentList.map((item, index) => (
//         <div key={item.id}>
//           {/* Wrap the image inside Link */}
//           <Link to={`/content/${item.id}`}>
//             <img src={item.previewImage} className="slide-img" alt={item.name} />
//           </Link>
//         </div>
//       ))}
//     </Slider>
//   </div>
// )}

//    {category.category_layout !== "Trending" && (
//           // Render default carousel for other categories
//           <Carousel
//             swipeable={true}
//             draggable={true}
//             responsive={responsive}
//             ssr={true}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={3000}
//             keyBoardControl={true}
//             customTransition="all .8"
//             transitionDuration={3000}
//             containerClass="carousel-container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             itemClass="carousel-item-padding-40-px"
//           >
//             {/* Render content for each category */}
//             {category.contentList.map((content, idx) => (
//               <div key={idx}>
//                 <Link to={`/content/${content.id}`}>
//                   <img
//                     src={content.previewImage}
//                     className={
//                       category.category_layout === "small_square"
//                         ? "slide-img1 p-3"
//                         : category.category_layout === "square"
//                         ? "slide-img3 p-1"
//                         : category.category_layout === "Rectangle"
//                         ? "slide-img2 p-1"
//                         : ""
//                     }
//                     alt={`content-${idx}`}
//                   />
//                 </Link>
//               </div>
//             ))}
//           </Carousel>
//         )}
//       </div>
//     </section>
//   ))}

//           {/* Available Plans */}
//           {apiData && apiData.data.planList.length > 0 && (
//             <section className="my-2 mx-2">
//               <h1>Available Plans</h1>
//               <div className="banner1 my-1">
//                 <div className="d-flex flex-wrap justify-content-around p-2">
//                   {apiData.data.planList.map((plan, idx) => (
//                     <>
//                       <span>
//                         <i className="bi bi-record2-fill fs-1 text-danger"></i>
//                         <small className="text-white fw-1">
//                           {plan.plan_desc}
//                         </small>
//                         <small className="text-white fw-1 m-1">
//                           {plan.validity}
//                         </small>
//                       </span>
//                       <aside>
//                         <Link
//                           to={`/plan/${plan.plan_id}`}
//                           className=" text-dark"
//                         >
//                           {" "}
//                           <strong>BUY</strong> <br />
//                         </Link>

//                         <span className="text-danger">
//                           <i className="bi bi-volume-up-fill fs-2"></i>
//                         </span>
//                       </aside>
//                     </>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Home;
