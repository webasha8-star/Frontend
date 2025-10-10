import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      image: "news-1.jpg",
      date: "30 May, 2025",
      title: "The evolution of online gaming and its rise",
      excerpt: "Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit",
      className: "item_right_1"
    },
    {
      id: 2,
      image: "news-2.jpg",
      date: "30 May, 2025",
      title: "The evolution of online gaming and its rise",
      excerpt: "Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit"
    },
    {
      id: 3,
      image: "news-3.jpg",
      date: "30 May, 2025",
      title: "The evolution of online gaming and its rise",
      excerpt: "Nunc consectetur ornare varius. Nulla massa velit, ultricies in volutpat a, viverra et nunc. spendisse non velit",
      className: "item_left_1"
    }
  ];

  return (
    <section className="gt-news-section section-padding fix">
      <div className="container">
        <div className="gt-section-title-area">
          <div className="gt-section-title-2">
            <h6 className="subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">CTF INTEL UPDATES</h6>
            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
             LATEST NEWS & BLOGS
            </h2>
          </div>
          <a href="/game" className="gt-theme-btn gt-style-border">
            view all blogs
          </a>
        </div>
        <div className="row">
          {newsItems.map((item) => (
            <div key={item.id} className={`col-xl-4 col-lg-6 col-md-6 ${item.className || ''}`}>
              <div className="gt-news-card-item">
                <div className="gt-news-image">
                  <img src={`/assets/img/home-1/news/${item.image}`} alt="img" />
                </div>
                <div className="gt-news-content">
                  <ul className="gt-list">
                    <li>
                      <i className="fa-regular fa-calendar"></i>
                      {item.date}
                    </li>
                  </ul>
                  <h4>
                    <a href="/news-details">
                      {item.title}
                    </a>
                  </h4>
                  <p>{item.excerpt}</p>
                  <a href="/news-details" className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 