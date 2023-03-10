import Slider from "react-slick";
import React from "react";

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
          backgroundImage: `url(${BGImg})`,
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
                <h5 style={{ fontFamily: "monospace", color: "black" }}>
                  Testimonials
                </h5>

                <p
                  className="mt-15"
                  style={{ fontFamily: "LibreBaskerville", fontWeight: "800" }}
                >
                  At Gentle Wellness don't take our word for it. Listen to what
                  our clients have to say.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider className="testimonial-active" {...testimonial}>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <div className="ta-info">
                      <h6 style={{ fontFamily: "monospace" }}>Carly</h6>
                    </div>
                  </div>
                  <p style={{ fontStyle: "oblique" }}>
                    ???I had an awesome experience with Melinda! She is extremely
                    knowledgeable and shows incredible care and attention to her
                    clients!! Best facial I???ve had!! I???ll definitely be back
                    soon!???
                  </p>

                  <div className="qt-img">
                    <i style={{ color: "black" }} class="fa fa-quote-right" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <div className="ta-info">
                      <h6 style={{ fontFamily: "monospace" }}>Anonymous</h6>
                    </div>
                  </div>
                  <p style={{ fontStyle: "oblique" }}>
                    ???Beautiful Brows by Jess changed my life! I went from no
                    eyebrows to beautiful full eyebrows that everyone notices!
                    My eyebrows have given me a renewed confidence that had been
                    missing for a while. I'm so glad to have been introduced to
                    Jessica and I am absolutely in love with my new brows! Check
                    her out! She is the best!???.
                  </p>

                  <div className="qt-img">
                    <i style={{ color: "black" }} class="fa fa-quote-right" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <div className="ta-info">
                      <h6 style={{ fontFamily: "monospace" }}>Anonymous</h6>
                    </div>
                  </div>
                  <p style={{ fontStyle: "oblique" }}>
                    ???After having children my floor muscles were left weak.
                    After receiving Emsella treatment my life has changed
                    drastically. Each treatment was about 30 minutes with no
                    pain at all. Thank you Melissa and Gentle Wellness for
                    taking such great care of me and understanding my concerns.
                    I HIGHLY recommend scheduling your Emsella treatment if you
                    suffer from weak floor muscles, it's a life changer!!???.
                  </p>

                  <div className="qt-img">
                    <i style={{ color: "black" }} class="fa fa-quote-right" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <div className="ta-info">
                      <h6 style={{ fontFamily: "monospace" }}>Jewels</h6>
                    </div>
                  </div>
                  <p style={{ fontStyle: "oblique" }}>
                    ???I scheduled my very first eyelash extension appointment
                    with Maddy. I will definitely be a repeat client!! I felt
                    very relaxed during the entire appointment listening to
                    music and chatting away. Thanks Maddy for making my
                    eyelashes look amazing!???.
                  </p>

                  <div className="qt-img">
                    <i style={{ color: "black" }} class="fa fa-quote-right" />
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
