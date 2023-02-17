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
                  <h5>Get In Touch</h5>
                  <h2 style={{color:"black"}}>Request an Appointment</h2>
                  <p>
                    Aenean ut enim vel lectus rutrum sodales. Aliquam consequat
                    augue eget enim convallis, at maximus libero ullamcorper.
                    Cras sit amet placerat nisi.
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
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Three</option>
                          <option value="5">Three</option>
                          <option value="6">Three</option>
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
                <h2 style={{color:"black"}}>3150 W.Ward Rd</h2>
                <h2 style={{color:"black"}}>Suite 304</h2>
                <h2 style={{color:"black"}}>Dunkirk, MD 20754</h2>
                <h3 style={{color:"black"}}>Opening Hours</h3>
                <div className="text">
                  <div className="left-text">Monday to Friday:</div>
                  <div className="right-text">09:00 am – 10:00 pm</div>
                </div>
                <div className="text">
                  <div className="left-text">Saturday:</div>
                  <div className="right-text">09:00 am – 08:00 pm</div>
                </div>
                <div className="text">
                  <div className="left-text">Sunday:</div>
                  <div className="right-text">09:00 am – 05:00 pm</div>
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