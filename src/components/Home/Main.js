import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/slider/slider_bg.png";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Service from "../HomeMain/Service";
import Gallery from "../HomeMain/Gallery";
import Pricing from "../HomeMain/Pricing";
import Feature from "../HomeMain/Feature";
import Product from "../HomeMain/Product";
import Img10 from "../../assets/img/brand/Product-Shot.jpg";
import Bredcrumb from "../HomeMain/Bredcrumb";

const Main = () => {
  return (
    <>
    <Bredcrumb/>
      <main>
        <section id="home" className="slider-area fix p-relative">
          <div className="slider-active" style={{ background: "#00173c" }}>
            <div
              className="single-slider slider-bg d-flex align-items-center"
              style={{
                backgroundSize: "cover",
                backgroundColor: "#58846d",
              }}
            >
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8 col-md-8">
                    <div className="slider-content s-slider-content mt-20">
                     
                      <h2 style={{color:"#CAB171"}} data-animation="fadeInUp" data-delay=".4s">
                        Gentle Wellness
                        <br />
                        Medi-Spa
                      </h2>

                      <p data-animation="fadeInUp" data-delay=".6s">
                      At Gentle Wellness our mission is to provide a world class spa experience while providing personalized services to each client and enhance their natural beauty. We strive to build rewarding relationships with our clients and community, through knowledge, wellness, and superior service.

 
                      </p>
                    </div>
                    <img
                      style={{
                        width: "450px",
                        height: "300px",
                        float: "right",
                      }}
                      src={Img10}
                      alt="product"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 p-relative"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
      </main>
    </>
  );
};

export default Main;
