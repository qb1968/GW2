import React from "react";
import BGImg2 from "../../assets/img/bg/marble2.jpg";

import Testimonial from "../HomeMain/Testimonial";

import Img10 from "../../assets/img/brand/front.jpg";
import Img11 from "../../assets/img/brand/facialbed.jpg";
import Bredcrumb from "../HomeMain/Bredcrumb";

const Main = () => {
  return (
    <>
      <Bredcrumb />
      <main>
        <section id="home" className="slider-area fix p-relative">
          <div className="slider-active" style={{ background: "#00173c" }}>
            <div
              className="single-slider slider-bg d-flex align-items-center"
              style={{
                backgroundSize: "cover",
                backgroundColor: "#58846d",
              }}
            >
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-10 col-md-10">
                    <div className="slider-content s-slider-content mt-5">
                      <h2
                        style={{
                          fontFamily: "Alex Brush",
                          color: "black",
                          textAlign: "center",
                        }}
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Our Mission
                      </h2>

                      <p
                        style={{
                          fontSize: "20px",
                          fontFamily: "LibreBaskerville",
                          fontWeight: "bold",
                          color: "black",
                        }}
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        At Gentle Wellness our mission is to provides a world
                        class spa experience while providing personalized
                        services to each client and enhance their natural
                        beauty. We strive to build rewarding relationships with
                        our clients and community, through knowledge, wellness,
                        and superior service.
                      </p>
                    </div>

                    <img
                      style={{
                        marginTop: "20px",
                        width: "520px",
                        height: "400px",
                        float: "left",
                        borderStyle: "solid",
                        borderWidth: "25px",
                        borderImageSource: `url(${BGImg2})`,
                        borderImageSlice: 60,
                        borderImageWidth: 20,
                        borderImageRepeat: "round",
                      }}
                      src={Img10}
                      alt="product"
                    />

                    <img
                      style={{
                        marginTop: "20px",
                        width: "520px",
                        height: "400px",
                        float: "right",
                        borderStyle: "solid",
                        borderWidth: "25px",
                        borderImageSource: `url(${BGImg2})`,
                        borderImageSlice: 60,
                        borderImageWidth: 20,
                        borderImageRepeat: "round",
                        marginBottom: "10px",
                      }}
                      src={Img11}
                      alt="product"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
      </main>
    </>
  );
};

export default Main;
