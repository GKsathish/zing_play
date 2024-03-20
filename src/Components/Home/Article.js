import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling
import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";

const ArticlePage = ({ apiData }) => {
// audio 
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


  const { category, id } = useParams();
  const [articleData, setArticleData] = useState([]);
  const playerRef = useRef();

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
    <div className="container-fluid">
      <div className="row ">
 <div className="col-12 maincontainer ">
 <section className="opacity-25">
              <figure>
                <img
                  src={apiData.purchase_service_logo}
                  alt="banner"
                  className="banner"
                />
              </figure>
              </section>

          <div className="card art-card ">
            <section className="opacity-25">
           
              <div className="d-flex justify-content-start  m-1">
                <figure className="m-1 ">
                  <Link to={apiData.service_id}>
                    <img
                      src={apiData.service_logo}
                      alt="banner"
                      height="80" 
                      width="80"
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
              <div className="player-wrapper ">
                {articleData.videoType === "youtube" ? (
                  <ReactPlayer
                    className="react-player"
                    url={articleData.videoLink}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true}
                  />
                ) : (
                  <ReactHlsPlayer
                    className="react-player"
                    src={articleData.videoLink}
                    autoPlay={false}
                    controls={true}
                    ref={playerRef}
                    width="100%"
                    height="100%"
                    getHLSRef={(hlsJSObject) => {
                      console.log(hlsJSObject);
                    }}
                  />
                )}
              </div>
            ) : (
              <img
                src={articleData.squareImage}
                alt="articelpage"
                className="article-img"
              />
            )}{" "}
            <div className="mx-3">
              <h1 className="my-1">{articleData.name}</h1>
              <p>
              {articleData.language &&  <span>{articleData.language} </span> }  {""}
              {articleData.genre &&  <span> | {articleData.genre} </span> }  {" "}
              {articleData.year && <span> | {articleData.year} </span>}
              </p>

              {articleData.description && (
                <p className="my-2">{articleData.description}</p>
              )}
              {articleData.cast && <p>Cast: {articleData.cast}</p>}
              {articleData.directedBy && (
                <p>Directed by: {articleData.directedBy}</p>
              )}
              {articleData.musicBy && <p>Music by: {articleData.musicBy}</p>}
              {articleData.producedBy && (
                <p>Produced by: {articleData.producedBy}</p>
              )}
              <div className="d-flex justify-content-center align-content-center">
              {showPopup && (
                        <span className="position-fixed translate-middle p-3 shadow  d-flex flex-column justify-content-flex-start align-items-start adio">
                          <span className="fw-semibold">BUY</span>
                          <small style={{ fontSize: "12px" }}>
                            Please go to the nearest STOCHOS retailer to buy
                            this service
                          </small>
                        </span>
                      )}
                {/* <button className="btn btn-warning my-3">Buy Now  
                              <i className="bi bi-volume-up-fill  fw-2 p-2 h-100 w-100" style={{color:"#ab1e91"}}></i>
                           </button>
               */}
                <button className="btn btn-warning my-3 d-flex align-items-center">
                  Buy Now
                  <i
                  onClick={togglePlayer}  
                    className="bi bi-volume-up-fill fw-2 ms-2"
                    style={{ color: "#ab1e91", fontSize: "1.5rem" }}
                  ></i>
                </button>
              </div>


              <audio
                              ref={(element) => {
                                audio = element;
                              }}
                              src={apiData.audio}
                              preload="auto"
                              style={{ display: "none" }}
                            ></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
