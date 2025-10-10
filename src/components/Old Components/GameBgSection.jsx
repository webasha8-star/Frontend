import React from 'react';

const GameBgSection = () => {
  return (
    <section className="gt-game-bg-section fix bg-cover position-relative" style={{ backgroundImage: "url(/assets/img/home-1/game/b1.jpg)" }}>
      {/* Overlay to mask the red shade */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, #0B0E13 100%)',
        zIndex: 1
      }} />
      <div className="container position-relative" style={{zIndex: 2}}>
        <div className="gt-gaming-bg-wrapper">
          <div className="row g-4 d-flex justify-content-between align-items-center">
            <div className="col-lg-6 col-12 d-flex justify-content-start">
              <div>
                <h6 className="text-white subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">World-Class Cyber Arena</h6>
                <h2 className="text-white tx-title sec_title tz-itm-title tz-itm-anim">
                  FORGING LEGENDS IN THE CTF REALM!
                </h2>
                <div className="gt-button top_view_2 item-hover animated fadeInUp">
                  <a href="/game-details" className="gt-theme-btn gt-style-border">
                    VIEW CHALLENGES
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-end">
              <div>
                <h6 className="text-white subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">Just Dropped: New CTF Labs</h6>
                <h2 className="text-white tx-title sec_title tz-itm-title tz-itm-anim">
                  GAME ON. GEAR<br/>
                  UP. WIN BIG!
                </h2>
                <div className="gt-button gt-style-2 wow animated-image slide-in-right">
                  <a href="/game-details" className="gt-theme-btn gt-style-border">
                    VIEW MORE FLAGS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameBgSection; 