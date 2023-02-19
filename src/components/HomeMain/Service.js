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
import Bredcrumb from "./Bredcrumb";

const Service = () => {
  return (
    
    <>
    <Bredcrumb/>
    <section
      id="service-details2"
      className="service-details-two pb-105 p-relative"
      style={{
       
        backgroundColor:"#58846D",
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
                      <Link to="/service-details3">Facial Treatments</Link>
                    </h4>
                    <p>
                    A professional facial is designed to improve your skin.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon2} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details4">Hair Removal</Link>
                    </h4>
                    <p>
                    Hair removal, also known as epilation or depilation, is the deliberate removal of body hair or head hair. 
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon3} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details5">Eyelash Extensions</Link>
                    </h4>
                    <p>
                    Eyelash extensions are synthetic or natural fibers that are attached to your natural eyelashes one by one with a medical-grade adhesive to give the appearance of longer, fuller and thicker eyelashes.
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
                    EMSCULPT NEO is a noninvasive body contouring treatment that is performed in a series of 30 minute sessions. 
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Icon5} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details2">Emsella</Link>
                    </h4>
                    <p>
                    A breakthrough pelvic floor physiotherapy treatment that greatly improves the quality of life for those with serious urinary incontinence.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Icon6} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details6">Microblading</Link>
                    </h4>
                    <p>
                    Is a form of a cosmetic semi-permanent makeup performed using, a manual (not a machine) disposable handheld tool
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Bredcrumb/>
    </>
  );
};

export default Service;
