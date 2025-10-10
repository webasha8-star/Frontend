import React from "react";

const GameSection = () => {
  const games = [
    { id: 1, image: 'game-1.png', delay: '0.3s', tagline: 'Hack 1', subtitle: 'SWEET' },
    { id: 2, image: 'game-2.png', delay: '0.4s', tagline: 'Hack 2', subtitle: 'STEALTH' },
    { id: 3, image: 'game-3.png', delay: '0.6s', tagline: 'Hack 3', subtitle: 'FORCE' },
    { id: 4, image: 'game-4.png', delay: '0.8s', tagline: 'Hack 4', subtitle: 'ESCALATE' },
    { id: 5, image: 'game-5.png', delay: '0.2s', tagline: 'Hack 5', subtitle: 'BYPASS' },
    { id: 6, image: 'game-6.png', delay: '0.4s', tagline: 'Hack 6', subtitle: 'OWNED' }
  ];

  const topGames = games.slice(0, 3);
  const bottomGames = games.slice(3, 6);

  return (
    <section className="gt-game-section section-padding fix">
      <div className="container-fluid">
        <div className="gt-section-title-2 text-center">
          <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
            Why CrackMeNow?
          </h2>
          <h6 className="subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">
            CrackMeNow offers purpose-built-style training labs, real-world
            scenarios and tools to track your skills and readiness. Everything
            you need to pass the OSCP and grow as a pentester.
          </h6>
        </div>
        <div className="row">
          {topGames.map((game) => (
            <div key={game.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={game.delay}>
              <div className="gt-gaming-card-item">
                <div className="gt-gaming-image">
                  <img src={`/assets/img/home-1/game/${game.image}`} alt="img" />
                  <a href="/game-details" className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className="gt-gaming-content">
                    <h6>{game.tagline}</h6>
                    <h3>
                      <a href="/game-details">{game.subtitle}</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-4">
          {bottomGames.map((game) => (
            <div key={game.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={game.delay}>
              <div className="gt-gaming-card-item">
                <div className="gt-gaming-image">
                  <img src={`/assets/img/home-1/game/${game.image}`} alt="img" />
                  <a href="/game-details" className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className="gt-gaming-content">
                    <h6>{game.tagline}</h6>
                    <h3>
                      <a href="/game-details">SWEET PAYLOAD EXECUTION</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
