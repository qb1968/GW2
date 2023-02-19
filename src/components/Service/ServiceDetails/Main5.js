import React from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from '../../HomeMain/Bredcrumb'
import BGImg from "../../../assets/img/bg/marble2.jpg";
import IMG from "../../../assets/img/features/eyelash.jpeg"
import IMG2 from "../../../assets/img/features/eyelash2.jpeg"

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
                        <li >
                          <Link to="/service-details3">
                            {" "}
                            Facial Treatments{" "}
                            <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li >
                          <Link to="/service-details">
                            Emsculpt Neo <i className="fa fa-arrow-right"></i>{" "}
                          </Link>{" "}
                        </li>
                        <li >
                          <Link to="/service-details2">
                            {" "}
                            Emsella <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-details4">
                            Hair Removal <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li className="active">
                          <Link to="/service-details5">
                            Eyelash Extensions
                            <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-details6">
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
                    <h3 className="h3-title">
                      If You Need Any Help Contact With Us
                    </h3>
                    <Link to="javascript:void(0);" title="Call now">
                      410-600-8400
                    </Link>
                  </div>
                </aside>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 order-2">
                <div className="service-detail">
                  <div className="content-box">
                    <h2 style={{color:"black"}}> Eyelash Extensions</h2>
                    <h4>Types of sets:</h4>
                    <p>
                    Classic Set: In this method, only a single extension is applied to each natural lash. This generally results in a more natural look.
                    </p>
                    <p>
                    Hybrid Set: Hybrid eyelash extensions (hybrid lashes) are a 50/50 mixture of classic lashes and the handmade fanned, volume style lashes. For the more elevated and fuller look. 

                    </p>
                    <p>
                    Volume Set: Volume lashes refer to super lightweight lashes that are crafted into a fan before being applied to individual natural lashes. This technique increases your lash count by as much as giving you a dramatic look with unrivaled fullness.* 
                    </p>
                    <p>
                    Refills: A lash fill involves applying eyelash extensions on new hair growth (new lashes) to give your lash line a full and refreshed lease on life. Typically this happens every 2 weeks depending on hair growth and home maintenance. Fills are based on the percentage of lash extensions remaining. 
Gentle Wellness 
 does not fill other lash artist's sets, there will be a removal treatment added to 
your appointment to prepare your lashes for a fresh new set.
                    </p>
                    <p>
                    Removal of Lashes: Lashes are removed using a special eyelash remover that breaks down the bonds of the adhesive used to glue lashes to your natural ones. Within only a few seconds, the eyelash extensions will be easily removed by your lash tech. 
                    </p>
                   
                    <div className="two-column">
                      <div className="row">
                        <div className="image-column col-xl-6 col-lg-12 col-md-12">
                          <figure className="image">
                            <img
                              src={IMG}
                              alt="blog"
                              style={{width:275,height:275}}
                            />
                          </figure>
                        </div>
                        <div className="text-column col-xl-6 col-lg-12 col-md-12">
                          <figure className="image">
                            <img
                              src={IMG2}
                              alt="blog"
                              style={{width:275,height:275}}
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