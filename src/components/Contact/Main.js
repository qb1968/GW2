import React from "react";
import Appointment from "../HomeMain/Appointment";
import { Link } from "react-router-dom";
import Bredcrumb from "../HomeMain/Bredcrumb";

const Main = () => {
  return (
    <>
      <Appointment />

      <div className="map fix" style={{ background: "#F5F5F5" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4402.436565074904!2d-76.6628658796078!3d38.71797546263368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b79aa036ca6183%3A0x3ccc0961517e0fe5!2s3150%20W%20Ward%20Rd%20%23304%2C%20Dunkirk%2C%20MD%2020754!5e0!3m2!1sen!2sus!4v1676329071133!5m2!1sen!2sus" 
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
