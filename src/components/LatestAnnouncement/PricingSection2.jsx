import React from "react";

const PricingSection2 = () => (
  <section className="gt-pricing-section-2 section-padding parallaxie fix bg-cover" style={{backgroundImage: "url('/assets/img/home-2/pricing-bg.jpg')"}}>
    <div className="container">
      <div className="gt-pricing-wrapper">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4 col-lg-12 col-md-12">
            <div className="gt-pricing-content">
              <div className="gt-section-title-2 mb-0">
                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">best plan</h6>
                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                  best pricing
                  plan for you!
                </h2>
              </div>
              <p className="gt-pricing-text wow fadeInUp" data-wow-delay=".5s">
                A game studio crafting exciting, high-quality video games, prioritizing immersive gameplay and mechanics.
              </p>
              {/* Tabs omitted for brevity */}
            </div>
          </div>
          <div className="col-xl-8">
            <div className="pricing__tab-content">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="pt-1" role="tabpanel" aria-labelledby="pt-1-tab">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="gt-pricing-box-items-2" style={{backgroundImage: "url('/assets/img/home-2/pricing-item-bg.png')"}}>
                        <span className="gt-price-tag">basic pack</span>
                        <div className="gt-pricing-header">
                          <div className="gt-icon">
                            <img src="/assets/img/home-2/diamond.svg" alt="img" />
                          </div>
                          <h2>$19.99</h2>
                          <p>
                            Proin gravida nibh vel velit auctor
                            aliquet. Aenean sollicitudin
                          </p>
                        </div>
                        <ul className="gt-pricing-list">
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            Unlimited access to core features
                          </li>
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            Restricted usage limits on storage
                          </li>
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            nhanced security features included
                          </li>
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            Complete Ad-free gaming
                          </li>
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            Multiple user accounts at discount
                          </li>
                        </ul>
                        <div className="gt-pricing-btn">
                          <div className="gt-bg-shape">
                            <img src="/assets/img/home-2/pricing-btn-shape.png" alt="img" />
                          </div>
                          <a href="/pricing.html" className="gt-pricing-text">
                            choose plan <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="gt-pricing-box-items-2" style={{backgroundImage: "url('/assets/img/home-2/pricing-item-bg.png')"}}>
                        <span className="gt-price-tag gt-bg-white">pro pack</span>
                        <div className="gt-pricing-header">
                          <div className="gt-icon">
                            <img src="/assets/img/home-2/diamond.svg" alt="img" />
                          </div>
                          <h2>$39.99</h2>
                          <p>
                            Proin gravida nibh vel velit auctor
                            aliquet. Aenean sollicitudin
                          </p>
                        </div>
                        <ul className="gt-pricing-list">
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            Unlimited access to core features
                          </li>
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            Restricted usage limits on storage
                          </li>
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            nhanced security features included
                          </li>
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            Complete Ad-free gaming
                          </li>
                          <li>
                            <img src="/assets/img/home-2/check.svg" alt="img" />
                            Multiple user accounts at discount
                          </li>
                        </ul>
                        <div className="gt-pricing-btn">
                          <div className="gt-bg-shape">
                            <img src="/assets/img/home-2/pricing-btn-shape-2.png" alt="img" />
                          </div>
                          <a href="/pricing.html" className="gt-pricing-text color-2">
                            choose plan <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Yearly tab omitted for brevity */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection2; 