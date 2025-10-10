import React from 'react';

const ShopSection = () => {
  const shopItems = [
    { id: 1, image: 'shop-1.png' },
    { id: 2, image: 'shop-2.png' },
    { id: 3, image: 'shop-3.png' },
    { id: 4, image: 'shop-4.png' }
  ];

  return (
    <section className="gt-shop-section section-padding fix bg-cover" style={{ backgroundImage: "url(/assets/img/home-1/shop/shop-bg.jpg)" }}>
      <div className="container">
        <div className="gt-section-title-2 text-center">
          <h6 className="subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">HACKER’S ARSENAL</h6>
          <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
           Choose Your Offensive PathS
          </h2>
        </div>
        <div className="swiper gt-shop-slider">
          <div className="swiper-wrapper">
            {shopItems.map((item) => (
              <div key={item.id} className="swiper-slide">
                <div className="gt-shop-card-item">
                  <span>25% off</span>
                  <div className="gt-shop-image">
                    <img src={`/assets/img/home-1/shop/${item.image}`} alt="img" />
                    <ul className="gt-shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <a href="/shop-cart"><i className="far fa-heart"></i></a>
                      </li>
                      <li>
                        <a href="/shop-cart">
                          <i className="far fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                          <i className="far fa-eye"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="gt-shop-content">
                    <h5>
                      <a href="/shop-details">
                        Virtual Reality Glasses <br />
                        & Controllers
                      </a>
                    </h5>
                    <p>$185.10-$285.30</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection; 