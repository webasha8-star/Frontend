import React from "react";

const CtaDownloadAppSection2 = () => (
  <section className="gt-cta-download-app-section pb-0 fix section-padding bg-cover" style={{backgroundImage: "url('/assets/img/home-2/cta/cta-bg.jpg')"}}>
    <div className="gt-x-shape">
      <img src="/assets/img/home-2/cta/x-shape.png" alt="mg" />
    </div>
    <div className="container">
      <div className="gt-cta-download-app-wrapper">
        <div className="row g-4 justify-content-between">
          <div className="col-xl-6 col-lg-6 order-2 order-xl-1">
            <div className="gt-cta-image rotatedscal">
              <img src="/assets/img/home-2/cta/cta-image.png" alt="img" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 order-1 order-xl-2">
            <div className="gt-cta-content">
              <div className="gt-section-title-2 mb-0">
                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">download our app</h6>
                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                  Get Our App & Play Like A Pro
                </h2>
              </div>
              <p className="gt-cta-text wow fadeInUp" data-wow-delay=".5s">
                A game studio crafting exciting, high-quality video games, prioritizing immersive gameplay and mechanics. Lacinia at quis risus sed vulputate odio. Accumsan lacus
              </p>
              <div className="gt-app-button">
                <img src="/assets/img/home-2/cta/play-store.png" alt="img" />
                <img src="/assets/img/home-2/cta/apple-store.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CtaDownloadAppSection2; 