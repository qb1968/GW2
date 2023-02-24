import React from "react";
import { Link } from "react-router-dom";
import Bredcrumb from "../../HomeMain/Bredcrumb";

import Image from "../../../assets/img/features/wax.jpeg";
import Image2 from "../../../assets/img/features/wax2.jpeg";

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
                      <li className="active">
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
                      <li>
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
                  <h2 style={{ fontFamily: "Gloock,Serif", color: "black" }}>
                    {" "}
                    Hair Removal
                  </h2>
                  <p
                    style={{ fontfamily: "LibreBaskerville", fontSize: "18px" }}
                  >
                    We offer brow, chin, lip and full facial waxing with gentle
                    hard wax. Hair removal cannot be performed at a custom
                    facial appointment.
                  </p>

                  <div className="two-column">
                    <div className="row">
                      <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={Image} alt="blog" />
                        </figure>
                      </div>
                      <div className="text-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={Image2} alt="blog" />
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
