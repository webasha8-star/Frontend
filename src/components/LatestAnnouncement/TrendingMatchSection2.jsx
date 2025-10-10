import React from "react";

const TrendingMatchSection2 = () => (
  <section className="gt-trending-match section-padding">
    <div className="gt-left-shape">
      <img src="/assets/img/home-2/match/left-shape.png" alt="img" />
    </div>
    <div className="container">
      <div className="gt-section-title-area">
        <div className="gt-section-title-2 mb-0">
          <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">big bang matched</h6>
          <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
            TRENDING MATCHES
          </h2>
        </div>
        <ul className="nav">
          <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
            <a href="#all" data-bs-toggle="tab" className="nav-link active">
              all matches
            </a>
          </li>
          <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
            <a href="#upcoming" data-bs-toggle="tab" className="nav-link">
              upcoming matches
            </a>
          </li>
          <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
            <a href="#latest" data-bs-toggle="tab" className="nav-link">
              latest results
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        {/* Only the 'all' tab is shown for brevity. Add more as needed. */}
        <div id="all" className="tab-pane fade show active">
          <div className="gt-trending-match-items top_view_2 item-hover">
            <div className="gt-match-logo">
              <img src="/assets/img/home-2/match/match-01.jpg" alt="img" className="gt-match-thumb" />
              <img src="/assets/img/home-2/match/vs.png" alt="img" />
              <img src="/assets/img/home-2/match/match-02.jpg" alt="img" className="gt-match-thumb" />
            </div>
            <div className="gt-match-content">
              <ul className="gt-date-list">
                <li>
                  <i className="fa-light fa-calendar"></i>
                  30 May, 2025
                </li>
                <li>
                  <i className="fa-regular fa-clock"></i>
                  10:00 am - 12:30 pm
                </li>
              </ul>
              <h3>
                <a href="/match-details.html">
                  Aggressive & War-Themed
                </a>
              </h3>
              <p>
                A game studio crafting exciting, high-quality video immersive gameplay and mechanics.
              </p>
            </div>
            <div className="gt-watch-now-items">
              <span>Watch live on</span>
              <ul className="gt-watch-now-list">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i> you tube
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-discord"></i> discord
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitch"></i> twitch
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-eyes"></i> GeForce
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Add more match items as needed */}
        </div>
      </div>
    </div>
  </section>
);

export default TrendingMatchSection2; 