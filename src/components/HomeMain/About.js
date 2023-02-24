import React from "react";

import Img from "../../assets/img/brand/productshelf.jpg";

const About = () => {
  return (
    <>
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundColor: "#58846d",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h2 style={{ fontFamily: "Alex Brush" }}>
                    Building your natural beauty
                  </h2>
                </div>
                <p style={{ fontFamily: "LibreBaskerville" }}>
                  Gentle Wellness was founded by Dr. Cynthia Sclater D.M.D in
                  2022 with our community in mind. With 18+ years serving our
                  community through Gentle Family Dentistry Dr. Sclater realized
                  we can do more. Our team is dedicated to helping our patients
                  enhance their natural beauty by providing nonsurgical,
                  rejuvenating treatments and services. We help each patient to
                  achieve their unique aesthetic and wellness goals without
                  permanently altering their appearances with cosmetic surgery.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInRight animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <img src={Img} alt="img" />
                {/* <div className="about-text second-about">
                  <span>15</span>
                  <p>Years of Experience</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
