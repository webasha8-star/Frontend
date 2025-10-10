import React from 'react';

const news = [
  {
    img: 'news-1.jpg',
    title: 'The evolution of online gaming and its rise Dirt bike rider with motorcycle racing',
    date: '11 March 2025',
    link: '/news-details',
  },
  {
    img: 'news-2.jpg',
    title: 'The evolution of online gaming and its rise',
    date: '11 March 2025',
    link: '/news-details',
    style: 'gt-style-2',
  },
  {
    img: 'news-3.jpg',
    title: 'The evolution of online gaming and its rise',
    date: '11 March 2025',
    link: '/news-details',
    style: 'gt-style-2',
  },
];

const NewsSection4 = () => (
  <section className="gt-news-section-4 section-padding pb-0 fix">
    <div className="container">
      <div className="gt-section-title-2 text-center">
        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">latest news</h6>
        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">latest news & blog</h2>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-4 col-md-6">
          <div className="gt-news-card-item-4">
            <div className="gt-news-image">
              <img src={`/assets/img/home-4/news/${news[0].img}`} alt="news-1" />
            </div>
            <div className="gt-news-content">
              <h4><a href={news[0].link}>{news[0].title}</a></h4>
              <ul className="gt-post">
                <li><i className="fa-solid fa-calendar-days"></i> {news[0].date}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={`gt-news-card-item-4 gt-style-2`}>
            <div className="gt-news-content">
              <h4><a href={news[1].link}>{news[1].title}</a></h4>
              <ul className="gt-post">
                <li><i className="fa-solid fa-calendar-days"></i> {news[1].date}</li>
              </ul>
            </div>
            <div className="gt-news-image">
              <img src={`/assets/img/home-4/news/${news[1].img}`} alt="news-2" />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className={`gt-news-card-item-4 gt-style-2`}>
            <div className="gt-news-image">
              <img src={`/assets/img/home-4/news/${news[2].img}`} alt="news-3" />
            </div>
            <div className="gt-news-content">
              <h4><a href={news[2].link}>{news[2].title}</a></h4>
              <ul className="gt-post">
                <li><i className="fa-solid fa-calendar-days"></i> {news[2].date}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsSection4; 