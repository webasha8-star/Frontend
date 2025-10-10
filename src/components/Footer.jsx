import React, { useState, useEffect, useCallback } from 'react';

const footerStyle = {
  background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
  color: '#fff',
  padding: '60px 20px 40px',
  fontFamily: '"Poppins", sans-serif',
};

const headingStyle = {
  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: '600',
  marginBottom: '20px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const contactText = {
  color: '#d1d5db',
  fontSize: '0.95rem',
  lineHeight: '1.6',
};

const scrollButtonStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  background: '#ff3c3c',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
  opacity: '0',
  pointerEvents: 'none',
};

const scrollButtonVisibleStyle = {
  opacity: '1',
  pointerEvents: 'auto',
};

const logoStyle = {
  maxHeight: '150px',
  width: 'auto',
};

const Footer = () => {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrollButtonVisible(window.scrollY > 200);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      let timeout;
      return () => {
        if (!timeout) {
          timeout = setTimeout(() => {
            handleScroll();
            timeout = null;
          }, 100);
        }
      };
    };

    window.addEventListener('scroll', throttledScroll());
    return () => window.removeEventListener('scroll', throttledScroll());
  }, [handleScroll]);

  return (
    <footer style={footerStyle} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Swapped positions: Contact on left, Logo on right */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          
          {/* Contact + About Us LEFT */}
          <div style={{ maxWidth: '400px' }}>
            <div style={contactText}>
              <p>Contact: +91 8010911256</p>
              <p>Email: xyz@gmail.com</p>
              <p>
                Address: 1st Floor, (Beside Mahanagar Co-op Bank),
                Nagar Road, Chandan Nagar, Pune-411014
              </p>
            </div>
            <div style={{ marginTop: '24px' }}>
              <h4 style={headingStyle}>About Us</h4>
              <p style={contactText}>
                CrackMeNow provides cutting-edge cybersecurity education and hands-on labs.
              </p>
            </div>
          </div>

          {/* Logo RIGHT */}
          <div>
            <img
              src="/assets/img/logo/Footer_logo.png"
              alt="CrackMeNow Logo"
              style={logoStyle}
              className="self-start"
            />
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} CrackMeNow. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
