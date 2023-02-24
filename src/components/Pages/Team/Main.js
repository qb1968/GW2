import React from "react";
import { Link } from "react-router-dom";

import BGImg from "../../../assets/img/bg/marble2.jpg";
import Team1 from "../../../assets/img/team/team1.png";
import Team2 from "../../../assets/img/team/team2.png";
import Team3 from "../../../assets/img/team/team3.png";
import Team4 from "../../../assets/img/team/team4.png";
import Team6 from "../../../assets/img/team/melissa.jpg";
import LOGO from "../../../assets/img/brand/gwms.jpg";

const Main = () => {
  return (
    <>
      <section
        className="team-area fix p-relative pt-120 pb-90"
        style={{ backgroundImage: `url(${BGImg})` }}
      >
        <h1
          style={{
            fontFamily: "Alex Brush",
            textAlign: "center",
            color: "black",
          }}
        >
          Our Team
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team3} alt="" style={{ height: 450 }} />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="" style={{ fontFamily: "LibreBaskerville" }}>
                      Dr.Sclater
                    </Link>
                  </h4>
                  <p
                    style={{
                      fontFamily: "LibreBaskerville",
                      fontWeight: "bold",
                    }}
                  >
                    Owner
                  </p>
                  <p style={{ fontFamily: "LibreBaskerville" }}>
                    Dr. Sclater is a Calvert County native, and strongly
                    believes in local businesses supporting each other and the
                    community. Dr. Sclater enjoys her work and giving back to
                    others. Dr. Sclater’s career began in dentistry 27+ years
                    ago with a passion for continuing education and new
                    developments in dental technology. With this same passion
                    she began Gentle Wellness Medi- Spa as a means to enhance
                    her patient’s natural beauty through non-invasive treatment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <img src={LOGO} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team6} alt=""/>
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="" style={{ fontFamily: "LibreBaskerville" }}>
                      Melissa
                    </Link>
                  </h4>
                  <p
                    style={{
                      fontFamily: "LibreBaskerville",
                      fontWeight: "bold",
                    }}
                  >
                    Office Manager
                  </p>
                  <p style={{ fontFamily: "LibreBaskerville" }}>
                    Melissa loves the challenge of managing a team…her knack for
                    organization and her ability to thrive under pressure help
                    her navigate the waters at Gentle Family Dentistry and now
                    Gentle Wellness. Melissa began her career in the medical
                    field as a medical assistant in 2009 and is excited to bring
                    her skill set to Gentle Wellness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team1} alt=""/>
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="" style={{ fontFamily: "LibreBaskerville" }}>
                      Melinda
                    </Link>
                  </h4>
                  <p
                    style={{
                      fontFamily: "LibreBaskerville",
                      fontWeight: "bold",
                    }}
                  >
                    Esthetician
                  </p>
                  <p style={{ fontFamily: "LibreBaskerville" }}>
                    Melinda is a Maryland Licensed Esthetician specializing in
                    results-oriented facials. Melinda is passionate about
                    repairing damaged skin and educating others on how to care
                    for their skin at home. Melinda has a passion for learning
                    and is constantly exploring new methods of skin therapy to
                    introduce into her treatment room. Melinda is an Aquarius
                    who loves all things history, mythology, and family
                    genealogy! She can often be found adventuring in DC with her
                    boyfriend, James, or snuggling with Apollo, their Australian
                    Shepherd puppy.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team2} alt=""/>
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="" style={{ fontFamily: "LibreBaskerville" }}>
                      Maddy
                    </Link>
                  </h4>
                  <p
                    style={{
                      fontFamily: "LibreBaskerville",
                      fontWeight: "bold",
                    }}
                  >
                    Eyelash Tech
                  </p>
                  <p style={{ fontFamily: "LibreBaskerville" }}>
                    Maddy recently moved to Calvert County from California. She
                    has been an eye lash technician for over a year of
                    experience. Maddy’s passion for enhancing your own natural
                    beauty has been her main focus when treating her clients.
                    She spends her days off in the gym or practicing new
                    techniques, she takes pride in her artistry and is excited
                    to share it with you!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Team4} alt=""/>
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="" style={{ fontFamily: "LibreBaskerville" }}>
                      Jessica
                    </Link>
                  </h4>
                  <p
                    style={{
                      fontFamily: "LibreBaskerville",
                      fontWeight: "bold",
                    }}
                  >
                    Microblading Tech
                  </p>
                  <p style={{ fontFamily: "LibreBaskerville" }}>
                    I have been a Dental Hygienist for 15 years working at
                    Gentle Family Dentistry in Dunkirk, MD. My job allows me to
                    care for people and make them feel better about themselves
                    daily. ​This past year I embraced the art of microblading,
                    the results have been so rewarding for myself and the
                    clients.  Treating clients with a microblading session and
                    giving them eyebrow enhancements makes them feel so much
                    better, more confident and happier. I take great pleasure in
                    providing people with this gratification and appreciate the
                    ability to improve a person&#39;s self-image by enhancing
                    their natural beauty.
                  </p>
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
