import React from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from '../../HomeMain/Bredcrumb'
import BGImg from "../../../assets/img/bg/marble2.jpg";
import IMG from "../../../assets/img/features/Emsculpt Neo transformation.png"
import IMG2 from "../../../assets/img/features/EN.jpg"
import IMG3 from "../../../assets/img/features/EN2.jpg"

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
                          <Link to="/service-details3">
                            {" "}
                            Facial Treatments{" "}
                            <i className="fa fa-arrow-right"></i>
                          </Link>
                        </li>
                        <li className="active">
                          <Link to="/service-details">
                            Emsculpt Neo <i className="fa fa-arrow-right"></i>{" "}
                          </Link>{" "}
                        </li>
                        <li>
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
                        <li>
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
                    <h2 style={{color:"black"}}> What Is Emsculpt Neo?</h2>
                    <p>
                      Emsculpt Neo is the only non-invasive technology that
                      simultaneously uses radiofrequency and HIFEM+ energies to
                      eliminate fat and build muscle. The end result is more fat
                      reduction and muscle growth in less time than with any
                      single gold-standard product.
                    </p> 
                    <h3 style={{color: "black"}}>What is HIFEM+</h3>
                    <p>
                    HIFEM® stands for high intensity focused electromagnetic technology. 
HIFEM® uses a powerful but harmless form of electromagnetic stimulation to contract the muscles in a targeted area. These magnetic fields create electrical currents, which are passed to the muscles. When these magnetic pulses are fast enough, they force the muscles to contract, much like they do during times of strenuous exercise. 
Therefore, when the muscles contract enough times, they begin to build muscles and burn fat. This gives treatments like Emsculpt Neo® its contouring power.
                    </p>
                    <h2 style={{color:"black"}}>What area of the body does Emsculpt Neo treat? </h2>

                    <ul>
                      <li
                        style={{
                          color: "black",
                          listStyle: "disc outside none",
                        }}
                      >
                        Abdominal Area
                      </li>
                      <li
                        style={{
                          color: "black",
                          listStyle: "disc outside none",
                        }}
                      >
                        Buttocks
                      </li>
                      <li
                        style={{
                          color: "black",
                          listStyle: "disc outside none",
                        }}
                      >
                        Front and Back Thighs
                      </li>
                      <li
                        style={{
                          color: "black",
                          listStyle: "disc outside none",
                        }}
                      >
                        Outer and Inner Thighs
                      </li>
                      <li
                        style={{
                          color: "black",
                          listStyle: "disc outside none",
                        }}
                      >
                        Biceps and Triceps
                      </li>
                      <li
                        style={{
                          color: "black",
                          listStyle: "disc outside none",
                        }}
                      >
                        Calves
                      </li>
                    </ul>
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
                    <h3 style={{color:"black"}}>How long is the treatment</h3>
                    <p>Standard treatment is 4 30-minute sessions</p>
                    <h3 style={{color:"black"}}>Is EMSCULPT NEO painful?</h3>
                    <p>
                      EMSCULPT NEO treatments may feel intense but should never
                      be painful. What happens to the fat that is eliminated by
                      EMSCULPT NEO procedure? After the treatment, the fat cells
                      die and are naturally eliminated from the body through
                      metabolic processes.
                    </p>
                    <h3 style={{color:"black"}}> How is EMSCULPT NEO procedure performed?</h3>
                    <p>
                      EMSCULPT NEO procedure is simple and easy. There is no
                      pre-preparation required for this procedure. You will lay
                      down while the applicators are applied over the treatment
                      area for 30 minutes. During the treatment you may feel
                      intense yet tolerable heating sensation along with muscle
                      contractions. Once the procedure is completed, you can
                      immediately get back to your daily routine.
                    </p>
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