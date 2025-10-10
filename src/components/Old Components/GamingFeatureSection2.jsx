import React from "react";

const GamingFeatureSection2 = () => (
  <section className="gt-gaming-feature-section fix section-padding">
    <div className="container">
      <div className="gt-gaming-feature-wrapper">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="gt-gaming-left-item">
              <div className="gt-gaming-feature-image wow img-custom-anim-top" data-wow-duration="1.3s" data-wow-delay="0.3s">
                <img src="/assets/img/home-2/man.jpg" alt="img" />
              </div>
              <div className="gt-red-shape wow img-custom-anim-bottom" data-wow-duration="1.3s" data-wow-delay="0.3s">
                <img src="/assets/img/home-2/red-shape.jpg" alt="img" />
              </div>
              <div className="gt-bike-image wow animated-image">
                <img src="/assets/img/home-2/bike.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gt-gaming-feature-content">
              <div className="gt-section-title-2 mb-0">
                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">eSports & Gaming Site</h6>
                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                  Forging Legends in
                  the Gaming Universe
                </h2>
              </div>
              <p className="gt-gaming-text">
                A game studio crafting exciting, high-quality video games, prioritizing immersive gameplay and mechanics. Lacinia at quis risus sed vulputate odio. Accumsan lacus vel facilisis volutpat est velit.
              </p>
              <ul className="gt-icon-list">
                <li>
                  <div className="gt-icon">
                    <img src="/assets/img/home-2/vector.svg" alt="img" />
                  </div>
                  <div className="gt-content">
                    <h4>Multi Dimension</h4>
                    <span>Non blandit massa enim nec dui. Dapibus ultrices in iaculis nunc sed</span>
                  </div>
                </li>
                <li>
                  <div className="gt-icon">
                    <img src="/assets/img/home-2/vector.svg" alt="img" />
                  </div>
                  <div className="gt-content">
                    <h4>Visual Aesthetic</h4>
                    <span>Non blandit massa enim nec dui. Dapibus ultrices in iaculis nunc sed</span>
                  </div>
                </li>
              </ul>
              <a href="/about.html" className="gt-theme-btn gt-style-border">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GamingFeatureSection2; 