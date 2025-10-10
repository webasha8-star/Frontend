import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";
import "./css/Testimonial.css";

const testimonials = [
  {
    name: "Aarav Kumar",
    role: "Cybersecurity Student",
    feedback:
      "CrackMeNow has helped me understand ethical hacking like never before. The labs are fun, realistic, and well-structured.",
    fullFeedback:
      "CrackMeNow has helped me understand ethical hacking like never before. The labs are fun, realistic, and well-structured. I especially liked how every topic is followed by a lab that challenges you to apply the concepts immediately. The step-by-step structure and guided challenges were incredibly helpful for a beginner like me.",
    avatar: "/imagesទ1/images/avatars/aarav.jpg",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    role: "Bug Bounty Hunter",
    feedback:
      "The challenges are perfect for both beginners and pros. I loved how interactive and hands-on everything is.",
    fullFeedback:
      "The challenges are perfect for both beginners and pros. I loved how interactive and hands-on everything is. The interface is beginner-friendly and the leaderboard system keeps me motivated. It's a great stepping stone for real-world bug bounty programs.",
    avatar: "/images/avatars/meera.jpg",
    rating: 4,
  },
  {
    name: "Rohan Patel",
    role: "Junior Pentester",
    feedback:
      "Thanks to CrackMeNow, I cracked my first interview in infosec! The OSCP-style exercises were top-notch.",
    fullFeedback:
      "Thanks to CrackMeNow, I cracked my first interview in infosec! The OSCP-style exercises were top-notch. The labs mimic real-world situations which made me feel confident during technical rounds.",
    avatar: "/images/avatars/rohan.jpg",
    rating: 5,
  },
  {
    name: "Sana Qureshi",
    role: "Ethical Hacking Trainee",
    feedback:
      "CrackMeNow made cyber learning exciting. I was surprised how intuitive the platform was.",
    fullFeedback:
      "CrackMeNow made cyber learning exciting. I was surprised how intuitive the platform was. The visual explanations and lab walkthroughs made everything feel achievable even as a beginner.",
    avatar: "/images/avatars/sana.jpg",
    rating: 4,
  },
  {
    name: "Dev Malik",
    role: "Security Analyst Intern",
    feedback:
      "One of the best platforms to simulate real attacks in a controlled environment.",
    fullFeedback:
      "One of the best platforms to simulate real attacks in a controlled environment. It gave me an edge in my internship where I was tasked with analyzing internal vulnerabilities. Highly recommended!",
    avatar: "/images/avatars/dev.jpg",
    rating: 5,
  },
  {
    name: "Ishita Rane",
    role: "Aspiring Red Teamer",
    feedback:
      "Their red team series is incredibly structured and focused on skill-building.",
    fullFeedback:
      "Their red team series is incredibly structured and focused on skill-building. The progression from enumeration to lateral movement is what sets CrackMeNow apart from others.",
    avatar: "/images/avatars/ishita.jpg",
    rating: 4,
  },
];

const Testimonial = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Layout>
      <div className="testimonial-section">
        <h1 className="testimonial-heading">WHAT OUR LEARNERS SAY</h1>
        <Slider {...sliderSettings} className="testimonial-grid-two">
          {testimonials.map((t, index) => {
            const isExpanded = expanded[index];
            const showFull = t.fullFeedback && isExpanded;
            const showToggle = t.fullFeedback && t.fullFeedback !== t.feedback;

            return (
              <div className="testimonial-card" key={index}>
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={`Profile picture of ${t.name}`}
                    className="testimonial-avatar"
                  />
                )}
                {t.rating && (
                  <div className="testimonial-rating">
                    {Array(t.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                  </div>
                )}
                <p className="testimonial-feedback">
                  {showFull ? t.fullFeedback : t.feedback}
                </p>
                {showToggle && (
                  <button
                    className="testimonial-toggle"
                    onClick={() => toggleExpand(index)}
                    aria-label={
                      isExpanded
                        ? `Collapse testimonial from ${t.name}`
                        : `Expand testimonial from ${t.name}`
                    }
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
                <div className="testimonial-user">
                  <h3 className="testimonial-name">{t.name}</h3>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <a href="/signup" className="testimonial-cta">
          Start Your Cybersecurity Journey Today
        </a>
      </div>
    </Layout>
  );
};

export default Testimonial;