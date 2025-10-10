import React from "react";

const NewsSection2 = () => (
  <section className="gt-news-section-2 fix section-padding">
    <div className="container">
      <div className="gt-section-title-area">
        <div className="gt-section-title">
          <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">latest news</h6>
          <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
            our latest news
          </h2>
        </div>
        <a href="/news.html" className="gt-theme-btn gt-style-border">
          view all blogs
        </a>
      </div>
    </div>
    <div className="gt-news-wrapper-2">
      <div className="swiper gt-news-slider">
        <div className="swiper-wrapper">
          {[1,2,3,4,5,6].map(i => (
            <div className="swiper-slide" key={i}>
              <div className="gt-news-box-items-2">
                <div className="gt-thumb">
                  <img src={`/assets/img/home-2/news/news-0${i}.jpg`} alt="img" />
                </div>
                <div className="gt-content">
                  <h3><a href="/news-details.html">The evolution of online gaming and its rise</a></h3>
                  <span className="gt-date">
                    <i className="fa-solid fa-calendar-days"></i> 11 March 2025
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NewsSection2; 