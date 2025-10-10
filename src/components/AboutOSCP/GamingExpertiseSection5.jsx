import React from 'react';

const expertiseSlides = [
  {
    tag: 'Gaming Expertise',
    title: 'Rimply dummy text of the printing and type setting industry. Lorem Ipsum has been',
    desc: 'Emerging trends in the esports industry include the growth of mobile esports, the integration of virtual reality in gaming experiences,',
    date: '12 March 2025',
    comments: 35,
  },
  {
    tag: 'Gaming Expertise',
    title: 'How to Choose The Right Equipment When You Are The Best Gaming Player',
    desc: 'Emerging trends in the esports industry include the growth of mobile esports, the integration of virtual reality in gaming experiences,',
    date: '12 March 2025',
    comments: 35,
  },
  {
    tag: 'Gaming Expertise',
    title: 'Hitlist Ast Computery In The World Wide Gaming Market.',
    desc: 'Emerging trends in the esports industry include the growth of mobile esports, the integration of virtual reality in gaming experiences,',
    date: '12 March 2025',
    comments: 35,
  },
];

const images = [
  '/assets/img/home-5/gaming/gmaing-1.jpg',
  '/assets/img/home-5/gaming/gaming-2.jpg',
  '/assets/img/home-5/gaming/gaming-3.jpg',
];

const GamingExpertiseSection5 = () => (
  <section className="gt-gaming-expertise-section-5 fix section-bg">
    <div className="swiper-dot-2"><div className="dot"></div></div>
    <div className="container">
      <div className="gt-gaming-expertise-wrapper-5">
        <div className="row g-4 align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="slider-box sticky-style">
              {/* Simulate Swiper slides */}
              {expertiseSlides.map((slide, idx) => (
                <div className="swiper-slide" key={idx}>
                  <div className="gt-tag-post">{slide.tag}</div>
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                  <div className="gt-social">
                    <span>{slide.date}</span>
                    <span>{slide.comments} Comments</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper gt-image-slider">
      <div className="swiper-wrapper">
        {images.map((img, idx) => (
          <div className="swiper-slide" key={idx}>
            <div className="gt-gaming-image">
              <img src={img} alt={`gaming-expertise-${idx+1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GamingExpertiseSection5; 