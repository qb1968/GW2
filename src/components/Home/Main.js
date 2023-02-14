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

const Main = () => {
  return (
    <>
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
                  <div className="col-lg-6 col-md-6">
                    <div className="slider-content s-slider-content mt-20">
                      <h5
                        style={{ fontSize: 22 }}
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Gentle Wellness Medi-Spa{" "}
                      </h5>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        Make Your Body
                        <br />
                        Whole Again
                      </h2>

                      <p data-animation="fadeInUp" data-delay=".6s">
                        Donec vitae libero non enim placerat eleifend aliquam
                        erat volutpat. Curabitur diam ex, dapibus purus sapien,
                        cursus sed nisl tristique.
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
