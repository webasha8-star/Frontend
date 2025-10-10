import React from 'react';

const ContactSection4 = () => (
  <section className="gt-contact-section parallaxie section-padding pb-0 fix bg-cover" style={{backgroundImage: "url(/assets/img/home-4/contact/contact-bg.jpg)"}}>
    <div className="container">
      <div className="gt-contact-wrapper-4">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="gt-contact-image rotatedscal">
              <img src="/assets/img/home-4/contact/man-1.png" alt="man-1" />
              <div className="blur-shape">
                <img src="/assets/img/home-4/contact/x-blur.png" alt="x-blur" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="gt-contact-content">
              <div className="gt-section-title mb-0">
                <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">contact me</h6>
                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">Contact Me for your tournament game</h2>
              </div>
              <div className="gt-comment-form-wrap">
                <form id="contact-form" method="POST" onSubmit={e => e.preventDefault()}>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Your Name*</span>
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Your Email*</span>
                        <input type="email" name="email" id="email6" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Message*</span>
                        <textarea name="message" id="message" placeholder="Type your message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <button type="submit" className="gt-theme-btn">send message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection4; 