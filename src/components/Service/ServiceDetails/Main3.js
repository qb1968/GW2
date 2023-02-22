import React from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from '../../HomeMain/Bredcrumb'
import BGImg from "../../../assets/img/bg/marble2.jpg";
import IMG from "../../../assets/img/features/face.jpeg"
import IMG2 from "../../../assets/img/features/face2.jpeg"
import IMG3 from "../../../assets/img/features/face3.jpeg"

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
                        <li className="active">
                          <Link to="/service-details3"style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            {" "}
                            Facial Treatments{" "}
                            <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li >
                          <Link to="/service-details"style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            Emsculpt Neo <i className="fa fa-arrow-right"></i>{" "}
                          </Link>{" "}
                        </li>
                        <li >
                          <Link to="/service-details2"style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            {" "}
                            Emsella <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-details4"style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            Hair Removal <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-details5"style={{fontSize:"18px",fontFamily:"Bad Script"}}>
                            Eyelash Extensions
                            <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-details6"style={{fontSize:"18px",fontFamily:"Bad Script"}}>
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
                    <h3 className="h3-title"style={{fontFamily:"monospace"}}>
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
                    <h2 style={{fontFamily:"Gloock,serif",color:"black"}}> Facial Treatments</h2>
                    <p style={{fontFamily:"LibreBaskerville",fontSize:"16px"}}>
                    Skin Analysis: Our Licensed Esthetician will provide you with an in depth consultation and a thorough analysis of your skin in order to determine how to improve its function and 
appearance. 

                    </p>
                    
                    <div className="two-column">
                      <div className="row">
                        <div className="image-column col-xl-6 col-lg-12 col-md-12">
                          <figure className="image">
                            <img
                              src={IMG}
                              alt="blog"
                              style={{height:275.25}}
                            />
                          </figure>
                        </div>
                        <div className="text-column col-xl-6 col-lg-12 col-md-12">
                          <figure className="image">
                            <img
                              src={IMG2}
                              alt="blog"
                              style={{height:275.25}}
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                   
                    <p style={{fontFamily:"LibreBaskerville",fontSize:"16px"}}>Custom Facials: Following your skin analysis, our Licensed Esthetician will carefully select products and tools customized to treat any skin concerns you are facing. This 60 minute facial is packed with a deep cleanse, professional exfoliation, lymphatic drainage, concentrated serums, and facial masks. During treatment we use Circadia®, a skincare brand based on the body's natural 24-hour clock, focused on defending your skin from environmental damage during the day and stimulating internal repair while you sleep. </p>
                   
                    <p style={{fontFamily:"LibreBaskerville",fontSize:"16px"}}>
                    Chemical Peels: Featuring the Circadia® Derma Frost Peel, this chemical peel is designed to cut through oil, reduce bacteria and decrease inflammation while improving the appearance of acne, sun damage, fine lines, and deep wrinkling. A full consultation with our Licensed Esthetician will be required to book this service.
                    </p>
                   
                    <div className="two-column">
                      <div className="row">
                        <div className="image-column col-xl-12 col-lg-12 col-md-12">
                          <figure className="image">
                            <img
                              src={IMG3}
                              alt="blog"
                              style={{width:470}}
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