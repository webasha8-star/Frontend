import React from 'react';

const HeroSection2 = () => (
  <section className="gt-hero-section-2 parallaxie gt-hero-2" style={{ backgroundImage: "url('/assets/img/home-2/hero/hero-bg.png')" }}>
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-xxl-4 col-xl-5 col-lg-5 order-2 order-lg-1">
          <div className="gt-hero-image wow animated-image">
            <img src="/assets/img/home-2/hero/hero-01.png" alt="img" />
          </div>
        </div>
        <div className="col-xxl-8 col-xl-7 col-lg-7 order-1 order-lg-2">
          <div className="gt-hero-content">
            <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">your ultimate live gaming world . . .</h6>
            <h1 className="tx-title sec_title  tz-itm-title tz-itm-anim">
              level up new gaming
              experience
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".3s">
              A game studio crafting exciting, high-quality video games, prioritizing immersive gameplay and mechanics.
            </p>
            <div className="gt-hero-button wow fadeInUp" data-wow-delay=".5s">
              <a href="/contact" className="gt-theme-btn">
                purchase game
              </a>
              <a href="/game" className="gt-theme-btn gt-style-border">
                view more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection2; 