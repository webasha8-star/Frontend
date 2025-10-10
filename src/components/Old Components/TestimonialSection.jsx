import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Daniel Smith",
      position: "Senior engineer",
      image: "client-1.png",
      text: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly rtheir..."
    },
    {
      id: 2,
      name: "Daniel Smith",
      position: "Senior engineer",
      image: "client-1.png",
      text: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly rtheir..."
    },
    {
      id: 3,
      name: "Daniel Smith",
      position: "Senior engineer",
      image: "client-1.png",
      text: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly rtheir..."
    }
  ];

  return (
    <section className="gt-testimonial-section section-padding fix section-bg-1">
      <div className="right-shape">
        <img src="/assets/img/home-1/testimonial/shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="gt-section-title-area">
          <div className="gt-section-title-2">
            <h6 className="subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">What Our Hackers Say</h6>
            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
              What Our Hackers Say
            </h2>
          </div>
          <div className="rating wow fadeInUp" data-wow-delay=".5s">
            <span>1000+ SOLVERS.</span>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="gt-testimonial-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-7">
              <div className="swiper gt-testimonial-slider">
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="swiper-slide">
                      <div className="gt-testimonial-card-item">
                        <div className="gt-client-info">
                          <div className="image">
                            <img src={`/assets/img/home-1/testimonial/${testimonial.image}`} alt="img" />
                          </div>
                          <div className="text">
                            <h6>{testimonial.name}</h6>
                            <p>{testimonial.position}</p>
                          </div>
                        </div>
                        <div className="gt-testi-content">
                          <div className="icon">
                            <img src="/assets/img/home-1/icon/quate.svg" alt="img" />
                          </div>
                          <p>{testimonial.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="swiper-dot">
                <div className="dot"></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-image">
                <img src="/assets/img/home-1/testimonial/text-image.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 