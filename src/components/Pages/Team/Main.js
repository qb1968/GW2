import React from "react";
import { Link } from "react-router-dom";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import BGImg from "../../../assets/img/bg/marble2.jpg";
import Team1 from "../../../assets/img/team/team1.png"
import Team2 from "../../../assets/img/team/team2.png"
import Team3 from "../../../assets/img/team/team3.png"
import Team4 from "../../../assets/img/team/team4.png"
import Team5 from "../../../assets/img/team/team5.jpg"
import Team6 from "../../../assets/img/team/team6.jpg"

const Main = () => {
  return (
    <>
   
      <section
        className="team-area fix p-relative pt-120 pb-90"
        style={{ backgroundImage: `url(${BGImg})` }}
      >
        <h1 style={{ textAlign: "center", color: "#CAB171" }}>Meet the Team</h1>
        <div className="container">
          
          <div className="row">
            
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team1} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Bableo Dablo</Link>
                  </h4>
                  <p>Worker</p>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team2} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Dawon Crisen</Link>
                  </h4>
                  <p>Worker</p>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team3} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">David Suarez</Link>
                  </h4>
                  <p>Worker</p>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team4} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Gerard Peano</Link>
                  </h4>
                  <p>Worker</p>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team5} alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Ostin Green</Link>
                  </h4>
                  <p>Worker</p>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team6} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Norman Colins</Link>
                  </h4>
                  <p>Worker</p>
                 
                </div>
              </div>
            </div>
            
              
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Main;