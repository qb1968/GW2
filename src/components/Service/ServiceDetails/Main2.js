import React from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from '../../HomeMain/Bredcrumb'
import BGImg from "../../../assets/img/bg/marble2.jpg";
import IMG from "../../../assets/img/features/emsella.jpeg"
import IMG2 from "../../../assets/img/features/emsella2.jpeg"
import IMG3 from "../../../assets/img/features/emsella3.jpeg"

const Main = () => {
    return (
      <>
      <Bredcrumb/>
        <div
          className="about-area5 about-p p-relative"
          style={{ backgroundColor:"#58846D" }}
        >
          <div className="container pt-120 pb-90">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 order-1">
                <aside className="sidebar services-sidebar">
                  <div className="sidebar-widget categories">
                    <div className="widget-content">
                      <ul className="services-categories">
                        <li>
                          <Link to="/service-details3" style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            {" "}
                            Facial Treatments{" "}
                            <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li >
                          <Link to="/service-details" style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            Emsculpt Neo <i className="fa fa-arrow-right"></i>{" "}
                          </Link>{" "}
                        </li>
                        <li className="active">
                          <Link to="/service-details2" style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            {" "}
                            Emsella <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-details4" style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            Hair Removal <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-details5" style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            Eyelash Extensions
                            <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-details6" style={{fontSize:"18px",fontFamily:"Bad Script"}}>
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
                    <h3 className="h3-title" style={{fontFamily:"monospace"}}>
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
                    <h2 style={{fontFamily:"Gloock,serif",color:"black"}}> What Is Emsella?</h2>
                    <p style={{fontFamily:"LibreBaskerville",fontSize:"16px"}}>
                    EMSELLA uses electromagnetic energy to cause deep pelvic floor muscle stimulation without getting undressed! A single BTL EMSELLA session brings thousands of Kegel-like contractions which help you train your muscles without any effort. Scientific research shows that 95% of treated patients have reported significant improvement in their quality of life.
                    </p>
                    <h2 style={{fontFamily:"Gloock,serif",color:"black"}}>What are the benefits of Emsella? </h2>
                    <p style={{fontFamily:"LibreBaskerville",fontSize:"16px"}}>
                    EMSELLA is a great option for women of any age who desire a non-invasive solution for urinary incontinence and improvement in their quality of life. Due to factors such as the body's normal aging, childbirth or menopause, the pelvic floor muscles decondition and insufficiently support the pelvic organs. These factors directly correlate with urinary incontinence. 
Emsella treatments for men have substantially improved many individuals' quality of life, confidence, sexual health, and sexual performance. Treatments are quick, non-surgical, and pain-free, providing men with a comfortable solution to stressful conditions. 
The pelvic floor muscles support the bladder, rectum, and prostate. When these muscles become weakened, it can lead to issues such as urinary incontinence, erectile dysfunction, and premature ejaculation. 

                    </p>
                    
                    <div className="two-column">
                      <div className="row">
                        <div className="image-column col-xl-6 col-lg-12 col-md-12">
                          <figure className="image">
                            <img
                              src={IMG}
                              alt="blog"
                            />
                          </figure>
                        </div>
                        <div className="text-column col-xl-6 col-lg-12 col-md-12">
                          <figure className="image">
                            <img
                              src={IMG2}
                              alt="blog"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <h3 style={{fontFamily:"Gloock,serif",color:"black"}}>How many treatments are needed? </h3>
                    <p style={{fontFamily:"LibreBaskerville",fontSize:"16px"}}>Results after about six sessions, scheduled twice a week</p>
                    
                   
                    <div className="two-column">
                      <div className="row">
                        <div className="image-column col-xl-12 col-lg-12 col-md-12">
                          <figure className="image">
                            <img
                              src={IMG3}
                              alt="blog"
                            />
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
        <Bredcrumb/>      
        </>
    );
}

export default Main