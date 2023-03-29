import React from "react";
import Appointment from "../HomeMain/Appointment";

import Bredcrumb from "../HomeMain/Bredcrumb";

const Main = () => {
  return (
    <>
      <Bredcrumb />
      <Appointment />

      <div className="map fix" style={{ background: "#F5F5F5" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12452.032054557785!2d-76.663278!3d38.717625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b79a9f88be5d0d%3A0xcd275afcbea5c6d0!2sGentle%20Family%20Dentistry!5e0!3m2!1sen!2sus!4v1680110471108!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
