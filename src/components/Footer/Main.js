import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/bg/footer-bg.png";
import Img1 from "../../assets/img/brand/gwms.jpg";
import Img2 from "../../assets/img/icon/ft-icon01.png";
import Footer from "../../assets/img/icon/email1.png";
import Footer1 from "../../assets/img/icon/ft-icon03.png";
import BGImg2 from "../../assets/img/bg/marble2.jpg";

const Main = () => {
  return (
    <>
      <footer
        className="footer-bg footer-p pt-90"
        style={{ backgroundColor: "#58846d" }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title mb-40">
                    <img src={Img1} alt="logo" />
                  </div>
                  <div className="footer-link">
                    <p style={{ color: "black" }}>
                    At Gentle Wellness our mission is to provide a world class spa experience while providing personalized services to each client and enhance their natural beauty. We strive to build rewarding relationships with our clients and community, through knowledge, wellness, and superior service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Other Links</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/"> Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/service">Price List</Link>
                      </li>
                      <li>
                        <Link to="/gallery"> Gallery</Link>
                      </li>
                      <li>
                        <Link to="/team">Our Team</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Our Services</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/service">Price List</Link>
                      </li>
                      <li>
                        <Link to="service-details"> Emsculpt Neo</Link>
                      </li>
                      <li>
                        <Link to="service-details2">Emsella</Link>
                      </li>
                      <li>
                        <Link to="service-details3"> Facial Treatments</Link>
                      </li>
                      <li>
                        <Link to="service-details4">Hair Removal</Link>
                      </li>
                      <li>
                        <Link to="service-details5">Eyelash Extensions</Link>
                      </li>
                      <li>
                        <Link to="service-details6">Microblading</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30"></div>
                <div className="footer-social mt-10">
                  <a
                    href="https://www.facebook.com/people/Gentle-Wellness/100082154836561/"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/gentle_wellness_llc/"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="row align-items-center copyright-wrap"
              style={{ backgroundColor: "#58846d" }}
            >
              <div className="col-lg-6">
                <div className="copy-text" style={{ color: "black" }}>
                  Copyright &copy; 2023Jonathan Allison. All rights reserved.
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copay-contact">
                  <ul>
                    <li>
                      <div className="c-contact">
                        <div className="icon">
                          <i
                            class="fa fa-at"
                            style={{ fontSize: "x-large", color: "black" }}
                          />
                        </div>
                        <div className="text">
                          <span>gentlewellnessllc@gmail.com</span>
                          <h3> Our Email:</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="c-contact">
                        <div className="icon">
                          <i
                            class="fa fa-phone-volume"
                            style={{ fontSize: "x-large", color: "black" }}
                          />
                        </div>
                        <div className="text">
                          <span>410-600-8400</span>
                          <h3>Call Now:</h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
