import React, { useState, useEffect } from "react";
import "./Home.css";
// import "react-magic-slider-dots/dist/magic-dots.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

const Home = ({ apiData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  let audio;
  const togglePlayer = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      // If not playing, start playing the audio
      audio.play();
      setShowPopup(true);
      // Show popup after 10 seconds when audio is playing
     let st= setTimeout(() => {
        setShowPopup(false);
        setIsPlaying(false);
        clearTimeout(st);
      }, 1000);
     
    } else {
      // If already playing, pause the audio
      audio.pause();

      // Hide popup
      setShowPopup(false);
      setIsPlaying(false);
    }
  };

  // const togglePlayer = () => {
  //   let timeout;
  //   setIsPlaying(!isPlaying);
  //   if (!isPlaying) {
  //     // If not playing, start playing the audio
  //     audio.play();

  //       // Show popup after 10 seconds when audio is playing
  //       timeout = setTimeout(() => {
  //         setShowPopup(false);
  //         setIsPlaying(false);
  //       }, 2000);

  // setShowPopup(true);
  //     return () => clearTimeout(timeout);
  //   } else {
  //     // If already playing, pause the audio
  //     audio.pause();

  //     setIsPlaying(false);

  //   }
  // };

  // Responsive settings for carousels
  // const [showPlayer, setShowPlayer] = useState(false);

  // const togglePlayer = () => {
  //   setShowPlayer(!showPlayer);
  // };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 2 }, // Change items to 2 for all categories except explore
  };

  const responsiveForExplore = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3, slidesToSlide: 3 }, // Change items to 3 for mobile view for explore
  };

  const getCategoryResponsive = (category) => {
    if (
      category.category_layout === "square" ||
      category.category_layout === "invert-Rectangle"
    ) {
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
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000, // Change this value to a higher number, like 3000 (3 seconds)
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    },
  };

  // Render the component
  return (
    <div className="container-fluid  ">
      <div className="row bg-light border-1 shadow overflow-x-hidden">
        <div className="col-12 maincontainer">
          {/* Banner */}
          <div className="banner">
            <img
              src={apiData.purchase_service_logo}
              alt="banner"
              className="banner"
            />
          </div>
          <div className="col-12 content-container overflow-x-hidden">
            {/* Check if apiData has been populated */}
            {Object.keys(apiData).length > 0 && (
              <>
                <section className="mb-4">
                  <div className="d-flex justify-content-start m-1">
                    <figure className="m-1 ">
                      <Link to={apiData.service_id}>
                        <img
                          src={apiData.service_logo}
                          alt="banner"
                          height="80"
                          width="80"
                          className="border   shadow rounded   icons"
                        />
                      </Link>
                    </figure>
                    <small className="m-1">
                      <h1>{apiData.service_name}</h1>
                      <small>{apiData.remarks}</small>
                    </small>
                  </div>
                </section>

                {/* Render categories if present */}
                {apiData.categoryList &&
                  apiData.categoryList.map((category, index) => (
                    <>
                      {/* <section key={index}  className="mx-2"> */}
                      <small
                        key={index}
                        className="d-flex  mx-2 justify-content-between align-items-center"
                      >
                        {category.category_layout === "border-square" && (
                          <h1 className="text-center ps-1">
                            {category.category_name}
                          </h1>
                        )}
                      </small>
                      {category.category_layout === "border-square" &&
                        category.contentList.length > 0 && (
                          <Slider {...settings}>
                            {category.contentList
                              .slice(0, 12)
                              .map((item, index) => (
                                // <div key={item.id} className="mb-0" >
                                <Link
                                  key={item.id}
                                  to={`/content/${category.category_name}/${item.id}`}
                                  className="mx-1"
                                >
                                  <img
                                    src={item.previewImage}
                                    className="slide-img image-with-shadow"
                                    alt={item.name}
                                  />
                                </Link>
                                // </div>
                              ))}
                          </Slider>
                        )}
                      {/* </section> */}
                      <section className="mb-3 mx-1">
                        <span className="d-flex justify-content-between align-items-center mx-2">
                          {category.category_layout !== "border-square" && (
                            <>
                              <h1 className="text-center mt-2">
                                {category.category_name}
                              </h1>
                              <Link
                                to={`/category/${category.category_name}/${category.category_id}`}
                              >
                                {/* <i className="bi bi-arrow-right text-dark fs-2 fw-bold"></i> */}
                                <img
                                  className="arow"
                                  src="./arrow.png"
                                  alt="next"
                                />
                              </Link>
                            </>
                          )}
                        </span>
                        {category.category_layout !== "border-square" && (
                          <Carousel
                            swipeable={true}
                            draggable={true}
                            // responsive={responsive}
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
                            {category.contentList
                              .slice(0, 12)
                              .map((content, idx) => (
                                // <div key={idx}  className="">
                                <Link
                                  key={idx}
                                  to={`/content/${category.category_name}/${content.id}`}
                                  className="shadow-sm shadow-lg shadows baa"
                                >
                                  <img
                                    src={content.previewImage}
                                    className={
                                      category.category_layout === "square"
                                        ? "slide-img1 "
                                        : category.category_layout ===
                                          "Rectangle"
                                        ? "slide-img3 "
                                        : category.category_layout ===
                                          "invert-Rectangle"
                                        ? "slide-img2 "
                                        : ""
                                    }
                                    alt={`content-${idx}`}
                                  />
                                </Link>
                                // </div>
                              ))}
                          </Carousel>
                        )}
                      </section>
                    </>
                  ))}

                {/* Render plans if present */}

                {apiData.planList && apiData.planList.length > 0 && (
                  <section className="my-4 mx-2">
                    <h1 className="px-2"> Available Plans</h1>
                    <div className="banner1 ">
                      {showPopup && (
                        <span className="position-fixed translate-middle p-3 shadow  d-flex flex-column justify-content-flex-start align-items-start adio">
                          <span className="fw-semibold">BUY</span>
                          <small style={{ fontSize: "12px" }}>
                            Please go to the nearest STOCHOS retailer to buy
                            this service
                          </small>
                        </span>
                      )}
                      <div className="d-flex flex-wrap justify-content-between  align-items-center  m-2 p-1">
                        {apiData.planList.map((plan, idx) => (
                          <React.Fragment key={idx}>
                            <span>
                              <i className="bi bi-circle-fill  text-center text-danger border  border-4 border-white rounded-4  "></i>
                              <strong className="text-white px-3 ">
                                {plan.plan_desc}
                              </strong>
                              {/* <small className="text-white px-1 ">
                              {plan.validity}
                            </small> */}
                            </span>
                            <aside>
                              <Link
                                to={`/plan/${plan.plan_id}`}
                                className=" text-dark"
                              >
                                {" "}
                                <strong>BUY</strong> <br />
                              </Link>
                              <span onClick={togglePlayer}>
                                <i
                                  className="bi bi-volume-up-fill fs-2 "
                                  style={{ color: "#ab1e91" }}
                                ></i>
                              </span>
                            </aside>

                            <audio
                              ref={(element) => {
                                audio = element;
                              }}
                              src={apiData.audio}
                              preload="auto"
                              style={{ display: "none" }}
                            ></audio>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  //    <div className="container-fluid ">
  //    <div className="row bg-light border-1 shadow overflow-x-hidden">
  //      <div className="col-12 maincontainer">
  //        {/* Banner */}
  //        <div className="banner">
  //          <img
  //            src={apiData.purchase_service_logo}
  //            alt="banner"
  //            className="banner"
  //          />
  //        </div>
  //        <div className="col-12 content-container overflow-x-hidden">
  //          {/* Check if apiData has been populated */}
  //          {Object.keys(apiData).length > 0 && (
  //            <>
  //              <section className="mb-4">
  //                <div className="d-flex justify-content-start m-1">
  //                  <figure className="m-1 ">
  //                    <Link to={apiData.service_id}>
  //                      <img
  //                        src={apiData.service_logo}
  //                        alt="banner"
  //                        height="80"
  //                        width="80"
  //                        className="border   shadow rounded   icons"
  //                      />
  //                    </Link>
  //                  </figure>
  //                  <small className="m-1">
  //                    <h1>{apiData.service_name}</h1>
  //                    <small>{apiData.remarks}</small>
  //                  </small>
  //                </div>
  //              </section>

  //              {/* Render categories if present */}
  //              {apiData.categoryList &&
  //                apiData.categoryList.map((category, index) => (
  //                  <>
  //                    {/* <section key={index}  className="mx-2"> */}
  //                    <small
  //                      key={index}
  //                      className="d-flex  mx-2 justify-content-between align-items-center"
  //                    >
  //                      {category.category_layout === "border-square" && (
  //                        <h1 className="text-center ps-1">
  //                          {category.category_name}
  //                        </h1>
  //                      )}
  //                    </small>
  //                    {category.category_layout === "border-square" &&
  //                      category.contentList.length > 0 && (
  //                        <Slider {...settings}>
  //                          {category.contentList
  //                            .slice(0, 12)
  //                            .map((item, index) => (
  //                              // <div key={item.id} className="mb-0" >
  //                              <Link
  //                                key={item.id}
  //                                to={`/content/${category.category_name}/${item.id}`}
  //                                className="mx-1"
  //                              >
  //                                <img
  //                                  src={item.previewImage}
  //                                  className="slide-img image-with-shadow"
  //                                  alt={item.name}
  //                                />
  //                              </Link>
  //                              // </div>
  //                            ))}
  //                        </Slider>
  //                      )}
  //                    {/* </section> */}
  //                    <section className="mb-3 mx-1">
  //                      <span className="d-flex justify-content-between align-items-center mx-2">
  //                        {category.category_layout !== "border-square" && (
  //                          <>
  //                            <h1 className="text-center mt-2">
  //                              {category.category_name}
  //                            </h1>
  //                            <Link
  //                              to={`/category/${category.category_name}/${category.category_id}`}
  //                            >
  //                              {/* <i className="bi bi-arrow-right text-dark fs-2 fw-bold"></i> */}
  //                              <img
  //                                className="arow"
  //                                src="./arrow.png"
  //                                alt="next"
  //                              />
  //                            </Link>
  //                          </>
  //                        )}
  //                      </span>
  //                      {category.category_layout !== "border-square" && (
  //                        <Carousel
  //                          swipeable={true}
  //                          draggable={true}
  //                          // responsive={responsive}
  //                          responsive={getCategoryResponsive(category)} // Apply different responsive settings based on category
  //                          ssr={true}
  //                          infinite={true}
  //                          autoPlay={true}
  //                          autoPlaySpeed={3000}
  //                          keyBoardControl={true}
  //                          customTransition="all .8"
  //                          transitionDuration={3000}
  //                          containerClass="carousel-container"
  //                          removeArrowOnDeviceType={["tablet", "mobile"]}
  //                          itemClass="carousel-item-padding-40-px"
  //                        >
  //                          {category.contentList
  //                            .slice(0, 12)
  //                            .map((content, idx) => (
  //                              // <div key={idx}  className="">
  //                              <Link
  //                                key={idx}
  //                                to={`/content/${category.category_name}/${content.id}`}
  //                                className="shadow-sm shadow-lg shadows baa"
  //                              >
  //                                <img
  //                                  src={content.previewImage}
  //                                  className={
  //                                    category.category_layout === "square"
  //                                      ? "slide-img1 "
  //                                      : category.category_layout ===
  //                                        "Rectangle"
  //                                      ? "slide-img3 "
  //                                      : category.category_layout ===
  //                                        "invert-Rectangle"
  //                                      ? "slide-img2 "
  //                                      : ""
  //                                  }
  //                                  alt={`content-${idx}`}
  //                                />
  //                              </Link>
  //                              // </div>
  //                            ))}
  //                        </Carousel>
  //                      )}
  //                    </section>
  //                  </>
  //                ))}

  //              {/* Render plans if present */}

  //              {apiData.planList && apiData.planList.length > 0 && (
  //                <section className="my-4 mx-2">
  //                  <h1 className="px-2"> Available Plans</h1>
  //                  <div className="banner1 ">
  //                    {showPopup && (
  //                      <span className="position-fixed translate-middle p-3 shadow  d-flex flex-column justify-content-flex-start align-items-start adio">
  //                        <span className="fw-semibold">BUY</span>
  //                        <small style={{ fontSize: "12px" }}>
  //                          Please go to the nearest STOCHOS retailer to buy
  //                          this service
  //                        </small>
  //                      </span>
  //                    )}
  //                    <div className="d-flex flex-wrap justify-content-between  align-items-center  m-2 p-1">
  //                      {apiData.planList.map((plan, idx) => (
  //                        <React.Fragment key={idx}>
  //                          <span>
  //                            <i className="bi bi-circle-fill  text-center text-danger border  border-4 border-white rounded-4  "></i>
  //                            <strong className="text-white px-3 ">
  //                              {plan.plan_desc}
  //                            </strong>
  //                            {/* <small className="text-white px-1 ">
  //                            {plan.validity}
  //                          </small> */}
  //                          </span>
  //                          <aside>
  //                            <Link
  //                              to={`/plan/${plan.plan_id}`}
  //                              className=" text-dark"
  //                            >
  //                              {" "}
  //                              <strong>BUY</strong> <br />
  //                            </Link>
  //                            <span onClick={togglePlayer}>
  //                              <i
  //                                className="bi bi-volume-up-fill fs-2 "
  //                                style={{ color: "#ab1e91" }}
  //                              ></i>
  //                            </span>
  //                          </aside>

  //                          <audio
  //                            ref={(element) => {
  //                              audio = element;
  //                            }}
  //                            src={apiData.audio}
  //                            preload="auto"
  //                            style={{ display: "none" }}
  //                          ></audio>
  //                        </React.Fragment>
  //                      ))}
  //                    </div>
  //                  </div>
  //                </section>
  //              )}
  //            </>
  //          )}
  //        </div>
  //      </div>
  //    </div>
  //  </div>
  );
};

// Export the Home component
export default Home;
