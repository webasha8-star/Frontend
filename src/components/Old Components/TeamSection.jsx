import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Chun Qing",
      position: "gaming artist",
      image: "team-2.jpg"
    },
    {
      id: 2,
      name: "Chun Qing",
      position: "gaming artist",
      image: "team-1.jpg"
    },
    {
      id: 3,
      name: "Chun Qing",
      position: "gaming artist",
      image: "team-3.jpg"
    }
  ];

  return (
    <section className="gt-team-section section-padding fix bg-cover" style={{ backgroundImage: "url(/assets/img/home-1/team/team-bg.jpg)" }}>
      <div className="right-shape wow animated-image">
        <img src="/assets/img/home-1/team/shape-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="gt-team-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <div className="swiper gt-team-slider">
                <div className="swiper-wrapper">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="swiper-slide">
                      <div className="gt-team-card-item">
                        <div className="gt-team-image">
                          <img src={`/assets/img/home-1/team/${member.image}`} alt="img" />
                          <div className="gt-team-content">
                            <div className="gt-social-icon d-flex align-items-center">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                              <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <h3>
                              <a href="/team-details">{member.name}</a>
                            </h3>
                            <p>{member.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="gt-team-cont">
                <div className="gt-section-title-2">
                  <h6 className="text-white subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">Our best gamer</h6>
                  <h2 className="text-white tx-title sec_title tz-itm-title tz-itm-anim">
                  OUR ELITE <br/>CYBER TEAM
                  </h2>
                </div>
                <p className="text-white gt-text">
                 Welcome to the digital warzone, where our ethical hackers, red teamers, and OSCP warriors take on the toughest cyber labs and real-time CTF challenges.
                 These are not just players — they are code-breakers, exploit hunters, and flag conquerors.
                </p>
                <div className="array-buttons wow fadeInUp" data-wow-delay=".5s">
                  <button className="array-prev"><i className="fa-solid fa-arrow-up"></i></button>
                  <button className="array-next"><i className="fa-solid fa-arrow-down"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 