import React from 'react';

const brandImages = [
  'b-1.jpg', 'b-2.jpg', 'b-3.jpg', 'b-4.jpg', 'b-5.jpg', 'b-6.jpg', 'b-7.jpg', 'b-8.jpg', 'b-9.jpg', 'b-10.jpg', 'b-11.jpg', 'b-3.jpg'
];

const BrandSection4 = () => (
  <div className="gt-brand-section-4 fix section-padding">
    <div className="gt-blur-shape">
      <img src="/assets/img/home-4/brand/blur.png" alt="blur-shape" />
    </div>
    <div className="gt-brand-wrapper-4">
      <div className="swiper gt-brand-slider-4">
        <div className="swiper-wrapper">
          {brandImages.map((img, idx) => (
            <div className="swiper-slide" key={idx}>
              <div className="gt-brand-image text-center">
                <img src={`/assets/img/home-4/brand/${img}`} alt={`brand-${idx+1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BrandSection4; 