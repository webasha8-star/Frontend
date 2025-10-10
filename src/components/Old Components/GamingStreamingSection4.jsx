import React from 'react';

const streams = [
  'gaming-1.jpg',
  'gaming-2.jpg',
  'gaming-3.jpg',
  'gaming-4.jpg',
];

const GamingStreamingSection4 = () => (
  <section className="gt-gaming-streaming-section section-padding fix bg-cover" style={{backgroundImage: "url(/assets/img/home-4/gaming/gaming-bg.jpg)"}}>
    <div className="container-fluid">
      <div className="gt-section-title-2 text-center">
        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">recent live sreaming</h6>
        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">complete live streaming</h2>
      </div>
      <div className="swiper gt-games-slider">
        <div className="swiper-wrapper">
          {streams.map((img, idx) => (
            <div className="swiper-slide" key={idx}>
              <div className="gt-gaming-card-item-4">
                <div className="gt-gaming-image">
                  <img src={`/assets/img/home-4/gaming/${img}`} alt={`stream-${idx+1}`} />
                  <div className="gt-gaming-content">
                    <h6>Watch live on</h6>
                    <ul className="gt-social-item">
                      <li><a href="#"><i className="fa-brands fa-twitch"></i>twitch</a></li>
                      <li><a href="#"><i className="fa-brands fa-youtube"></i>you tube</a></li>
                      <li><a href="#"><i className="fa-brands fa-discord"></i>discord</a></li>
                    </ul>
                    <h3><a href="/game-details">Sweet revenge gameplay</a></h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GamingStreamingSection4; 