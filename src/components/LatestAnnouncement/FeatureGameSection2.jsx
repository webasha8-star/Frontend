import React from "react";

const FeatureGameSection2 = () => (
  <section className="gt-feature-game-section fix section-padding pt-0">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 col-md-6">
          <div className="gt-game-feature-thumb img-zoom fix">
            <img src="/assets/img/home-2/feature-game/game-01.jpg" alt="img" />
            <div className="gt-game-fuature-content">
              <span className="post-discount">rate 50%</span>
              <h3><a href="/game-details.html">Sweet revenge gameplay</a></h3>
            </div>
            <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="gt-game-feature-thumb img-zoom fix">
            <img src="/assets/img/home-2/feature-game/game-02.jpg" alt="img" />
            <div className="gt-game-fuature-content">
              <span className="post-discount">rate 50%</span>
              <h3><a href="/game-details.html">world of warcraft</a></h3>
            </div>
            <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureGameSection2; 