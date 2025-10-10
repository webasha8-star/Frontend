import React from 'react';

const brandImages = [
  'b-1.png', 'b-2.png', 'b-3.png', 'b-4.png', 'b-5.png', 'b-6.png'
];

const BrandSection5 = () => (
  <div className="gt-brand-section fix mt-5 mb-5">
    <div className="container">
      <div className="swiper gt-brand-slider">
        <div className="swiper-wrapper">
          {brandImages.map((img, idx) => (
            <div className="swiper-slide" key={idx}>
              <div className="gt-brand-box">
                <div className="gt-brand-image text-center">
                  <img src={`/assets/img/home-1/brand/${img}`} alt={`brand-${idx+1}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BrandSection5; 