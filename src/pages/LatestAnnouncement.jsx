import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Import Index2-specific section components or use placeholders if not available
import HeroSection2 from "../components/LatestAnnouncement/HeroSection2";
import BrandSection2 from "../components/LatestAnnouncement/BrandSection2";
import PopularGameSection2 from "../components/LatestAnnouncement/PopularGameSection2";
import TrendingMatchSection2 from "../components/LatestAnnouncement/TrendingMatchSection2";
import FeatureGameSection2 from "../components/LatestAnnouncement/FeatureGameSection2";
import PricingSection2 from "../components/LatestAnnouncement/PricingSection2";
import GamingFeatureSection2 from "../components/LatestAnnouncement/GamingFeatureSection2";
import TeamSection2 from "../components/LatestAnnouncement/TeamSection2";
import TestimonialSection2 from "../components/LatestAnnouncement/TestimonialSection2";
import CtaDownloadAppSection2 from "../components/LatestAnnouncement/CtaDownloadAppSection2";
import NewsSection2 from "../components/LatestAnnouncement/NewsSection2";
import NewsletterSection from "../components/NewsletterSection";

const LatestAnnouncement = () => (
  <>
    {/* Back to Top Button */}
    <button id="gt-back-top" className="gt-back-to-top show">
      <i className="fa-regular fa-arrow-up"></i>
    </button>

    {/* Mouse Cursor */}
    <div className="mouseCursor cursor-outer"></div>
    <div className="mouseCursor cursor-inner"></div>

    {/* Offcanvas Area */}
    <div className="fix-area">
      <div className="offcanvas__info">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <a href="/">
                  <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                </a>
              </div>
              <div className="offcanvas__close">
                <button>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="mobile-menu fix mb-3"></div>
            <div className="offcanvas__contact">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a target="_blank" href="https://maps.google.com">Main Street, Melbourne, Australia</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-clock"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a target="_blank" href="https://example.com">Mod-friday, 09am -05pm</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="tel:+11002345909">+11002345909</a>
                  </div>
                </li>
              </ul>
              <div className="social-icon d-flex align-items-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="offcanvas__overlay"></div>

    {/* Search Popup */}
    <div className="search-popup">
      <div className="search-popup__overlay search-toggler"></div>
      <div className="search-popup__content">
        <form role="search" method="get" className="search-popup__form" action="#">
          <input type="text" id="search" name="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="search-btn">
            <span><i className="fa-regular fa-magnifying-glass"></i></span>
          </button>
        </form>
      </div>
    </div>

    {/* Main Content */}
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <HeroSection2 />
        <BrandSection2 />
        <PopularGameSection2 />
        <TrendingMatchSection2 />
        <FeatureGameSection2 />
        <PricingSection2 />
        <GamingFeatureSection2 />
        <TeamSection2 />
        <TestimonialSection2 />
        <CtaDownloadAppSection2 />
        <NewsSection2 />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  </>
);

export default LatestAnnouncement; 