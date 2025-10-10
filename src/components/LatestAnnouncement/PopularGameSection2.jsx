import React from 'react';

const games = [
  {
    id: 1,
    image: '/assets/img/home-2/popular-game/game-01.jpg',
    googlePlay: '/assets/img/home-2/google-play.jpg',
    appStore: '/assets/img/home-2/app-store.jpg',
  },
  {
    id: 2,
    image: '/assets/img/home-2/popular-game/game-02.jpg',
    googlePlay: '/assets/img/home-2/google-play.jpg',
    appStore: '/assets/img/home-2/app-store.jpg',
  },
  {
    id: 3,
    image: '/assets/img/home-2/popular-game/game-03.jpg',
    googlePlay: '/assets/img/home-2/google-play.jpg',
    appStore: '/assets/img/home-2/app-store.jpg',
  },
];

const PopularGameSection2 = () => (
  <section className="gt-popular-game-section section-padding pt-0">
    <div className="bg-shape">
      <img src="/assets/img/home-2/popular-game/bg-shape.png" alt="img" />
    </div>
    <div className="container">
      <div className="gt-section-title-2 text-center">
        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">recent popular games</h6>
        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
          latest news & blog
        </h2>
      </div>
      <div className="swiper gt-popular-slider">
        <div className="swiper-wrapper">
          {games.map((game) => (
            <div key={game.id} className="swiper-slide">
              <div className="gt-popular-game-items">
                <div className="gt-thumb">
                  <img src={game.image} alt="img" />
                  <div className="gt-content">
                    <a href="/game-details" className="post-cat">metaverse</a>
                    <h3><a href="/game-details">Sweet revenge gameplay</a></h3>
                  </div>
                </div>
                <div className="app-store">
                  <a href="/game-details" className="app">
                    <img src={game.googlePlay} alt="img" />
                  </a>
                  <a href="/game-details" className="app">
                    <img src={game.appStore} alt="img" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PopularGameSection2; 