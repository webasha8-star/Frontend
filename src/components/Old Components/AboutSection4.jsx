import React from 'react';

const AboutSection4 = () => (
  <section className="gt-about-section-4 section-padding pb-0 fix">
    <div className="container">
      <div className="gt-about-wrapper-4">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="gt-about-image">
              <img src="/assets/img/home-4/about/about-1.png" alt="about-1" />
              <div className="gt-about-image-2">
                <img src="/assets/img/home-4/about/about-3.png" alt="about-3" />
              </div>
              <div className="gt-radius-image">
                <img src="/assets/img/home-4/about/about-2.png" alt="about-2" />
                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gt-about-content">
              <div className="gt-section-title mb-0">
                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">about xports</h6>
                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                  I approach all things<br />game blend of play
                </h2>
              </div>
              <p className="gt-about-text">
                Emerging trends in the esports industry include the growth of mobile esports, the integration of virtual reality in gaming experiences, and the increasing involvement of traditional sports.
              </p>
              <div className="gt-about-count">
                <div className="gt-count-item">
                  <h3><span className="gt-count">320</span>+</h3>
                  <p>GAME PLAYED</p>
                </div>
                <div className="gt-count-item">
                  <h3><span className="gt-count">175</span>+</h3>
                  <p>FLAGS TAKEN</p>
                </div>
                <div className="gt-count-item">
                  <h3><span className="gt-count">69</span>+</h3>
                  <p>DEATH MATCHES</p>
                </div>
                <div className="gt-count-item gt-style-2">
                  <h3><span className="gt-count">99</span>%</h3>
                  <p>WINING GAME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection4; 