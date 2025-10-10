import React from 'react';

const HeroSection4 = () => (
  <section className="gt-hero-section gt-hero-4 fix bg-cover" style={{backgroundImage: "url(/assets/img/home-4/hero/hero-bg.jpg)"}}>
    <div className="line-shape">
      <div className="section-animation-shape1-1 animation-infinite-test gt-line-shape-animation animation-infinite" style={{backgroundImage: "url('/assets/img/home-4/hero/line-shape.png')"}}></div>
    </div>
    <div className="gt-overlay-image">
      <img src="/assets/img/home-4/hero/overlay.png" alt="overlay" />
    </div>
    <h2>expert</h2>
    <div className="gt-text">gamer</div>
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <div className="gt-hero-content">
            <h3 className="text">I am <span>Ava Lino</span></h3>
            <h1 className="tx-title sec_title  tz-itm-title tz-itm-anim">expert Gamer</h1>
            <div className="gt-content-ber">
              <h6>live stream gamer</h6>
              <ul className="gt-social-item">
                <li><i className="fa-brands fa-youtube"></i> you tube</li>
                <li><i className="fa-brands fa-discord"></i> discord</li>
              </ul>
            </div>
            <p>
              Gamers can join local gaming meetups, participate in gaming events, or connect with like-minded individuals through online forums.
            </p>
            <a href="/contact" className="gt-theme-btn">get in touch</a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="gt-hero-image">
            <img src="/assets/img/home-4/hero/hero-1.png" alt="hero" className="img-custom-anim-left" />
            <div className="x-shape">
              <img src="/assets/img/home-4/hero/x-shape.png" alt="x-shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection4; 