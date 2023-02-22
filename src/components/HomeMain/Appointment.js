import BGImg3 from "../../assets/img/bg/marble2.jpg";
import React from "react";
import Img from "../../assets/img/bg/open-box-img.png";

const Appointment = () => {
  return (
    <>
      <section
        id="booking"
        className="booking-area p-relative pt-120 pb-120"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#58846D",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-bg">
                <div className="section-title center-align">
                  
                  <h2 style={{fontFamily:"Alex Brush",color:"black"}}>Request an Appointment</h2>
                  <p style={{fontFamily:"LibreBaskerville"}}>
                    Fill your info out to request an appointment with one of our specialists.
                  </p>
                </div>
                <form
                  action="mail.php"
                  method="post"
                  className="contact-form mt-30"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="firstn"
                          name="firstn"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <select
                          className="custom-select"
                          id="inputGroupSelect04"
                          aria-label="Example select with button addon"
                        >
                          <option> Department...</option>
                          <option value="1">Emsulpt Neo</option>
                          <option value="2">Emsella</option>
                          <option value="3">Facial Treatments</option>
                          <option value="4">Hair Removal</option>
                          <option value="5">Eyelash Extensions</option>
                          <option value="6">Microblading</option>
                        </select>
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="date"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write comments"
                        ></textarea>
                      </div>
                      <div className="slider-btn">
                        <button
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                        >
                          <span>Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="opening-time">
                <div className="open-img">
                  <img src={Img} alt="icon01" />
                </div>
                <h2 style={{fontFamily:"fantasy",color:"black"}}>3150 W.Ward Rd</h2>
                <h2 style={{fontFamily:"fantasy",color:"black"}}>Suite 304</h2>
                <h2 style={{fontFamily:"fantasy",color:"black"}}>Dunkirk, MD 20754</h2>
                <h3 style={{fontFamily:"fantasy",color:"black"}}>Opening Hours</h3>
                <div className="text">
                  <div style={{fontFamily:"fantasy",color:"black"}} className="left-text">Monday thru Wednsday:</div>
                  <div style={{fontFamily:"fantasy",color:"black"}} className="right-text">8:00 am – 5:00 pm</div>
                </div>
                <div className="text">
                  <div style={{fontFamily:"fantasy",color:"black"}} className="left-text">Thursday and Friday:</div>
                  <div style={{fontFamily:"fantasy",color:"black"}} className="right-text">8:00 am – 6:00 pm</div>
                </div>
                <div className="text">
                  <div style={{fontFamily:"fantasy",color:"black"}} className="left-text">Saturday:</div>
                  <div style={{fontFamily:"fantasy",color:"black"}} className="right-text">8:00 am – 3:00 pm</div>
                </div>
                <div className="text">
                  <div style={{fontFamily:"fantasy",color:"black"}} className="left-text">Sunday:</div>
                  <div style={{fontFamily:"fantasy",color:"black"}} className="right-text">11:00 am – 4:00 pm</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
