import React from "react";

const TestimonialSection2 = () => (
  <section className="gt-testimonial-section-2 fix section-padding">
    <div className="gt-testimonial-image rotatedscal">
      <img src="/assets/img/home-2/testimonial/testimonial-image.png" alt="img" />
    </div>
    <div className="container">
      <div className="gt-section-title-2 text-center">
        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">our testimonials</h6>
        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
          REVIEWS FROM OUR <br />
          PARTICIPANTS
        </h2>
      </div>
      <div className="gt-testimonial-wraper-2">
        <div className="swiper gt-testimonial-slider-2">
          <div className="swiper-wrapper">
            {[1,2,3].map(i => (
              <div className="swiper-slide" key={i}>
                <div className="gt-testimonial-card-items-2">
                  <div className="gt-client-info">
                    <div className="gt-thumb">
                      <img src="/assets/img/home-2/testimonial/client-01.png" alt="img" />
                    </div>
                    <div className="gt-content">
                      <h6>Daniel Smith</h6>
                      <span>Senior engineer</span>
                    </div>
                  </div>
                  <div className="gt-text">
                    <div className="icon">
                      <img src="/assets/img/home-2/testimonial/bar.png" alt="img" />
                    </div>
                    <p>
                      This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly rtheir...
                    </p>
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star-sharp"></i>
                    <i className="fa-solid fa-star-sharp"></i>
                    <i className="fa-solid fa-star-sharp"></i>
                    <i className="fa-solid fa-star-sharp"></i>
                    <i className="fa-solid fa-star-sharp"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection2; 