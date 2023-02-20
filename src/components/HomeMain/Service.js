import { Link } from "react-router-dom";
import BGImg2 from "../../assets/img/bg/marble2.jpg";
import React from "react";
import Icon1 from "../../assets/img/icon/face.png";
import Icon2 from "../../assets/img/icon/hair.jpg";
import Icon3 from "../../assets/img/icon/eyelashes.png";
import Icon4 from "../../assets/img/icon/stones.png";
import Icon5 from "../../assets/img/icon/spa.png";
import Icon6 from "../../assets/img/icon/microb.jpg";
import Icon7 from "../../assets/img/icon/clean.png";
import Icon8 from "../../assets/img/icon/mist.png";
import Icon9 from "../../assets/img/icon/serum.png";
import Icon10 from "../../assets/img/icon/moist.png";
import Img from "../../assets/img/brand/gwms.jpg";
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
                      <Link to="/service-details3" >Facial Treatments</Link>
                    </h4>
                   <h6>Custom Facial $150</h6>
                   <h6>Oxygen Rx Facial $175</h6>
                   <h6>Oxygen TGIF Facial $200</h6>
                   <h6>Lactic Acid Peel $150</h6>
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
                    <h6>Lip Wax $15</h6>
                    <h6>Brow Wax $15</h6>
                    <h6>Chin Wax $15</h6>
                    <h6>Full Face Wax $50</h6>
                    
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
                    <h6>Classic Full Set $130</h6>
                    <h6>Classic 1 Week Fill $50</h6>
                    <h6>Classic 2 Week Fill $70</h6>
                    <h6>Hybrid Full Set $150</h6>
                    <h6>Hybrid 1 Week Fill $70</h6>
                    <h6>Hybrid 2 Week Fill $90</h6>
                    <h6>Volume Full Set $180</h6>
                    <h6>Volume 1 Week Fill $90</h6>
                    <h6>Vokume 2 Week Fill $110</h6>
                    <h6>Lash Removal $30</h6>
                    
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon7} alt="icon01" />
                  </div>
                  <div className="text" style={{width:450}}>
                    <h4>
                      <Link to="/service-details4">Cleansers</Link>
                    </h4>
                    <p style={{fontWeight:"bold"}}>Amandola Milk Cleanser $40</p>
                    <p style={{fontWeight:"bold"}}>Cleansing Gel with Salicylic Acid $40</p>
                    <p style={{fontWeight:"bold"}}>Micro-Exfoliating Honey Cleanser $40</p>
                    <p style={{fontWeight:"bold"}}>Vitamin Veil Facial Cleansing Oil $40</p>
                    
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon8} alt="icon01" />
                  </div>
                  <div className="text" style={{width:450}}>
                    <h4>
                      <Link to="/#">Mists</Link>
                    </h4>
                    <p style={{fontWeight:"bold"}}>White Willow and Juniper Clearing $28</p>
                    <p style={{fontWeight:"bold"}}>Blueberry and White Tea Hydrating $32</p>
                    <p style={{fontWeight:"bold"}}>Aloe and Calendula Calming $28</p>
                    
                    
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
            <div className="sd-img">
              <img src={Img} alt="img" style={{width:500,height:500,marginBottom:"100px"}} />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-content s-about-content">
              <ul className="sr-tw-ul sr-thr-ul">
                <li>
                  <div className="icon">
                    <img src={Icon4} alt="icon01" />
                  </div>
                  <div className="text pt-10" style={{width:350}}>
                    <h4>
                      <Link to="/service-details">Emsculpt Neo</Link>
                    </h4>
                    <h5>Initial Treatment Package</h5>
                    <h6>Emsculpt Neo * 4 Sessions $3600</h6>
                    <h5>Maintenance Packages</h5>
                    <h6>Single Session $1000</h6>
                    <h6>4 Sessions $750 per</h6>
                    <h6>6 Sessions $635 per</h6>
                    
                    
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
                    <h5>Initial Treatment Package</h5>
                    <h6>Emsella * 6 Sessions $1800</h6>
                    <h5>Maintenance Packages</h5>
                    <h6>Single Session $400</h6>
                    <h6>2 Sessions $325 per</h6>
                    <h6>4 Sessions $275 per</h6>
                    
                    
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
                    <h6>Consultation $0</h6>
                    <h6>Initial Session $450</h6>
                    <h6>60 Day Touch-Up $0</h6>
                    <h6>Annual Touch-Up $150</h6>
                    
                    
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon9} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="#">Serums</Link>
                    </h4>
                    <p style={{fontWeight:"bold"}}>Chrono-Calm $50</p>
                    <p style={{fontWeight:"bold"}}>Cyto-Calm Facial Serum $50</p>
                    <p style={{fontWeight:"bold"}}>Emergency Eye Lift $50</p>
                    <p style={{fontWeight:"bold"}}>Spot Stop Anti-Blemish Lotion $34</p>
                    <p style={{fontWeight:"bold"}}>Vitamin C Reversal $65</p>
                    <p style={{fontWeight:"bold"}}>White Veil Brightener $74</p>
                    
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon10} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="#" style={{}}>Moisturize & Protect</Link>
                    </h4>
                    <p style={{fontWeight:"bold"}}>Tranquili-Cream $56</p>
                    <p style={{fontWeight:"bold"}}>Light Day Sunscreen SPF 37 $50</p>
                    
                    
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
