import React from 'react';

const HeroSection5 = () => (
  <div className="hero-section gt-hero-5 parallaxie fix bg-cover" style={{backgroundImage: "url(/assets/img/home-5/hero/hero-bg.jpg)"}}>
    <div className="array-buttons">
      <button className="array-prev"><i className="fa-solid fa-arrow-up"></i></button>
      <button className="array-next"><i className="fa-solid fa-arrow-down"></i></button>
    </div>
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <div className="gt-hero-content">
            <span className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">Gaming Expertise</span>
            <h1 className="tx-title sec_title  tz-itm-title tz-itm-anim">
              How to Choose The Right Equipment<br />When You Are The Best Gaming Player
            </h1>
            <p>
              Emerging trends in the esports industry include the growth of mobile esports, the integration of virtual reality in gaming experiences, and the increasing involvement of traditional sports.
            </p>
            <ul className="gt-social">
              <li><i className="fa-solid fa-calendar-days"></i> 11 March 2025</li>
              <li><i className="fa-solid fa-comment"></i> 25 comments</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="slider-container">
            <div className="slide small">
              <img src="/assets/img/home-5/hero/slide-1.jpg" alt="slide-1" />
              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
            <div className="slide active">
              <img src="/assets/img/home-5/hero/slide-2.jpg" alt="slide-2" />
              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
            <div className="slide small">
              <img src="/assets/img/home-5/hero/slide-3.jpg" alt="slide-3" />
              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection5; 