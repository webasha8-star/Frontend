import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Chun Qing", position: "Gaming Artist", image: "team-1.jpg" },
    { id: 2, name: "Alex Rider", position: "Cyber Analyst", image: "team-2.jpg" },
    { id: 3, name: "Mia Wong", position: "Exploit Hunter", image: "team-3.jpg" },
    { id: 4, name: "Liam Gray", position: "CTF Champion", image: "team-4.jpg" },
    { id: 5, name: "Sophia Lin", position: "Red Teamer", image: "team-5.jpg" },
    { id: 6, name: "Noah Khan", position: "Ethical Hacker", image: "team-6.jpg" },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  // Set navReady once refs are attached
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavReady(true);
    }
  }, [prevRef.current, nextRef.current]);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (navReady && swiperInstance) {
      // Destroy old navigation if initialized
      if (swiperInstance.navigation && swiperInstance.navigation.initialized) {
        swiperInstance.navigation.destroy();
      }

      // Assign new navigation elements
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      // Initialize and update navigation
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }

    // Cleanup on unmount
    return () => {
      if (swiperInstance && swiperInstance.navigation && swiperInstance.navigation.initialized) {
        swiperInstance.navigation.destroy();
      }
    };
  }, [navReady]);

  return (
    <section
      className="gt-shop-section section-padding fix bg-cover"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.3,
        }}
      >
        <source src="/assets/videos/Last-Background.mp4" type="video/mp4" />
      </video>

      <div className="container">
        <div className="gt-team-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <Swiper
                modules={[Navigation]}
                loop
                slidesPerView={1}
                spaceBetween={20}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                navigation={false} // disable default navigation; attach manually
                className="gt-team-slider"
              >
                {teamMembers.map((member) => (
                  <SwiperSlide key={member.id}>
                    <div className="gt-team-card-item">
                      <div className="gt-team-image">
                        <img
                          src={`/assets/img/home-1/team/${member.image}`}
                          alt={member.name}
                        />
                        <div className="gt-team-content">
                          <div className="gt-social-icon d-flex align-items-center">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                          </div>
                          <h3>
                            <a href="/team-details">{member.name}</a>
                          </h3>
                          <p>{member.position}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="col-lg-4">
              <div className="gt-team-cont">
                <div className="gt-section-title-2">
                  <h6 className="text-white subtitle text-uppercase">
                    Our best gamer
                  </h6>
                  <h2 className="text-white">
                    OUR ELITE <br /> CYBER TEAM
                  </h2>
                </div>
                <p className="text-white gt-text">
                  Welcome to the digital warzone, where our ethical hackers,
                  red teamers, and OSCP warriors take on the toughest cyber
                  labs and real-time CTF challenges.
                </p>
                <div className="array-buttons">
                  <button ref={prevRef} className="array-prev">
                    <i className="fa-solid fa-arrow-up"></i>
                  </button>
                  <button ref={nextRef} className="array-next">
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
