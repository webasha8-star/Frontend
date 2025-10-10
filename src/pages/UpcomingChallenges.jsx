import React from "react";
import Layout from "../components/Layout";

const UpcomingCTFChallenges = () => {
  // Common styles
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "5rem 1rem",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "2.5rem",
    textTransform: "none",
  };

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1a1a1a",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    color: "#d1d5db",
    flexWrap: "wrap",
  };

  const cardTextContainer = {
    flex: "1 1 60%",
    paddingRight: "1.5rem",
  };

  const cardImageStyle = {
    flex: "1 1 35%",
    maxWidth: "200px",
    borderRadius: "1rem",
  };

  const cardHeadingStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    color: "white",
    textTransform: "none",
  };

  const cardTextStyle = {
    fontSize: "0.875rem",
    marginBottom: "1rem",
    color: "#9ca3af",
  };

  const badgeBaseStyle = {
    display: "inline-block",
    fontSize: "0.75rem",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: "600",
    color: "white",
  };

  const badgeColors = {
    intermediate: { backgroundColor: "#dc2626" },
    beginner: { backgroundColor: "#eab308" },
    advanced: { backgroundColor: "#7c3aed" },
    intermediate_alt: { backgroundColor: "#ef4444" },
    advanced_alt: { backgroundColor: "#2563eb" },
    beginner_alt: { backgroundColor: "#16a34a" },
  };

  const heroSectionStyle = {
    padding: "5rem 1.5rem",
    textAlign: "center",
    color: "white",
  };

  const heroTitleStyle = {
    fontSize: "2.25rem",
    fontWeight: "800",
    marginBottom: "1rem",
  };

  const heroSubtitleStyle = {
    fontSize: "1.25rem",
    color: "#d1d5db",
    maxWidth: "48rem",
    margin: "0 auto",
  };

  const ctaSectionStyle = {
    backgroundColor: "#000000",
    padding: "4rem 1.5rem",
    textAlign: "center",
    color: "white",
  };

  const ctaTitleStyle = {
    fontSize: "1.875rem",
    fontWeight: "700",
    marginBottom: "1rem",
    
  };

  const ctaTextStyle = {
    color: "#d1d5db",
    marginBottom: "1.5rem",
    maxWidth: "42rem",
    margin: "0 auto",
  };

  const ctaButtonStyle = {
    backgroundColor: "#dc2626",
    color: "white",
    padding: "0.75rem 2rem",
    borderRadius: "9999px",
    fontSize: "1.125rem",
    fontWeight: "600",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    border: "none",
    textTransform: "none",
  };

  const ctaButtonHover = (e) => {
    e.target.style.backgroundColor = "#b91c1c";
  };

  const ctaButtonUnhover = (e) => {
    e.target.style.backgroundColor = "#dc2626";
  };

  // Challenge data
  const challenges = [
    {
      title: "🧩 Exploitation Challenge - August 1",
      desc: "Exploit a custom CMS and escalate privileges using weak permissions.",
      level: "intermediate",
      img: "https://via.placeholder.com/200x150?text=Exploitation",
    },
    {
      title: "📡 Recon Blitz - August 8",
      desc: "Passive and active enumeration of a simulated corporate network.",
      level: "beginner",
      img: "https://via.placeholder.com/200x150?text=Recon",
    },
    {
      title: "🔐 AD Takeover - August 15",
      desc: "Attack a vulnerable Active Directory forest to gain full domain control.",
      level: "advanced",
      img: "https://via.placeholder.com/200x150?text=AD+Takeover",
    },
    {
      title: "💾 Web App Exploitation - August 22",
      desc: "Target XSS, SQLi and logic flaws in a vulnerable ticketing platform.",
      level: "intermediate_alt",
      img: "https://via.placeholder.com/200x150?text=Web+App",
    },
    {
      title: "⚙️ Binary Bomb - August 29",
      desc: "Disassemble, debug and patch a reverse-engineering challenge.",
      level: "advanced_alt",
      img: "https://via.placeholder.com/200x150?text=Binary+Bomb",
    },
    {
      title: "🎭 Social Engineering Sprint - September 5",
      desc: "Use OSINT and pretexting tactics to gain credentials via phishing simulation.",
      level: "beginner_alt",
      img: "https://via.placeholder.com/200x150?text=Social+Engineering",
    },
  ];

  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <main style={{ flexGrow: 1, paddingTop: "80px" }}>
          {/* Hero Section */}
          <section style={heroSectionStyle}>
            <h1 style={heroTitleStyle}>Upcoming CTF Challenges</h1>
            <p style={heroSubtitleStyle}>
              Sharpen your skills with weekly challenges designed to test and push your OSCP readiness.
            </p>
          </section>

          {/* Cards Section */}
          <section style={containerStyle}>
            {challenges.map((challenge, index) => (
              <div key={index} style={cardStyle}>
                <div style={cardTextContainer}>
                  <h2 style={cardHeadingStyle}>{challenge.title}</h2>
                  <p style={cardTextStyle}>{challenge.desc}</p>
                  <span style={{ ...badgeBaseStyle, ...badgeColors[challenge.level] }}>
                    {challenge.level.replace("_alt", "").toUpperCase()}
                  </span>
                </div>
                <img src={challenge.img} alt={challenge.title} style={cardImageStyle} />
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section style={ctaSectionStyle}>
            <h2 style={ctaTitleStyle}>Think you're ready?</h2>
            <p style={ctaTextStyle}>
              Join our upcoming challenge series and earn badges, rank up, and showcase your offensive security skills.
            </p>
            <button
              style={ctaButtonStyle}
              onMouseEnter={ctaButtonHover}
              onMouseLeave={ctaButtonUnhover}
              onClick={() => alert("Register for Challenges clicked!")}
            >
              Register for Challenges
            </button>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default UpcomingCTFChallenges;
