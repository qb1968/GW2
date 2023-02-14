import { Link } from "react-router-dom";
import BGImg2 from "../../assets/img/bg/marble2.jpg";
import React from "react";
import Icon1 from "../../assets/img/icon/face.png";
import Icon2 from "../../assets/img/icon/hair.jpg";
import Icon3 from "../../assets/img/icon/eyelashes.png";
import Icon4 from "../../assets/img/icon/stones.png";
import Icon5 from "../../assets/img/icon/spa.png";
import Icon6 from "../../assets/img/icon/microb.jpg";
import Img from "../../assets/img/features/services-img-details2.png";

const Service = () => {
  return (
    <section
      id="service-details2"
      className="service-details-two pb-105 p-relative"
      style={{
       
        backgroundImage: `url(${BGImg2})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center">
              
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
           
            <div className="about-content s-about-content">
              <ul className="sr-tw-ul ">
                <li>
                  <div className="icon-right">
                    <img src={Icon1} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details">Facial Treatments</Link>
                    </h4>
                    <p>
                      Cras id aliquam leo. Vestibulum laoreet, mi sit amet
                      tristique tincidunt nec laoreet.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon2} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details">Hair Removal</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon3} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details">Eyelash Extensions</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
            <div className="sd-img">
              <img src={Img} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-content s-about-content">
              <ul className="sr-tw-ul sr-thr-ul">
                <li>
                  <div className="icon">
                    <img src={Icon4} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details">Emsculpt Neo</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Icon5} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details">Emsella</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Icon6} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details">Microblading</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
