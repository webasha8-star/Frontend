import React from 'react';

const BrandSection2 = () => {
  const brands = [
    { id: 1, image: '/assets/img/home-1/brand/b-1.png' },
    { id: 2, image: '/assets/img/home-1/brand/b-2.png' },
    { id: 3, image: '/assets/img/home-1/brand/b-3.png' },
    { id: 4, image: '/assets/img/home-1/brand/b-4.png' },
    { id: 5, image: '/assets/img/home-1/brand/b-5.png' },
    { id: 6, image: '/assets/img/home-1/brand/b-6.png' }
  ];

  return (
    <div className="gt-brand-section section-padding fix">
      <div className="container">
        <div className="swiper gt-brand-slider">
          <div className="swiper-wrapper">
            {brands.map((brand) => (
              <div key={brand.id} className="swiper-slide">
                <div className="gt-brand-box">
                  <div className="gt-brand-image text-center">
                    <img src={brand.image} alt="img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection2; 