import React from 'react';

const newsSlider = [
  { img: '/assets/img/home-2/news/news-01.jpg', title: 'The evolution of online gaming and its rise', date: '11 March 2025' },
  { img: '/assets/img/home-2/news/news-02.jpg', title: 'The evolution of online gaming and its rise', date: '11 March 2025' },
  { img: '/assets/img/home-2/news/news-03.jpg', title: 'The evolution of online gaming and its rise', date: '11 March 2025' },
  { img: '/assets/img/home-2/news/news-04.jpg', title: 'The evolution of online gaming and its rise', date: '11 March 2025' },
  { img: '/assets/img/home-2/news/news-05.jpg', title: 'The evolution of online gaming and its rise', date: '11 March 2025' },
  { img: '/assets/img/home-2/news/news-06.jpg', title: 'The evolution of online gaming and its rise', date: '11 March 2025' },
];

const NewsSliderSection5 = () => (
  <section className="gt-news-section-2 fix section-padding">
    <div className="container"></div>
    <div className="gt-news-wrapper-2">
      <div className="swiper gt-news-slider">
        <div className="swiper-wrapper">
          {newsSlider.map((item, idx) => (
            <div className="swiper-slide" key={idx}>
              <div className="gt-news-box-items-2 mt-0">
                <div className="gt-thumb">
                  <img src={item.img} alt={`news-slider-${idx+1}`} />
                </div>
                <div className="gt-content">
                  <h3><a href="/news-details">{item.title}</a></h3>
                  <span className="gt-date"><i className="fa-solid fa-calendar-days"></i> {item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NewsSliderSection5; 