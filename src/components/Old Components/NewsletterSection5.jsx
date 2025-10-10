import React from 'react';

const NewsletterSection5 = () => (
  <section className="gt-newsletter-section fix mb-4 mt-5">
    <div className="container">
      <div className="gt-newsletter-wrapper bg-cover" style={{backgroundImage: 'url(/assets/img/home-1/cta/newsletter-bg.jpg)'}}>
        <div className="shape">
          <img src="/assets/img/home-1/cta/drive.png" alt="drive" />
        </div>
        <h4>
          Sign up today to get the latest <br />
          inspiration & insights
        </h4>
        <form action="#" onSubmit={e => e.preventDefault()}>
          <div className="form-clt">
            <input type="text" name="email" id="email" placeholder="Your Email Address" />
            <button type="submit" className="gt-theme-btn">subscribe now</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default NewsletterSection5; 