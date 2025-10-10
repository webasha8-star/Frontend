import React from 'react';

const MarqueeSection = () => {
  return (
    <div className="gt-marque-section">
      <div className="overlay-shape">
        <img src="/assets/img/home-1/overlay.png" alt="img" />
      </div>
      <div className="marquee-text-slider-3 style-11">
        <div className="swiper marquee-text-slider">
          <div className="swiper-wrapper slide-transtion">
            <div className="swiper-slide brand-slide-element">
              <div className="marquee-text-3">
                <span className="text-marquee">Challenge your mind.</span>
                <span><img src="/assets/img/home-1/circle.png" alt="img" /></span>
              </div>
            </div>
            <div className="swiper-slide brand-slide-element">
              <div className="marquee-text-3">
                <span className="text-marquee">Decode every layer.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-text-slider-3 style-12">
        <div dir="rtl" className="swiper marquee-text-slider-2">
          <div className="swiper-wrapper slide-transtion">
            <div className="swiper-slide brand-slide-element">
              <div className="marquee-text-3">
                <span className="text-marquee"> Conquer the flag.</span>
                <span><img src="/assets/img/home-1/circle.png" alt="img" /></span>
              </div>
            </div>
            <div className="swiper-slide brand-slide-element">
              <div className="marquee-text-3">
                <span className="text-marquee"> Think fast and Hack smart.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection; 