import React from "react";
import "./Home.css";

const Article = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card art-card">
            <img src="./Images/att1.jpeg" alt='articelpage' className="article-img"/>
            <div className="mx-3">
             <h1 className="my-1">
               Baby John
             </h1>
             <p><span>Language</span> | <span>Genre</span> | <span>Time</span> | <span>Year</span></p>
             <p className="my-2">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              felis quis dolor malesuada fermentum. Nullam consectetur libero
              vel nisl malesuada, nec sagittis mauris fermentum. Integer ac
              consequat purus. Maecenas eget nunc nec quam vestibulum interdum
             </p>
             <p>Cast:</p>
             <p>Directed by:</p>
             <p>Music by:</p>
             <p>Produced by:</p>
             <div className="d-flex justify-content-center align-content-center">
              <button className="btn btn-warning my-2 ">Buy Now</button></div>
 
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Article;
