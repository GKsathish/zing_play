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
    <div className="container-fluid">
      <div className="row">
        <div className="col maincontainer">
          <section>
            <figure>
              <img
                src={apiData.purchase_service_logo}
                alt="banner"
                className="banner "
              />
            </figure>
          </section>
          <div className="d-flex justify-content-start my-2">
            <span className="h-40 w-40 ms-2">
              <Link to={`/${apiData.service_id}`}>
                {/* <i className="bi bi-arrow-left-circle-fill h-40 w-40 mx-2"></i> */}
                <i className="bi bi-arrow-left text-dark fs-2 fw-bold mx-2 "></i>
              </Link>
            </span>
            <h1 className="my-2">{contentlist && contentlist.category_name}</h1>
          </div>
          {/* Display the category name */}

        
          <div className="row m-2">
            {/* Map through contentList and render each item */}
            {contentlist &&
              contentlist.contentList &&
              contentlist.contentList.map((item) => (
                <div className="col-6 col-md-4 col-lg-4" key={item.id}>
                  <Link to={`/content/${contentlist.category_name}/${item.id}`}>
                    <img
                      src={item.previewImage}
                      alt={item.name}
                      className={
                        contentlist.category_layout === "square"
                          ? "slide-img1c p-1"
                          : contentlist.category_layout === "Rectangle"
                          ? "slide-img3c p-1"
                          : contentlist.category_layout === "invert-Rectangle"
                          ? "slide-img2c p-1"
                          : contentlist.category_layout === "border-square"
                          ? "slide-img p-3"
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
