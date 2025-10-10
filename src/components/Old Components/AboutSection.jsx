import React from 'react';

const AboutSection = () => {
  return (
    <section className="gt-about-section fix section-padding">
      <h2 className="text">
        Crack Me Now <br />
        2025
      </h2>
      <div className="left-shape">
      </div>
      <div className="container">
        <div className="gt-about-wrapper">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="gt-about-content">
                <div className="gt-section-title mb-0">
                  <h6 className="subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">
                    about Crack Me Now
                  </h6>
                  <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                    The Journey Of <br />
                    <span>Crack Me Now</span>
                  </h2>
                </div>
                <p className="gt-about-text top_view_2 item-hover">
                 Crack Me Now isn’t just a CTF platform — it’s a battlefield for curious minds.
                 We craft immersive cybersecurity challenges designed to test, train, and transform every aspiring hacker into a digital warrior.
                </p>
                <div className="gt-about-box-wrapper top_view_2 item-hover" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '12px' }}>
                  <div className="gt-about-box bg-color" style={{ height: '100%', display: 'flex', alignItems: 'center', background: '#181c23', borderRadius: '14px', boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)', padding: '18px' }}>
                    <div className="icon" style={{ marginRight: '16px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#232d3f', borderRadius: '50%' }}>
                      <img 
                        src="/assets/img/home-1/icon/OSCP_Duration_Logo.svg" 
                        alt="OSCP Duration Logo" 
                        style={{ width: '24px', height: '24px' }}
                      />
                    </div>
                    <div className="content">
                      <h5 style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#fff', lineHeight: 1.2 }}>oscp exam duration</h5>
                      <h6 style={{ margin: 0, fontWeight: 600, fontSize: '0.93rem', color: '#e94560', lineHeight: 1.2 }}>⏱ 24-Hour Challenge</h6>
                      <p style={{ margin: 0, color: '#bfc9da', fontSize: '0.89rem', lineHeight: 1.4 }}>
                        Master real-world hacking and live lab environment.
                      </p>
                    </div>
                  </div>
                  <div className="gt-about-box bg-color" style={{ height: '100%', display: 'flex', alignItems: 'center', background: '#181c23', borderRadius: '14px', boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)', padding: '18px' }}>
                    <div className="icon" style={{ marginRight: '16px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#232d3f', borderRadius: '50%' }}>
                      <img 
                        src="/assets/img/home-1/icon/OSCP_Pricing_Logo.svg" 
                        alt="OSCP Pricing Logo" 
                        style={{ width: '24px', height: '24px' }}
                      />
                    </div>
                    <div className="content">
                      <h5 style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#fff', lineHeight: 1.2 }}>OSCP Pricing</h5>
                      <h6 style={{ margin: 0, fontWeight: 600, fontSize: '0.93rem', color: '#e94560', lineHeight: 1.2 }}>₹85,000–₹1,00,000 INR</h6>
                      <p style={{ margin: 0, color: '#bfc9da', fontSize: '0.89rem', lineHeight: 1.4 }}>
                        Includes exam, lab access, and courseware (varies by plan duration).
                      </p>
                    </div>
                  </div>
                  <div className="gt-about-box bg-color" style={{ height: '100%', display: 'flex', alignItems: 'center', background: '#181c23', borderRadius: '14px', boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)', padding: '18px' }}>
                    <div className="icon" style={{ marginRight: '16px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#232d3f', borderRadius: '50%' }}>
                      <img 
                        src="/assets/img/home-1/icon/Course_Content_Logo.svg" 
                        alt="Course Content Logo" 
                        style={{ width: '24px', height: '24px' }}
                      />
                    </div>
                    <div className="content">
                      <h5 style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#fff', lineHeight: 1.2 }}>Course Content</h5>
                      <h6 style={{ margin: 0, fontWeight: 600, fontSize: '0.93rem', color: '#e94560', lineHeight: 1.2 }}>Hands-On Exploitation Labs</h6>
                      <p style={{ margin: 0, color: '#bfc9da', fontSize: '0.89rem', lineHeight: 1.4 }}>
                        Covers scanning, enumeration, privilege escalation, buffer overflow, and AD attacks.
                      </p>
                    </div>
                  </div>
                  <div className="gt-about-box bg-color" style={{ height: '100%', display: 'flex', alignItems: 'center', background: '#181c23', borderRadius: '14px', boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)', padding: '18px' }}>
                    <div className="icon" style={{ marginRight: '16px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#232d3f', borderRadius: '50%' }}>
                      <img 
                        src="/assets/img/home-1/icon/Certification_Logo.svg" 
                        alt="Certification Logo" 
                        style={{ width: '24px', height: '24px' }}
                      />
                    </div>
                    <div className="content">
                      <h5 style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#fff', lineHeight: 1.2 }}>Certification Goal</h5>
                      <h6 style={{ margin: 0, fontWeight: 600, fontSize: '0.93rem', color: '#e94560', lineHeight: 1.2 }}>Global Ethical Hacking Standard</h6>
                      <p style={{ margin: 0, color: '#bfc9da', fontSize: '0.89rem', lineHeight: 1.4 }}>
                        The gold-standard certification for Penetration Testers and Red Teamers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-xl-7 col-lg-12 col-md-7">
                  <div className="fix">
                    <div className="gt-about-image left_view">
                      <img src="/assets/img/home-1/about/about1.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-12 col-md-5">
                  <div className="gt-about-image gt-about-image-2 top_view">
                    <img src="/assets/img/home-1/about/about2.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 