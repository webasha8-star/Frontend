import React from 'react';

const newsLeft = {
  img: '/assets/img/home-3/news/news-01.jpg',
  date: '11 March 2025',
  comments: 19,
  title: 'Motorcycle Touring vs. City Riding – Which One is for You?',
  link: '/news-details',
};
const newsRight = [
  {
    img: '/assets/img/home-3/news/news-02.jpg',
    date: '11 March 2025',
    comments: 19,
    title: 'How to Choose the Right Tires for Your Bike',
    link: '/news-details',
  },
  {
    img: '/assets/img/home-3/news/news-03.jpg',
    date: '11 March 2025',
    comments: 19,
    title: 'The Difference Between Street Bikes & Racing Bikes',
    link: '/news-details',
  },
];

const NewsSection5 = () => (
  <section className="gt-news-section-3 fix section-padding pb-0">
    <div className="container">
      <div className="gt-section-title-2 text-center">
        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">latest news</h6>
        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">our latest news</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="gt-news-left-items">
            <div className="gt-news-image">
              <img src={newsLeft.img} alt="news-01" />
            </div>
            <div className="gt-news-content">
              <ul className="gt-date-list">
                <li><i className="fa-solid fa-calendar-days"></i> {newsLeft.date}</li>
                <li><i className="fa-solid fa-comments"></i> {newsLeft.comments} Comments</li>
              </ul>
              <h3><a href={newsLeft.link}>{newsLeft.title}</a></h3>
              <a href={newsLeft.link} className="gt-theme-btn gt-style-border">READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="gt-news-right-items">
            {newsRight.map((item, idx) => (
              <div className="gt-news-box-items" key={idx}>
                <div className="gt-news-image">
                  <img src={item.img} alt={`news-0${idx+2}`} />
                </div>
                <div className="gt-news-content">
                  <ul className="gt-date-list">
                    <li><i className="fa-solid fa-calendar-days"></i> {item.date}</li>
                    <li><i className="fa-solid fa-comments"></i> {item.comments} Comments</li>
                  </ul>
                  <h3><a href={item.link}>{item.title}</a></h3>
                  <a href={item.link} className="gt-theme-btn gt-style-border">READ MORE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsSection5; 