import React from 'react';

const HeroSection3 = () => (
  <section className="gt-hero-section-2 parallaxie gt-hero-3 bg-cover" style={{ backgroundImage: "url('/assets/img/home-3/hero/hero-bg.png')" }}>
    <div className="gt-ellipse-shape">
      <img src="/assets/img/home-3/hero/ellipse-shape.png" alt="img" />
    </div>
    <div className="row g-4 align-items-center">
      <div className="col-xl-7 col-lg-6">
        <div className="gt-hero-content">
          <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">your ultimate live gaming world . . .</h6>
          <h1 className="tx-title sec_title  tz-itm-title tz-itm-anim">
            gaming art &<br />development studio
          </h1>
          <p className="wow fadeInUp" data-wow-delay=".3s">
            A game studio crafting exciting, high-quality video games, prioritizing immersive gameplay and mechanics.
          </p>
          <div className="gt-hero-button wow fadeInUp" data-wow-delay=".5s">
            <a href="/game-details" className="gt-theme-btn">
              purchase game
            </a>
            <a href="/game" className="gt-theme-btn gt-style-border">
              view more
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-6">
        <div className="gt-hero-image wow img-custom-anim-right" data-wow-duration="1.3s" data-wow-delay="0.3s">
          <img src="/assets/img/home-3/hero/hero-image.png" alt="img" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection3; 