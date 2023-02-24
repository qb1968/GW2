import React from "react";
import { Link } from "react-router-dom";
import Bredcrumb from "../../HomeMain/Bredcrumb";

import IMG from "../../../assets/img/features/micro.jpeg";
import IMG2 from "../../../assets/img/features/micro2.jpeg";
import IMG3 from "../../../assets/img/features/micro3.jpeg";

const Main = () => {
  return (
    <>
      <Bredcrumb />
      <div
        className="about-area5 about-p p-relative"
        style={{ backgroundColor: "#58846D" }}
      >
        <div className="container pt-120 pb-90">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 order-1">
              <aside className="sidebar services-sidebar">
                <div className="sidebar-widget categories">
                  <div className="widget-content">
                    <ul className="services-categories">
                      <li>
                        <Link
                          to="/service-details3"
                          style={{ fontSize: "18px", fontFamily: "Bad Script" }}
                        >
                          {" "}
                          Facial Treatments{" "}
                          <i className="fa fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service-details"
                          style={{ fontSize: "18px", fontFamily: "Bad Script" }}
                        >
                          Emsculpt Neo <i className="fa fa-arrow-right"></i>{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          to="/service-details2"
                          style={{ fontSize: "18px", fontFamily: "Bad Script" }}
                        >
                          {" "}
                          Emsella <i className="fa fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service-details4"
                          style={{ fontSize: "18px", fontFamily: "Bad Script" }}
                        >
                          Hair Removal <i className="fa fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service-details5"
                          style={{ fontSize: "18px", fontFamily: "Bad Script" }}
                        >
                          Eyelash Extensions
                          <i className="fa fa-arrow-right"></i>
                        </Link>
                      </li>
                      <li className="active">
                        <Link
                          to="/service-details6"
                          style={{ fontSize: "18px", fontFamily: "Bad Script" }}
                        >
                          Microblading <i className="fa fa-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="service-detail-contact wow fadeup-animation"
                  data-wow-delay="1.1s"
                >
                  <h3 className="h3-title" style={{ fontFamily: "monospace" }}>
                    If You Need Any Help Contact With Us
                  </h3>
                  <Link to="javascript:void(0);" title="Call now">
                    @ 410-600-8400
                  </Link>
                </div>
              </aside>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 order-2">
              <div className="service-detail">
                <div className="content-box">
                  <h2 style={{ fontFamily: "Gloock,serif", color: "black" }}>
                    What Is Microblading
                  </h2>
                  <p
                    style={{ fontFamily: "LibreBaskerville", fontSize: "16px" }}
                  >
                    Microblading and microshading is a form of cosmetic
                    tattooing. It is a process of inserting pigment into the
                    dermal layer of the skin. Microblading is excellent option
                    for those with thinning, sparse, patchy, or missing
                    eyebrows.
                  </p>
                  <h2 style={{ fontFamily: "Gloock,serif", color: "black" }}>
                    How long does microblading last?{" "}
                  </h2>
                  <p
                    style={{ fontFamily: "LibreBaskerville", fontSize: "16px" }}
                  >
                    Typically results last 12-18 months. These results differ
                    from traditional tattooing because the technique involves
                    light, feather-like strokes that create a more natural
                    looking eyebrow.
                  </p>

                  <div className="two-column">
                    <div className="row">
                      <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={IMG} alt="blog" />
                        </figure>
                      </div>
                      <div className="text-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={IMG2} alt="blog" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "Gloock,serif", color: "black" }}>
                    Does microblading hurt?{" "}
                  </h3>
                  <p
                    style={{ fontFamily: "LibreBaskerville", fontSize: "16px" }}
                  >
                    We use high quality topical anesthetics to keep you as
                    comfortable as possible. This is applied to the skin
                    multiple times during the procedure, to keep you as
                    comfortable as possible.
                  </p>
                  <h3 style={{ fontFamily: "Gloock,serif", color: "black" }}>
                    Do I need to do anything after my appointment?
                  </h3>
                  <p
                    style={{ fontFamily: "LibreBaskerville", fontSize: "16px" }}
                  >
                    The most important aspect to remember for aftercare and
                    healing process is that microblading causes tiny wounds on
                    the skin. So, keeping this area clean during the healing
                    process is important.
                  </p>

                  <div className="two-column">
                    <div className="row">
                      <div className="image-column col-xl-12 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={IMG3} alt="blog" style={{ width: 350 }} />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bredcrumb />
    </>
  );
};

export default Main;
