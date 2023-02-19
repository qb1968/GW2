import { Link } from "react-router-dom";
import React, { useState } from "react";
import Img1 from "../../assets/img/logo/Rectangle.png";
import BGImg from "../../assets/img/bg/marblebg.jpg"
import BG2 from "../../assets/img/bg/marble2.jpg"

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
           style={{backgroundColor:"#58846D"}}
        >
          <div className="container" style={{}}>
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4">
                  <div style={{marginTop:"10px",marginBottom:"10px",height:"70px",width:"315px",padding:"5px",alignContent:"center",backgroundImage:`url(${BG2})`}} className="logo">
                    <Link to="/">
                      <h4 style={{fontFamily:"Labrada,serif",fontWeight:"bold",alignItems:"center",textAlign:"center",color:"#58846D",fontSize:"25px",textDecoration:"none"}}>Gentle Wellness</h4>
                      <p style={{fontFamily:"Labrada,serif",fontWeight:"bold",alignItems:"center",textAlign:"center",color:"black",fontSize:"20px",textDecoration:"none"}}>Medi-Spa</p>
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
                            style={{ fontSize: 18, color: "black" }}
                          >
                            Home
                          </Link>
                        </li>
                        <li className="has-sub">
                          <Link
                            to="/about"
                            style={{ fontSize: 18, color: "black" }}
                          >
                            About Us
                          </Link>
                          <ul>
                            <li>
                              <Link to="/team">Our Team</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-sub">
                          <Link
                            to="/service"
                            style={{ fontSize: 18, color: "black" }}
                          >
                            Services
                          </Link>
                          <ul>
                            <li>
                              <Link to="/service-details"> Emsculpt Neo</Link>
                            </li>
                            <li>
                              <Link to="/service-details2">Emsella</Link>
                            </li>
                            <li>
                              <Link to="/service-details3"> Facial Treatments</Link>
                            </li>
                            <li>
                              <Link to="/service-details4">Hair Removal</Link>
                            </li>
                            <li>
                              <Link to="/service-details5">Eyelash Extensions</Link>
                            </li>
                            <li>
                              <Link to="/service-details6">Microblading</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-sub">
                          <Link
                            to="/gallery"
                            style={{ fontSize: 18, color: "black" }}
                          >
                            Gallery
                          </Link>
                          </li>

                        <li>
                          <Link
                            to="/contact"
                            style={{ fontSize: 18, color: "black", }}
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
                              
                            </li>
                            <li className="has-sub">
                              <Link to="/about/">About Us</Link>
                              <ul>
                                <li>
                                  <Link to="/team">Our Team</Link>
                                </li>
                              </ul>
                            </li>

                            <li className="has-sub">
                              <Link to="/service">Services</Link>
                              <ul >
                                <li>
                                  <Link to="/service-details"> Emsculpt Neo</Link>
                                </li>
                                <li>
                                  <Link to="/service-details2">Emsella</Link>
                                </li>
                                <li>
                                  <Link to="/service-details3"> Facial Treatments</Link>
                                </li>
                                <li>
                                  <Link to="/service-details4">Hair Removal</Link>
                                </li>
                                <li>
                                  <Link to="/service-details5">Eyelash Extensions</Link>
                                </li>
                                <li>
                                  <Link to="/service-details6">Microblading</Link>
                                </li>
                              </ul>
                              <Link
                                to="/service"
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
                              <Link to="/gallery">Gallery</Link>
                              
                              {/* <Link
                                to="/gallery"
                                className={`mean-expand ${
                                  show2 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow2(show2 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link> */}
                            </li>
                            <li className="has-sub">
                              {/* <Link
                                to="/contact"
                                className={`mean-expand ${
                                  show3 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow3(show3 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link> */}
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
