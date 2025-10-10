import React from 'react';

const instagramImages = [
  'instagram-01.jpg', 'instagram-02.jpg', 'instagram-03.jpg', 'instagram-04.jpg', 'instagram-05.jpg', 'instagram-06.jpg', 'instagram-07.jpg'
];

const InstagramSection5 = () => (
  <div className="gt-instagram-section-3 fix">
    <div className="swiper gt-instagram-slider">
      <div className="swiper-wrapper">
        {instagramImages.map((img, idx) => (
          <div className="swiper-slide" key={idx}>
            <div className="gt-instagram-image style-2">
              <img src={`/assets/img/home-3/instagram/${img}`} alt={`instagram-${idx+1}`} />
              <a href="/" className="gt-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default InstagramSection5; 