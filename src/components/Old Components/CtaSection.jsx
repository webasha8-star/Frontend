import React from 'react';

const CtaSection = () => {
  return (
    <section className="gt-cta-bg-section fix bg-cover" style={{ backgroundImage: "url(/assets/img/home-1/cta/cta-bg-1.jpg)" }}>
      <div className="container">
        <div className="gt-cta-bg-wrapper">
          <div className="shape float-bob-y">
            <img src="/assets/img/home-1/cta/shape-1.png" alt="img" />
          </div>
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="gt-cta-content">
                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                  JOIN CRACK ME NOW <br />
                 BECOME THE NEXT CTF CHAMPION TODAY!
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="gt-right-image">
                <a href="/contact" className="gt-theme-btn wow fadeInUp" data-wow-delay=".5s">
                 Join the Community Now
                </a>
                <div className="gt-cta-image wow animated-image">
                  <img src="/assets/img/home-1/cta/man.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 