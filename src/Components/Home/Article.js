import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling
import ReactPlayer from 'react-player';


const ArticlePage = ({ apiData }) => {
  const { category, id } = useParams();
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    // Check if apiData is not null or undefined
    // console.log(apiData);
    if (apiData && apiData.categoryList) {
      // Filter the categoryList based on the category
      console.log(apiData.categoryList);
      const categoryData = apiData.categoryList.find(
        (cat) => cat.category_name === category
      );
      console.log(categoryData);
      if (categoryData) {
        // Filter the contentList based on the id
        const content = categoryData.contentList.find(
          (content) => content.id == id
        );
        console.log(content);
        setArticleData(content);
      }
    }
  }, [apiData, category, id]);
  console.log(articleData);
  return (
    <div className="container-fluid  vh-100">
      <div className="row">
        <div className="col ">
          <div className="card art-card maincontainer">
            <section className="opacity-25">
              <figure>
                <img
                  src={apiData.purchase_service_logo}
                  alt="banner"
                  className="banner"
                />
              </figure>
              <div className="d-flex justify-content-start m-1">
                  <figure className="m-1 ">
                    <Link to={apiData.service_id} >
                      <img
                        src={apiData.service_logo}
                        alt="banner"
                        height="72"
                        width="79"
                        className="border border-dark  shadow rounded py-5  icons"
                      />
                    </Link>
                  </figure>
                  <small className="m-1">
                    <h1>{apiData.service_name}</h1>
                    <small>{apiData.remarks}</small>
                  </small>
                </div>
            </section>
            {articleData.typeOfContent === "VDO" ? (
                // <video controls >
                //   <source src={articleData.videoLink} type="video/mp4"  autoplay/>
                // </video>
             <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={articleData.videoLink}

                width='100%'
                height='100%'
                controls={true}
                playing={true}
              />
            </div>
            ) : (
              <img
                src={articleData.previewImage}
                alt="articelpage"
                className="article-img"
              />
            )}{" "}
            <div className="mx-3">
              <h1 className="my-1">{articleData.name}</h1>
              <p>
                <span>{articleData.language}</span> |{" "}
                <span>{articleData.genre}</span> |{" "}
                <span>{articleData.year}</span>
              </p>
              <p className="my-2">{articleData.description}</p>
              <p>Cast: {articleData.cast}</p>
              <p>Directed by: {articleData.directedBy}</p>
              <p>Music by: {articleData.musicBy}</p>
              <p>Produced by: {articleData.producedBy}</p>
              <div className="d-flex justify-content-center align-content-center">
                {/* <button className="btn btn-warning my-3">Buy Now  
                              <i className="bi bi-volume-up-fill  fw-2 p-2 h-100 w-100" style={{color:"#ab1e91"}}></i>
                           </button>
               */}
               <button className="btn btn-warning my-3 d-flex align-items-center">
    Buy Now
    <i className="bi bi-volume-up-fill fw-2 ms-2" style={{ color: "#ab1e91", fontSize: "1.5rem" }}></i>
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
