import React from "react";
import BGIMG from "../../assets/img/bg/marble2.jpg";

const Bredcrumb = ({ title, subtitle }) => {
  return (
    <>
      <section
        className="breadcrumb-area d-flex align-items-center"
        style={{ backgroundImage: `url(${BGIMG})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb-wrap text-left">
                <div className="breadcrumb-title">
                  <h2>{title}</h2>
                  <div className="breadcrumb-wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          {subtitle}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bredcrumb;
