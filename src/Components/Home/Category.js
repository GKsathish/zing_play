import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Home.css';

const Category = ({ apiData }) => {
  const { category, id } = useParams();
  // Function to calculate padding-bottom based on aspect ratio
  // const apiData = {
  //   heading: "Suggested",
  //   items: [
  //     {
  //       id: 1,
  //       imageUrl: "./Images/att1.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 2,
  //       imageUrl: "./Images/att2.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att3.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att3.jpeg",

  //       aspectRatio: "1:1",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att3.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att6.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att3.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att5.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att4.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att3.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att5.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "./Images/att6.jpeg",

  //       aspectRatio: "16:9",
  //       articleUrl: "/article",
  //       type: "image",
  //     },
  //     // Add more objects as needed
  //   ],
  // };

  const [contentlist, setContentList] = useState([]);

  useEffect(() => {
    // Filter contentList based on category_id and id
    const filteredContent = apiData.categoryList.find(
      (categoryItem) => categoryItem.category_id === parseInt(id)
    );
    console.log(filteredContent);
    setContentList(filteredContent);
  }, [apiData, category, id]);

  console.log(contentlist);
  console.log(apiData, category, id);

  return (
    <div className="container-fluid maincontainer vh-100">
      <div className="row">
        <div className="col">
          <section>
            <figure>
              <img
                src={apiData.purchase_service_logo}
                alt="banner"
                className="banner"
              />
            </figure>
          </section>
          <div className="d-flex justify-content-start my-1">
            <span className="h-40 w-40 ms-1">
              <Link to={`/${apiData.service_id}`}>
                {/* <i className="bi bi-arrow-left text-dark fs-1 fw-bold mx-2 "></i> */}
                              <img
                              className="arow1"
                              src="/arrow.png"
                              alt="next"
                            />
              </Link>
            </span>
            <h1 className="my-2">{contentlist && contentlist.category_name}</h1>
          </div>
          {/* Display the category name */}

        
          <div className="row m-1 overflow-x-hidden">
            {/* Map through contentList and render each item */}
            {contentlist &&
              contentlist.contentList &&
              contentlist.contentList.map((item) => (
                <div className="col-6 col-md-4 col-lg-4 baa " key={item.id} >
                  <Link to={`/content/${contentlist.category_name}/${item.id}`} className="baa">
                    <img
                      src={item.previewImage}
                      alt={item.name}
                      className={
                        contentlist.category_layout === "square"
                          ? "slide-img1"
                          : contentlist.category_layout === "Rectangle"
                          ? "slide-img3"
                          : contentlist.category_layout === "invert-Rectangle"
                          ? "slide-img2"
                          : contentlist.category_layout === "border-square"
                          ? "slide-img"
                          : ""
                      }
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
