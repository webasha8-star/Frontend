import React from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const MarqueeSection = () => {
  const location = useLocation();

  // Duplicated slides to ensure looping works
  const topSlides = [
    "Challenge your mind.",
    "Decode every layer.",
    "Challenge your mind.",
    "Decode every layer.",
  ];

  const bottomSlides = [
    "Conquer the flag.",
    "Hack Smart. Think Faster.",
    "Conquer the flag.",
    "Hack Smart. Think Faster.",
  ];

  return (
    <div
      className="gt-marque-section"
      style={{ position: "relative", zIndex: 1 }}
    >

      {/* Top Marquee (left to right) */}
      <div className="marquee-text-slider-3 style-11">
        <Swiper
          key={location.pathname + "-top"}
          modules={[Autoplay]}
          slidesPerView="auto"
          loop={true}
          speed={6000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          style={{ transitionTimingFunction: "linear" }}
        >
          {topSlides.map((text, idx) => (
            <SwiperSlide key={idx} style={{ width: "auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "40px",
                }}
              >
                <span
                  style={{
                    fontSize: "80px",
                    fontWeight: "700",
                    color: "#fff",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                  }}
                >
                  {text}
                </span>
                {idx % 2 === 0 && (
                  <span>
                    <img
                      src="/assets/img/home-1/circle.png"
                      alt="img"
                      style={{ height: "30px" }}
                    />
                  </span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Marquee (right to left) */}
      <div className="marquee-text-slider-3 style-12">
        <Swiper
          key={location.pathname + "-bottom"}
          modules={[Autoplay]}
          slidesPerView="auto"
          loop={true}
          speed={6000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          allowTouchMove={false}
          style={{ transitionTimingFunction: "linear" }}
        >
          {bottomSlides.map((text, idx) => (
            <SwiperSlide key={idx} style={{ width: "auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "40px",
                }}
              >
                <span
                  style={{
                    fontSize: "80px",
                    fontWeight: "700",
                    color: "#fff",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                  }}
                >
                  {text}
                </span>
                {idx % 2 === 0 && (
                  <span>
                    <img
                      src="/assets/img/home-1/circle.png"
                      alt="img"
                      style={{ height: "30px" }}
                    />
                  </span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MarqueeSection;
