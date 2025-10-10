import React from 'react';

const matches = [
  {
    teams: ['/assets/img/home-2/match/match-01.jpg', '/assets/img/home-2/match/vs.png', '/assets/img/home-2/match/match-02.jpg'],
    date: '30 May, 2025',
    time: '10:00 am - 12:30 pm',
    title: 'Aggressive & War-Themed',
    desc: 'A game studio crafting exciting, high-quality video immersive gameplay and mechanics.',
  },
  {
    teams: ['/assets/img/home-2/match/match-03.jpg', '/assets/img/home-2/match/vs.png', '/assets/img/home-2/match/match-04.jpg'],
    date: '30 May, 2025',
    time: '10:00 am - 12:30 pm',
    title: 'Aggressive & War-Themed',
    desc: 'A game studio crafting exciting, high-quality video immersive gameplay and mechanics.',
  },
  {
    teams: ['/assets/img/home-2/match/match-05.jpg', '/assets/img/home-2/match/vs.png', '/assets/img/home-2/match/match-06.jpg'],
    date: '30 May, 2025',
    time: '10:00 am - 12:30 pm',
    title: 'Aggressive & War-Themed',
    desc: 'A game studio crafting exciting, high-quality video immersive gameplay and mechanics.',
  },
  {
    teams: ['/assets/img/home-2/match/match-07.jpg', '/assets/img/home-2/match/vs.png', '/assets/img/home-2/match/match-08.jpg'],
    date: '30 May, 2025',
    time: '10:00 am - 12:30 pm',
    title: 'Aggressive & War-Themed',
    desc: 'A game studio crafting exciting, high-quality video immersive gameplay and mechanics.',
  },
];

const TrendingMatchSection5 = () => (
  <section className="gt-trending-match section-padding">
    <div className="gt-left-shape">
      <img src="/assets/img/home-2/match/left-shape.png" alt="left-shape" />
    </div>
    <div className="container">
      <div className="gt-section-title-area">
        <div className="gt-section-title-2 mb-0">
          <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">big bang matched</h6>
          <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">TRENDING MATCHES</h2>
        </div>
        <ul className="nav">
          <li className="nav-item"><a href="#all" data-bs-toggle="tab" className="nav-link active">all matches</a></li>
          <li className="nav-item"><a href="#upcoming" data-bs-toggle="tab" className="nav-link">upcoming matches</a></li>
          <li className="nav-item"><a href="#latest" data-bs-toggle="tab" className="nav-link">latest results</a></li>
        </ul>
      </div>
      <div className="tab-content">
        <div id="all" className="tab-pane fade show active">
          {matches.map((match, idx) => (
            <div className="gt-trending-match-items top_view_2 item-hover" key={idx}>
              <div className="gt-match-logo">
                <img src={match.teams[0]} alt="team-1" className="gt-match-thumb" />
                <img src={match.teams[1]} alt="vs" />
                <img src={match.teams[2]} alt="team-2" className="gt-match-thumb" />
              </div>
              <div className="gt-match-content">
                <ul className="gt-date-list">
                  <li><i className="fa-light fa-calendar"></i> {match.date}</li>
                  <li><i className="fa-regular fa-clock"></i> {match.time}</li>
                </ul>
                <h3><a href="/match-details">{match.title}</a></h3>
                <p>{match.desc}</p>
              </div>
              <div className="gt-watch-now-items">
                <span>Watch live on</span>
                <ul className="gt-watch-now-list">
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i> you tube</a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-discord"></i> discord</a>
                  </li>
                  <li>
                    <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitch"></i> twitch</a>
                    <a href="#"><i className="fa-solid fa-eyes"></i> GeForce</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrendingMatchSection5; 