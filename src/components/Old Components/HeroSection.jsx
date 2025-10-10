import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="hero-section hero-1 fix bg-cover"
      style={{
        backgroundImage:
          "url(/assets/img/home-1/hero/hero-bg.jpg), url(/assets/img/home-1/hero/bg2.jpg)",
        backgroundPosition: "center center, center center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover, cover"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="hero-image wow animated-image">
              <img src="/assets/img/home-1/hero/hammer.png" alt="img" className="small-hero-img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-content">
              <h6 className="wow animated-image">Your Gateway to the Ultimate Cyber Arena . . .</h6>
              <h1 className="wow animated-image">
                 Level Up Your Hacking Skills
              </h1>
              <div className="gt-hero-button wow animated-image">
                <a href="/game-details" className="gt-theme-btn">Start Playing</a>
                <a href="/game" className="gt-theme-btn gt-style-border">
                   Explore Challenges
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 