import BGImg7 from "../../assets/img/bg/test-bg.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import Img1 from "../../assets/img/testimonial/testi_avatar.png";
import Img2 from "../../assets/img/testimonial/testi_avatar_02.png";
import Icon from "../../assets/img/testimonial/qt-icon.png";
import BGImg from "../../assets/img/bg/marble2.jpg";

const Testimonial = () => {
  const testimonial = {
    initialIndex: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoPlay: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        className="testimonial-area pt-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg})` ,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="section-title mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5 style={{color:"black"}}>Testimonials</h5>
                
                <p className="mt-15">
                  At Gentle Wellnes don't take our word for it. Listen to what our clients have to say.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider className="testimonial-active" {...testimonial}>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src={Img1} alt="img" />
                    <div className="ta-info">
                      <h6>Jina Nilson</h6>
                      <span style={{color:"black"}}>Client</span>
                    </div>
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src={Img2} alt="img" />
                    <div className="ta-info">
                      <h6>Braitly Dcosta</h6>
                      <span style={{color:"black"}}>Client</span>
                    </div>
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src={Img1} alt="img" />
                    <div className="ta-info">
                      <h6>Jina Nilson</h6>
                      <span style={{color:"black"}}>Client</span>
                    </div>
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src={Img2} alt="img" />
                    <div className="ta-info">
                      <h6>Braitly Dcosta</h6>
                      <span style={{color:"black"}}>Client</span>
                    </div>
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
