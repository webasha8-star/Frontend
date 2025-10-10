import React from 'react';

const streams = [
  {
    img: 'stream-1.jpg',
    title: 'The Witcher 3: Wild Hunt',
    date: '30 May, 2024',
    time: '10:00 am - 12:30 pm',
    desc: 'A game studio crafting exciting, high-quality video immersive gameplay and mechanics.'
  },
  {
    img: 'stream-2.jpg',
    title: 'Mario Kart 8 Deluxe',
    date: '30 May, 2024',
    time: '10:00 am - 12:30 pm',
    desc: 'A game studio crafting exciting, high-quality video immersive gameplay and mechanics.'
  },
  {
    img: 'stream-3.jpg',
    title: 'Final Fantasy VII Remake',
    date: '30 May, 2024',
    time: '10:00 am - 12:30 pm',
    desc: 'A game studio crafting exciting, high-quality video immersive gameplay and mechanics.'
  }
];

const UpcomingStreamingSection4 = () => (
  <section className="gt-upcoming-streaming-section section-padding">
    <div className="top-shape">
      <img src="/assets/img/home-4/gaming/blur-shape-2.png" alt="top-shape" />
    </div>
    <div className="container">
      <div className="gt-section-title-area">
        <div className="gt-section-title">
          <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">upcoming LIVE</h6>
          <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">upcoming streaming</h2>
        </div>
      </div>
      <div className="gt-upcoming-main-wrapper fix">
        <div className="row">
          <div className="col-xl-12">
            {streams.map((stream, idx) => (
              <div className="gt-upcoming-streaming-wrapper tz_sticky_item" key={idx}>
                <div className="gt-streaming-image">
                  <img src={`/assets/img/home-4/gaming/${stream.img}`} alt={stream.title} />
                </div>
                <div className="gt-streaming-content">
                  <ul className="gt-post">
                    <li><i className="fa-regular fa-calendar"></i> {stream.date}</li>
                    <li><i className="fa-regular fa-clock"></i> {stream.time}</li>
                  </ul>
                  <h3><a href="/game-details">{stream.title}</a></h3>
                  <p>{stream.desc}</p>
                </div>
                <div className="gt-social-item">
                  <h6>Watch live on</h6>
                  <ul className="gt-social">
                    <li><a href="#"><i className="fa-brands fa-youtube"></i> you tube</a></li>
                    <li><a href="#"><i className="fa-brands fa-discord"></i> discord</a></li>
                  </ul>
                  <ul className="gt-social">
                    <li><a href="#"><i className="fa-brands fa-twitch"></i> twitch</a></li>
                    <li><a href="#"><i className="fa-regular fa-eyes"></i> GeForce</a></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UpcomingStreamingSection4; 