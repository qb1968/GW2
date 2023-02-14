import { Link } from "react-router-dom";
import React, { useState } from "react";
import Img1 from "../../assets/img/brand/gwms.jpg";
import BGImg from "../../assets/img/bg/marblebg.jpg"

const Main = () => {
  const [mobile, setmobile] = useState(false);
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  return (
    <>
      <header className="header-area header-three">
        <div
          id="header-sticky"
          className="menu-area"
          style={{ backgroundImage: `url(${BGImg})` }}
        >
          <div className="container" style={{}}>
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4">
                  <div className="logo">
                    <Link to="/">
                      <img
                        style={{  height: 200 }}
                        src={Img1}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 col-lg7">
                  <div className="main-menu text-right text-xl-right">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-sub">
                          <Link
                            to="/"
                            style={{ fontSize: 24, color: "#58846d" }}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            style={{ fontSize: 24, color: "#58846d" }}
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="has-sub">
                          <Link
                            to="/service"
                            style={{ fontSize: 24, color: "#58846d" }}
                          >
                            Services
                          </Link>
                          <ul>
                            <li>
                              <Link to="/service-details"> Emsculpt Neo</Link>
                            </li>
                            <li>
                              <Link to="/service-details">Emsella</Link>
                            </li>
                            <li>
                              <Link to="/service-details"> Facial Treatments</Link>
                            </li>
                            <li>
                              <Link to="/service-details">Hair Removal</Link>
                            </li>
                            <li>
                              <Link to="/service-details">Eyelash Extensions</Link>
                            </li>
                            <li>
                              <Link to="/service-details">Microblading</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-sub">
                          <Link
                            to="#"
                            style={{ fontSize: 24, color: "#58846d" }}
                          >
                            Pages
                          </Link>
                          <ul>
                            <li>
                              <Link to="/gallery">Gallery</Link>
                            </li>

                            <li>
                              <Link to="/team">Team</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link
                            to="/contact"
                            style={{ fontSize: 24, color: "#58846d" }}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-12">
                  <div className="mobile-menu mean-container">
                    <div className="mean-bar">
                      <Link
                        to="#nav"
                        className={`meanmenu-reveal ${mobile && "meanclose"}`}
                        onClick={() =>
                          setmobile(mobile === true ? false : true)
                        }
                        style={{
                          right: "0",
                          left: "auto",
                          textAlign: "center",
                          textIndent: "0px",
                          fontSize: "18px",
                        }}
                      >
                        {mobile ? (
                          "X"
                        ) : (
                          <>
                            <span>
                              <span>
                                <span></span>
                              </span>
                            </span>
                          </>
                        )}
                      </Link>
                      <nav className="mean-nav">
                        {mobile && (
                          <ul style={{ display: mobile ? "block" : "none" }}>
                            <li className="has-sub">
                              <Link to="/">Home</Link>
                              <ul style={{ display: show ? "block" : "none" }}>
                                <li>
                                  <Link to="/">Home Page 01</Link>
                                </li>
                              </ul>
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow(show === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li>
                              <Link to="/about/">About Us</Link>
                            </li>

                            <li className="has-sub">
                              <Link to="/service">Services</Link>
                              <ul style={{ display: show1 ? "block" : "none" }}>
                                <li>
                                  <Link to="/service-details"> Emsculpt Neo</Link>
                                </li>
                                <li>
                                  <Link to="/service-details">Emsella</Link>
                                </li>
                                <li>
                                  <Link to="/service-details"> Facial Treatments</Link>
                                </li>
                                <li>
                                  <Link to="/service-details">Hair Removal</Link>
                                </li>
                                <li>
                                  <Link to="/service-details">Eyelash Extensions</Link>
                                </li>
                                <li>
                                  <Link to="/service-details">Microblading</Link>
                                </li>
                              </ul>
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show1 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow1(show1 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li className="has-sub">
                              <Link to="#">Pages</Link>
                              <ul style={{ display: show2 ? "block" : "none" }}>
                                <li>
                                  <Link to="/gallery">Gallery</Link>
                                </li>

                                <li>
                                  <Link to="/team">Team</Link>
                                </li>
                              </ul>
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show2 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow2(show2 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li className="has-sub">
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show3 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow3(show3 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li className="mean-last">
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        )}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Main;
