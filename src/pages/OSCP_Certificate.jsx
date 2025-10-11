import React, { useMemo } from "react";
import Layout from "../components/Layout";

const OSCP_Certificates = [
  {
    title: "🧩 Foundational",
    desc: "Start your cybersecurity journey with core hacking concepts.",
    items: ["Info Gathering", "Web Basics (SQLi/XSS)", "Enumeration Tools", "Beginner Shells"],
  },
  {
    title: "🧰 Intermediate",
    desc: "Refine practical skills in realistic lab scenarios.",
    items: ["Privilege Escalation", "Manual Exploitation", "Metasploit & Enumeration", "Buffer Overflows (32-bit)"],
  },
  {
    title: "🛡️ Advanced",
    desc: "Master real-world red teaming and OSCP exam tactics.",
    items: ["AD & Kerberoasting", "AV Evasion & Shellcode", "C2 Channels", "Manual Buffer Overflows"],
  },
];

const benefits = [
  {
    title: "🚀 Career Growth",
    desc: "87% of certified learners secure job interviews or promotions within 6 months.",
    link: "/testimonial",
    tooltip: "2024 user survey data.",
  },
  {
    title: "🌍 Global Recognition",
    desc: "Earn Credly-compatible certifications trusted by cybersecurity recruiters worldwide.",
    link: "/training-path",
    tooltip: "Share badges on LinkedIn.",
  },
  {
    title: "🤝 Hacker Community",
    desc: "Join a global network of ethical hackers to collaborate and compete.",
    link: "/upcoming-challenges",
    tooltip: "Join CTF events and forums.",
  },
];

function OSCP_Certificate () {
  const memoizedBenefits = useMemo(() => benefits, []);
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  return (
    <>
      <Layout>
        <div style={{ paddingTop: "10px", fontFamily: "'Roboto Mono', Arial, sans-serif" }}>
          {/* Breadcrumb */}
          <div
            className="gt-breadcrumb-wrapper bg-cover"
            style={{
              backgroundImage: `url('/assets/img/breadcrumb.png')`,
              padding: "40px 0 20px 0",
            }}
          >
            <div className="container">
              <div className="gt-page-heading" style={{ textAlign: "center" }}>
                <h1
                  className="wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    color: "#39FF14",
                    fontWeight: 800,
                    fontSize: isMobile ? "2rem" : "2.5rem",
                    marginBottom: "10px",
                    letterSpacing: "2px",
                  }}
                >
                  Get OSCP Certified
                </h1>

              </div>
            </div>
          </div>

          {/* Hero Section */}
          <section
            className="linuxprivesc-hero-section section-padding fix"
            style={{
              background: "linear-gradient(90deg, #0B0E13 60%, #232d3f 100%)",
              padding: isMobile ? "40px 0" : "60px 0 40px 0",
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2
                    className="tx-title sec_title tz-itm-title tz-itm-anim"
                    style={{
                      color: "#39FF14",
                      fontSize: isMobile ? "1.8rem" : "2.3rem",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      marginBottom: "18px",
                    }}
                  >
                    Get OSCP Certified
                  </h2>
                  <p
                    style={{
                      color: "#eaffd0",
                      fontSize: isMobile ? "1rem" : "1.15rem",
                      marginBottom: "0",
                      maxWidth: "600px",
                      lineHeight: "1.7",
                    }}
                  >
                    Prove your hacking skills with globally recognized offensive security certifications.
                  </p>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="/assets/img/home-2/feature-game/game-03.jpg"
                      alt="Linux PrivEsc"
                      style={{
                        borderRadius: "18px",
                        boxShadow: "0 0 2px #39FF14",
                        maxWidth: "340px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Labs/Challenges List */}
          <section
            className="linuxprivesc-labs-list section-padding fix"
            style={{ background: "#181c23", padding: isMobile ? "32px 0" : "48px 0" }}
          >
            <div className="container">
              <div className="row g-4">
                {OSCP_Certificates.map((lab) => (
                  <div className="col-md-6 col-lg-4" key={lab.title}>
                    <div
                      className="linuxprivesc-lab-card"
                      style={{
                        background: "#232d3f",
                        borderRadius: "16px",
                        boxShadow: "0 0 2px #39FF14",
                        padding: isMobile ? "24px 16px" : isTablet ? "28px 20px" : "32px 24px",
                        minHeight: "210px",
                        transition: "transform 0.2s",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            color: "#39FF14",
                            fontWeight: 700,
                            marginBottom: "12px",
                            fontSize: isMobile ? "1.1rem" : "1.25rem",
                            letterSpacing: "1px",
                          }}
                        >
                          {lab.title}
                        </h4>
                        <p
                          style={{
                            color: "#eaffd0",
                            marginBottom: "18px",
                            fontSize: isMobile ? "0.95rem" : "1.05rem",
                          }}
                        >
                          {lab.desc}
                        </p>
                        <ul
                          style={{
                            color: "#bfc9da",
                            fontSize: isMobile ? "0.9rem" : "1rem",
                            marginBottom: "18px",
                            paddingLeft: "18px",
                            lineHeight: "1.7",
                          }}
                        >
                          {lab.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose OSCP-Aligned Certification Section */}
          <section
            className="benefits-section section-padding fix"
            style={{
              background: "linear-gradient(135deg, #0B0E13 60%, #232d3f 100%)",
              padding: isMobile ? "40px 0" : "60px 0",
              position: "relative",
              overflow: "hidden",
            }}
            role="region"
            aria-label="Why Choose OSCP-Aligned Certification"
          >
            <style>
              {`
                .benefit-card {
                  opacity: 0;
                  transform: translateY(20px);
                  animation: fadeInUp 0.6s ease-out forwards;
                }
                .benefit-card:nth-child(1) { animation-delay: 0.1s; }
                .benefit-card:nth-child(2) { animation-delay: 0.2s; }
                .benefit-card:nth-child(3) { animation-delay: 0.3s; }
                .benefit-card:nth-child(4) { animation-delay: 0.4s; }
                .cta-card { animation-delay: 0.5s; }
                @keyframes fadeInUp {
                  to { opacity: 1; transform: translateY(0); }
                }
              `}
            </style>
            <div style={{ position: "relative", zIndex: 1, background: "rgba(56, 189, 248, 0.05)" }}>
              <div className="container">
                <h2
                  style={{
                    color: "#38bdf8",
                    fontSize: isMobile ? "1.8rem" : "2.3rem",
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom: isMobile ? "24px" : "40px",
                    letterSpacing: "2px",
                  }}
                >
                  Why Choose OSCP-Aligned Certification?
                </h2>
                <div
                  className="row g-4"
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                    gap: isMobile ? "16px" : "20px",
                  }}
                >
                  {memoizedBenefits.map((benefit, index) => (
                    <article
                      key={benefit.title}
                      className="benefit-card"
                      style={{
                        background: "#1e2636",
                        borderRadius: "12px",
                        border: "1px solid #38bdf8",
                        boxShadow: "0 0 6px rgba(56, 189, 248, 0.2)",
                        padding: isMobile ? "12px" : isTablet ? "16px" : "20px",
                        transition: "transform 0.2s, box-shadow 0.3s",
                        position: "relative",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 0 8px rgba(56, 189, 248, 0.3)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 0 6px rgba(56, 189, 248, 0.2)";
                      }}
                      aria-labelledby={`benefit-title-${index}`}
                    >
                      <h3
                        id={`benefit-title-${index}`}
                        style={{
                          color: "#f0f4e8",
                          fontSize: isMobile ? "1rem" : "1.1rem",
                          fontWeight: 600,
                          marginBottom: "8px",
                        }}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        style={{
                          color: "#bfc9da",
                          fontSize: isMobile ? "0.85rem" : "0.9rem",
                          lineHeight: "1.6",
                          marginBottom: "8px",
                        }}
                      >
                        {benefit.desc}
                      </p>
                      <a
                        href={benefit.link}
                        style={{
                          color: "#38bdf8",
                          fontSize: isMobile ? "0.8rem" : "0.85rem",
                          textDecoration: "none",
                          fontWeight: 500,
                          transition: "color 0.3s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#60a5fa")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "#38bdf8")}
                      >
                        Learn More
                      </a>
                      {!isMobile && (
                        <span
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            top: "-35px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "#1e2636",
                            color: "#f0f4e8",
                            fontSize: "0.75rem",
                            padding: "3px 6px",
                            borderRadius: "4px",
                            border: "1px solid #38bdf8",
                            boxShadow: "0 0 4px rgba(56, 189, 248, 0.2)",
                            whiteSpace: "nowrap",
                            zIndex: 10,
                          }}
                          className="tooltip"
                          tabIndex={0}
                        >
                          {benefit.tooltip}
                        </span>
                      )}
                      <style>
                        {`
                          article:hover .tooltip, article:focus-within .tooltip {
                            visibility: visible;
                          }
                        `}
                      </style>
                    </article>
                  ))}
                  {/* Showcase Your Skills CTA Card */}
                  <article
                    className="benefit-card cta-card"
                    style={{
                      background: "#1e2636",
                      borderRadius: "12px",
                      border: "1px solid #38bdf8",
                      boxShadow: "0 0 6px rgba(56, 189, 248, 0.2)",
                      padding: isMobile ? "16px" : isTablet ? "20px" : "24px",
                      textAlign: "center",
                      gridColumn: isMobile ? "1" : isTablet ? "span 2" : "span 3",
                    }}
                  >
                    <h3
                      style={{
                        color: "#f0f4e8",
                        fontSize: isMobile ? "1.2rem" : "1.4rem",
                        fontWeight: 700,
                        marginBottom: "12px",
                      }}
                    >
                      Showcase Your Skills
                    </h3>
                    <p
                      style={{
                        color: "#bfc9da",
                        fontSize: isMobile ? "0.85rem" : "0.9rem",
                        marginBottom: "12px",
                        maxWidth: "600px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        lineHeight: "1.6",
                      }}
                    >
                      Get listed in our Hackers’ Talent Directory and display your verified badge on LinkedIn, GitHub, and resumes.
                    </p>
                    <p
                      style={{
                        color: "#38bdf8",
                        fontSize: isMobile ? "0.8rem" : "0.85rem",
                        fontStyle: "italic",
                        marginBottom: "16px",
                      }}
                    >
                      “CrackMeNow’s OSCP prep landed me my dream job!” — Jane D., 2024
                    </p>
                    <a
                      href="/labs/1"
                      style={{
                        display: "inline-block",
                        padding: isMobile ? "10px 20px" : "12px 32px",
                        backgroundColor: "#39FF14",
                        color: "#232d3f",
                        fontWeight: 700,
                        fontSize: isMobile ? "0.9rem" : "1rem",
                        borderRadius: "24px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(57, 255, 20, 0.4)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#2ecc40";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(46, 204, 64, 0.6)";
                        e.currentTarget.style.transform = "scale(1.03)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#39FF14";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(57, 255, 20, 0.4)";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                      onClick={(e) => {
                        e.currentTarget.style.transform = "scale(0.97)";
                        setTimeout(() => (e.currentTarget.style.transform = "scale(1)"), 100);
                      }}
                      aria-label="Start your OSCP certification journey"
                    >
                      Start Your Certification Journey
                    </a>
                    <div
                      style={{
                        marginTop: "16px",
                        fontSize: isMobile ? "0.8rem" : "0.85rem",
                      }}
                    >
                      <a
                        href="/faq"
                        style={{
                          color: "#38bdf8",
                          textDecoration: "none",
                          fontWeight: 500,
                          transition: "color 0.3s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#60a5fa")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "#38bdf8")}
                      >
                        Have Questions? Visit Our FAQ
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
      {/* Animation style */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default OSCP_Certificate;