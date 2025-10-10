import React from 'react';

const games = [
  { title: 'The Legend of Zelda', percent: '95%' },
  { title: 'Call of Duty: Modern Warfare II', percent: '99%', style: 'style-two' },
  { title: 'Spider-Man (PS4/PS5)', percent: '75%' },
  { title: 'Red Dead Redemption 2', percent: '90%', style: 'style-two' },
];

const GamingExpertiseSection4 = () => (
  <section className="gt-gaming-expertise-section section-padding fix pt-0">
    <div className="container">
      <div className="right-shape">
        <img src="/assets/img/home-4/gaming/blur-shape-1.png" alt="blur-shape-1" />
      </div>
      <div className="bottom-shape">
        <img src="/assets/img/home-4/gaming/blur-shape-2.png" alt="blur-shape-2" />
      </div>
      <div className="gt-section-title-area">
        <div className="gt-section-title mb-0">
          <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">My Gaming Expertise</h6>
          <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
            My Gaming Experiences <br />Are 4.8 Years
          </h2>
        </div>
        <div className="drive-shape float-bob-y">
          <img src="/assets/img/home-4/gaming/drive.png" alt="drive" />
        </div>
      </div>
      <div className="gt-progress-wrapper">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="gt-progress-wrap">
              {games.slice(0,2).map((game, idx) => (
                <div className="pro-items" key={idx}>
                  <div className="pro-head">
                    <h4 className="title">{game.title}</h4>
                    <span className="point">{game.percent}</span>
                  </div>
                  <div className="progress">
                    <div className={`progress-value${game.style ? ' ' + game.style : ''}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gt-progress-wrap">
              {games.slice(2).map((game, idx) => (
                <div className="pro-items" key={idx}>
                  <div className="pro-head">
                    <h4 className="title">{game.title}</h4>
                    <span className="point">{game.percent}</span>
                  </div>
                  <div className="progress">
                    <div className={`progress-value${game.style ? ' ' + game.style : ''}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GamingExpertiseSection4; 