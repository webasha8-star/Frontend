import React from 'react';

const MatchDetailsSection = ({ match }) => {
  return (
    <section className="gt-match-details-section section-padding fix">
      <div className="container">
        <div className="gt-match-details-wrapper">
          <div className="row g-4">
            <div className="col-lg-8 col-12">
              <div className="gt-details-post">
                <div className="gt-detials-image">
                  <img src="/assets/img/inner-page/match-details/details-1.jpg" alt="img" />
                  <div className="gt-image-item">
                    <div className="gt-small-image">
                      <img src="/assets/img/inner-page/match-details/small-1.jpg" alt="img" />
                    </div>
                    <div className="gt-logo-image">
                      <img src="/assets/img/inner-page/match-details/logo.png" alt="img" />
                    </div>
                    <div className="gt-small-image">
                      <img src="/assets/img/inner-page/match-details/small-2.jpg" alt="img" />
                    </div>
                  </div>
                </div>
                <ul className="gt-date-list">
                  <li><i className="fa-regular fa-calendar"></i> {match?.date || '30 May, 2024'}</li>
                  <li><i className="fa-regular fa-clock"></i> {match?.time || '10:00 am - 12:30 pm'}</li>
                </ul>
              </div>
              <div className="gt-details-content">
                <div className="gt-watch-now-items">
                  <span>Watch live on</span>
                  <ul className="gt-watch-now-list">
                    <li>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube"></i> you tube
                      </a>
                      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-discord"></i> discord
                      </a>
                    </li>
                    <li>
                      <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitch"></i> twitch
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-eyes"></i> GeForce
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>{match?.title || 'Call of Duty: Modern Warfare II (2022)'}</h3>
                <p>{match?.description || 'Donec scelerisque, est pharetra bibendum dignissim, mi odio facilisis sem, id imperdiet erat elit eu odio. Suspendisse vitae suscipit purus. Maecenas dapibus nibh ac ultricies consequat. Proin volutpat, libero vitae gravida pulvinar, metus elit vulputate lectus, in dictum ligula erat ut dolor. Pellentesque lacinia dignissim leo nec tempor. Donec vel eros at arcu viverra convallis. Donec imperdiet mauris ac lorem pellentesque, eget malesuada mauris fringilla.'}</p>
                
                <h4>Where does it come from?</h4>
                <p>Nam aliquam et quam vitae lobortis. Duis placerat, turpis ut accumsan mollis, diam diam lobortis diam, id mollis nunc ex in justo. Donec sit amet accumsan mollis, diam diam lobortis diam, </p>
                
                <ul className="gt-list">
                  <li><i className="fa-solid fa-check"></i> Nunc porttitor arcu in sagittis sagittis.</li>
                  <li><i className="fa-solid fa-check"></i> Morbi dictum metus eu aliquet varius.</li>
                  <li><i className="fa-solid fa-check"></i> Ut ultricies augue ut orci cursus posuere.</li>
                  <li><i className="fa-solid fa-check"></i> Nulla sollicitudin libero a quam</li>
                </ul>
                
                <div className="row g-4 pb-3">
                  <div className="col-lg-6">
                    <div className="thumb">
                      <img src="/assets/img/inner-page/match-details/details-2.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="thumb">
                      <img src="/assets/img/inner-page/match-details/details-3.jpg" alt="img" />
                      <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                <h4>Where can I get some?</h4>
                <p>Nam aliquam et quam vitae lobortis. Duis placerat, turpis ut accumsan mollis, diam diam lobortis diam, id mollis nunc ex in justo. Donec sit amet There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                
                <div className="gt-match-details-box">
                  <div className="gt-list-item">
                    <h4><span>empire</span> team players</h4>
                    <ul className="gt-list">
                      <li><i className="fa-solid fa-check"></i> Michael von</li>
                      <li><i className="fa-solid fa-check"></i> William david</li>
                      <li><i className="fa-solid fa-check"></i> Richard mia</li>
                      <li><i className="fa-solid fa-check"></i> Christopher kings</li>
                    </ul>
                  </div>
                  <div className="gt-image-item">
                    <div className="gt-small-image">
                      <img src="/assets/img/inner-page/match-details/small-3.jpg" alt="img" />
                    </div>
                    <div className="gt-logo-image">
                      <img src="/assets/img/inner-page/match-details/logo-2.png" alt="img" />
                    </div>
                    <div className="gt-small-image">
                      <img src="/assets/img/inner-page/match-details/small-4.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="gt-list-item">
                    <h4><span>empire</span> team players</h4>
                    <ul className="gt-list">
                      <li><i className="fa-solid fa-check"></i> Donald trump</li>
                      <li><i className="fa-solid fa-check"></i> Andrew sajis</li>
                      <li><i className="fa-solid fa-check"></i> Timothy gone</li>
                      <li><i className="fa-solid fa-check"></i> Benjamin mal</li>
                    </ul>
                  </div>
                </div>
                
                <p>Nam aliquam et quam vitae lobortis. Duis placerat, turpis ut accumsan mollis, diam diam lobortis diam, id mollis nunc ex in justo. Donec sit amet accumsan mollis, diam diam lobortis diam, </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchDetailsSection; 