import React, { useState } from "react";
import BGImg from "../../assets/img/bg/marble2.jpg";

import Img1 from "../../assets/img/gallery/20230301_143044.jpg";
import Img2 from "../../assets/img/gallery/Brows before and after.png";
import Img3 from "../../assets/img/gallery/Daytime-Control-2.jpg";
import Img4 from "../../assets/img/gallery/Facetune..JPEG";
import Img5 from "../../assets/img/gallery/IMG_0564.jpg";
import Img6 from "../../assets/img/gallery/maddy in action.jpg";
import Img7 from "../../assets/img/gallery/Results after 1 facial.png";
import Img8 from "../../assets/img/gallery/unnamed.jpg";

const Gallery = () => {
  return (
    <>
      <section
        className="team-area fix p-relative pt-120 pb-90"
        style={{ backgroundImage: `url(${BGImg})` }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "Alex Brush",
            textAlign: "center",
            color: "black",
          }}
        >
          Gallery
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <figure>
                <img src={Img1} alt=""/>
              </figure>
            </div>

            <div className="col-lg-4">
              <figure>
                <img src={Img2} alt=""/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
                <img src={Img4} alt=""/>
              </figure>
            </div>
            <div className="col-lg-6">
              <figure>
                <img src={Img3} alt=""/>
              </figure>
            </div>

            <div className="col-lg-6">
              <figure>
                <img src={Img5} style={{ height: 500, width: 600 }} alt=""/>
              </figure>
            </div>
            <div className="col-lg-3">
              <img src={Img8} style={{ height: 300 }} alt=""/>
            </div>
            <div className="col-lg-4">
              <img src={Img6} alt=""/>
            </div>
            <div className="col-lg-4">
              <img src={Img7} alt=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
