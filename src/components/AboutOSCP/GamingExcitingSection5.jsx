import React from 'react';

const excitingGames = [
  {
    img: '/assets/img/home-5/gaming/exiting-1.jpg',
    date: '11 March 2025',
    comments: 19,
    title: 'Gaeme icrowave is too small to fit the Happy Sunday Expand.',
    link: '/game-details',
  },
  {
    img: '/assets/img/home-5/gaming/exiting-2.jpg',
    date: '11 March 2025',
    comments: 19,
    title: 'Motorcycle Touring vs. City Riding – Which One is for You?',
    link: '/game-details',
  },
  {
    img: '/assets/img/home-5/gaming/exiting-3.jpg',
    date: '11 March 2025',
    comments: 19,
    title: 'Motorcycle Touring vs. City Riding – Which One is for You?',
    link: '/game-details',
  },
];

const GamingExcitingSection5 = () => (
  <section className="gt-gaming-exciting-section fix">
    <div className="container">
      <div className="container">
        <div className="gt-section-title-area">
          <div className="gt-section-title">
            <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">Action Games</h6>
            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Most Exiting Games</h2>
          </div>
          <a href="/game" className="gt-theme-btn gt-style-border">view all games</a>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="gt-gaming-exciting-card-item">
              <div className="gt-gaming-image fix img-zoom">
                <img src={excitingGames[0].img} alt="exiting-1" />
              </div>
              <div className="gt-gaming-content">
                <ul className="gt-date-list">
                  <li><i className="fa-solid fa-calendar-days"></i> {excitingGames[0].date}</li>
                  <li><i className="fa-solid fa-comments"></i> {excitingGames[0].comments} Comments</li>
                </ul>
                <h4><a href={excitingGames[0].link}>{excitingGames[0].title}</a></h4>
                <a href={excitingGames[0].link} className="gt-theme-btn gt-style-border">READ MORE</a>
              </div>
            </div>
            <div className="gt-exiting-bg-image bg-cover" style={{backgroundImage: 'url(/assets/img/home-5/gaming/exiting-4.jpg)'}}>
              <div className="gt-exiting-content">
                <div className="icon">
                  <img src="/assets/img/home-5/quate.svg" alt="quate" />
                </div>
                <p>Srem Ipsum is simply dummy text of the printing and typ esetting industry. Ipsum has been the industry's standar dummy text eorem Ipsum is simply the industry's standard .</p>
                <div className="info-item">
                  <div className="image">
                    <img src="/assets/img/home-5/gaming/client-1.png" alt="client-1" />
                  </div>
                  <div className="content">
                    <h3>Chun Qing</h3>
                    <span>gaming artist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gt-gaming-exciting-card-item">
              <div className="gt-gaming-image fix img-zoom">
                <img src={excitingGames[1].img} alt="exiting-2" />
              </div>
              <div className="gt-gaming-content">
                <ul className="gt-date-list">
                  <li><i className="fa-solid fa-calendar-days"></i> {excitingGames[1].date}</li>
                  <li><i className="fa-solid fa-comments"></i> {excitingGames[1].comments} Comments</li>
                </ul>
                <h4><a href={excitingGames[1].link}>{excitingGames[1].title}</a></h4>
                <a href={excitingGames[1].link} className="gt-theme-btn gt-style-border">READ MORE</a>
              </div>
            </div>
            <div className="gt-gaming-exciting-card-item">
              <div className="gt-gaming-image">
                <img src={excitingGames[2].img} alt="exiting-3" />
              </div>
              <div className="gt-gaming-content">
                <ul className="gt-date-list">
                  <li><i className="fa-solid fa-calendar-days"></i> {excitingGames[2].date}</li>
                  <li><i className="fa-solid fa-comments"></i> {excitingGames[2].comments} Comments</li>
                </ul>
                <h4><a href={excitingGames[2].link}>{excitingGames[2].title}</a></h4>
                <a href={excitingGames[2].link} className="gt-theme-btn gt-style-border">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GamingExcitingSection5; 